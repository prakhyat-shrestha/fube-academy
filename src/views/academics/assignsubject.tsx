'use client'
import CustomTextField from '@/@core/components/mui/TextField'
import {
  Autocomplete,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  IconButton,
  MenuItem,
  Typography
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'
import EditIcon from '@mui/icons-material/Edit'
import SearchIcon from '@mui/icons-material/Search'
import { useEffect, useMemo, useState } from 'react'
import { useAssignSubjectStore } from '@/stores/assignSubjectStore'
import { useAssignClassTeacherStore } from '@/stores/assignClassTeacherStore' // adjust path if different
import { useSubjectStore } from '@/stores/subjectStore' // adjust path if different
import { useClassStore } from '@/stores/classStore'
import { AssignSubjectTypes } from '@/types/assignSubject'
import { AssignClassTeacherTypes } from '@/types/assignClassTeacher' // adjust path if different
import { SubjectTypes } from '@/types/subjectTypes' // adjust path if different
import { ClassTypes, SecTypes } from '@/types/class'

type Option = { id: number; label: string }

type AssignRow = {
  rowId: number // local React key only
  id?: number // assignSubject id from backend (undefined = not saved yet)
  subject: Option | null // subject.id = subjectId
  teacher: Option | null // teacher.id = assignClassTeacherId
}

let rowCounter = 0
const newRow = (init: Partial<AssignRow> = {}): AssignRow => ({
  rowId: ++rowCounter,
  subject: null,
  teacher: null,
  ...init
})

const AssignSubjectLayout = () => {
  const [classId, setClassId] = useState<number | 'selectClass'>('selectClass')
  const [classSectionId, setClassSectionId] = useState<number | 'selectSection'>('selectSection')
  const { classes } = useClassStore()
  const { subject, listOfSubject } = useSubjectStore()
  const { assignClassTeacher, listOfAssignClassTeacher } = useAssignClassTeacherStore()
  const { isLoading, addAssignSubject, updateAssignSubject, deleteAssignSubject, searchAssignSubject } =
    useAssignSubjectStore()

  // second card state
  const [showAssign, setShowAssign] = useState(false)
  const [rows, setRows] = useState<AssignRow[]>([])
  const [submitted, setSubmitted] = useState(false)

  /* ---------- load dropdown data ---------- */
  useEffect(() => {
    // large limit so dropdowns are not cut at the default page size
    listOfSubject(1, 1000)
    listOfAssignClassTeacher(1, 1000)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const subjectOptions: Option[] = useMemo(
    () =>
      (subject ?? []).map((s: SubjectTypes) => ({
        id: s.id,
        label: s.code ? `${s.name}(${s.code})` : s.name
      })),
    [subject]
  )

  // assignClassTeacherId already points to ONE class-section, so only offer the teachers
  // of the section that is currently selected. option id = assignClassTeacher.id
  const teacherOptions: Option[] = useMemo(() => {
    if (classSectionId === 'selectSection') return []
    return (assignClassTeacher ?? [])
      .filter((a: AssignClassTeacherTypes) => a.classSectionId === classSectionId)
      .map((a: AssignClassTeacherTypes) => ({ id: a.id, label: a.staff?.name ?? `Teacher #${a.id}` }))
  }, [assignClassTeacher, classSectionId])

  /* ---------- search card ---------- */
  const handleClassChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value
    setClassId(v === 'selectClass' ? 'selectClass' : Number(v))
    setClassSectionId('selectSection')
    setShowAssign(false)
  }

  const sections: SecTypes[] = (classes ?? []).find((cls: ClassTypes) => cls.id === classId)?.sections ?? []

  const handleSectionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setClassSectionId(Number(e.target.value))
    setShowAssign(false)
  }

  // search the backend and turn the saved assignments into rows
  const loadRows = async (sectionId: number) => {
    // the store is persisted and keeps the previous result when a search fails -> clear it first
    useAssignSubjectStore.setState({ assignSubject: [] })
    await searchAssignSubject(sectionId)

    const data = useAssignSubjectStore.getState().assignSubject
    const saved: AssignSubjectTypes[] = Array.isArray(data) ? data : []

    // build every row from the search response itself, so it shows even if the dropdown lists are not loaded
    const built = saved.map(item =>
      newRow({
        id: item.id,
        subject:
          subjectOptions.find(o => o.id === item.subjectId) ??
          (item.subject ? { id: item.subject.id, label: item.subject.name } : null),
        teacher:
          teacherOptions.find(o => o.id === item.assignClassTeacherId) ??
          (item.assignClassTeacher
            ? { id: item.assignClassTeacher.id, label: item.assignClassTeacher.staff?.name ?? '' }
            : null)
      })
    )

    setRows(built.length ? built : [newRow()])
    setSubmitted(false)
    setShowAssign(true)
  }

  const handleSearch = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    if (classSectionId === 'selectSection') {
      alert('Please select class and section.')
      return
    }
    await loadRows(classSectionId)
  }

  /* ---------- row handlers ---------- */
  const addRow = () => setRows(prev => [...prev, newRow()])

  const updateRow = (rowId: number, field: 'subject' | 'teacher', value: Option | null) =>
    setRows(prev => prev.map(r => (r.rowId === rowId ? { ...r, [field]: value } : r)))

  const handleRemoveRow = async (row: AssignRow) => {
    if (row.id) {
      if (!confirm('Delete this assigned subject?')) return
      await deleteAssignSubject(row.id)
    }
    setRows(prev => prev.filter(r => r.rowId !== row.rowId))
  }

  const handleUpdateRow = async (row: AssignRow) => {
    setSubmitted(true)
    if (!row.id || !row.subject || !row.teacher) return

    const formData: Partial<AssignSubjectTypes> = {
      assignClassTeacherId: row.teacher.id,
      subjectId: row.subject.id
    }
    await updateAssignSubject(row.id, formData)
  }

  // saves only the rows that are not in the backend yet, one formData per row
  const handleSave = async () => {
    if (classSectionId === 'selectSection') return
    setSubmitted(true)

    const newRows = rows.filter(r => !r.id)
    if (newRows.length === 0) return
    if (newRows.some(r => !r.subject || !r.teacher)) return

    for (const r of newRows) {
      const formData: Partial<AssignSubjectTypes> = {
        assignClassTeacherId: r.teacher!.id,
        subjectId: r.subject!.id
      }
      await addAssignSubject(formData)
    }

    await loadRows(classSectionId) // reload so the new rows get their backend ids
  }

  const unsavedCount = rows.filter(r => !r.id).length

  return (
    <>
      <div className='flex-col'>
        <div className='flex justify-between items-center' style={{ marginBottom: '20px' }}>
          <Typography variant='h6' component='h3'>
            Select Criteria
          </Typography>
        </div>

        {/* first card for search bar */}
        <Card sx={{ width: '100%' }}>
          <CardContent>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={6} md={6}>
                <CustomTextField select fullWidth value={classId} onChange={handleClassChange} label='Select Class'>
                  <MenuItem value='selectClass'>
                    <span style={{ fontStyle: 'normal' }}>Select Class</span>
                  </MenuItem>
                  {(classes ?? []).map((cls: ClassTypes) => (
                    <MenuItem value={cls.id} key={cls.id}>
                      {cls.name}
                    </MenuItem>
                  ))}
                </CustomTextField>
              </Grid>
              <Grid item xs={12} sm={6} md={6}>
                <CustomTextField
                  select
                  fullWidth
                  value={classSectionId}
                  disabled={classId === 'selectClass'}
                  onChange={handleSectionChange}
                  label='Select Section'
                >
                  <MenuItem value='selectSection'>
                    <span style={{ fontStyle: 'normal' }}>Select Section</span>
                  </MenuItem>
                  {sections.map((sec: SecTypes) => (
                    <MenuItem value={sec.classSectionId} key={sec.id}>
                      {sec.name}
                    </MenuItem>
                  ))}
                </CustomTextField>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions style={{ justifyContent: 'flex-end', padding: '0 20px 20px' }}>
            <Button variant='contained' onClick={handleSearch} disabled={isLoading} startIcon={<SearchIcon />}>
              Search
            </Button>
          </CardActions>
        </Card>

        {/* second card: assign subject rows (shown after a search) */}
        {showAssign && (
          <>
            <div className='flex justify-between items-center' style={{ margin: '32px 0 20px' }}>
              <Typography variant='h6' component='h3'>
                Assign Subject create
              </Typography>
              <IconButton
                color='primary'
                onClick={addRow}
                aria-label='Add subject row'
                sx={{
                  bgcolor: 'primary.main',
                  color: 'primary.contrastText',
                  '&:hover': { bgcolor: 'primary.dark' }
                }}
              >
                <AddIcon />
              </IconButton>
            </div>

            <Card sx={{ width: '100%' }}>
              <CardContent>
                {rows.length === 0 ? (
                  <Typography color='text.secondary'>No rows yet. Use the + button to add a subject.</Typography>
                ) : (
                  <Grid container spacing={4}>
                    {rows.map(row => (
                      <Grid item xs={12} key={row.rowId}>
                        <Grid container spacing={4} alignItems='center'>
                          <Grid item xs={12} sm={5}>
                            <Autocomplete
                              options={subjectOptions}
                              value={row.subject}
                              onChange={(_, v) => updateRow(row.rowId, 'subject', v)}
                              isOptionEqualToValue={(o, v) => o.id === v.id}
                              getOptionLabel={o => o.label}
                              noOptionsText='No subjects found'
                              renderInput={params => (
                                <CustomTextField
                                  {...params}
                                  placeholder='Select Subjects'
                                  error={submitted && !row.subject}
                                  helperText={submitted && !row.subject ? 'Subject is required' : ''}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item xs={12} sm={5}>
                            <Autocomplete
                              options={teacherOptions}
                              value={row.teacher}
                              onChange={(_, v) => updateRow(row.rowId, 'teacher', v)}
                              isOptionEqualToValue={(o, v) => o.id === v.id}
                              getOptionLabel={o => o.label}
                              noOptionsText='No teachers assigned to this section'
                              renderInput={params => (
                                <CustomTextField
                                  {...params}
                                  placeholder='Select Teacher'
                                  error={submitted && !row.teacher}
                                  helperText={submitted && !row.teacher ? 'Teacher is required' : ''}
                                />
                              )}
                            />
                          </Grid>
                          <Grid item xs={12} sm={2} sx={{ display: 'flex', gap: 2 }}>
                            {/* update only makes sense for rows already saved in the backend */}
                            <IconButton
                              onClick={() => handleUpdateRow(row)}
                              disabled={!row.id || isLoading}
                              aria-label='Update row'
                              size='small'
                              sx={{
                                bgcolor: 'primary.main',
                                color: 'primary.contrastText',
                                '&:hover': { bgcolor: 'primary.dark' },
                                '&.Mui-disabled': { bgcolor: 'action.disabledBackground' }
                              }}
                            >
                              <EditIcon fontSize='small' />
                            </IconButton>
                            <IconButton
                              onClick={() => handleRemoveRow(row)}
                              disabled={isLoading}
                              aria-label='Remove row'
                              size='small'
                              sx={{
                                bgcolor: 'error.main',
                                color: 'error.contrastText',
                                '&:hover': { bgcolor: 'error.dark' }
                              }}
                            >
                              <DeleteIcon fontSize='small' />
                            </IconButton>
                          </Grid>
                        </Grid>
                      </Grid>
                    ))}
                  </Grid>
                )}
              </CardContent>
              <CardActions style={{ justifyContent: 'flex-end', padding: '0 20px 20px' }}>
                <Button variant='contained' onClick={handleSave} disabled={isLoading || unsavedCount === 0}>
                  Save
                </Button>
              </CardActions>
            </Card>
          </>
        )}
      </div>
    </>
  )
}

export default AssignSubjectLayout
