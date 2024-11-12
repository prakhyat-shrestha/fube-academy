'use client'
import {
  Typography,
  RadioGroup,
  Box,
  FormControlLabel,
  Radio,
  InputAdornment,
  Button,
  CardActions,
  MenuItem
} from '@mui/material'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import Divider from '@mui/material/Divider'
import { useState } from 'react'

// Third-party imports
import { useEditor, EditorContent } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { Underline } from '@tiptap/extension-underline'
import { Placeholder } from '@tiptap/extension-placeholder'
import { TextAlign } from '@tiptap/extension-text-align'
import type { Editor } from '@tiptap/core'

// Components Imports
import CustomIconButton from '@core/components/mui/IconButton'
import FontFamily from '@tiptap/extension-font-family'
import TextStyle from '@tiptap/extension-text-style'

//Editor ToolBar Section
const EditorToolbar = ({ editor }: { editor: Editor | null }) => {
  if (!editor) {
    return null
  }
  const [selectedFont, setSelectedFont] = useState('Times New Roman')

  // Handle font change
  const handleFontChange = (event: React.ChangeEvent<{ value: string }>) => {
    const newFont = event.target.value
    setSelectedFont(newFont)

    if (editor) {
      if (newFont === 'defaultFontName') {
        editor.chain().focus().unsetFontFamily().run() // Reset to default
      } else {
        editor.chain().focus().setFontFamily(newFont).run()
      }
    }
  }
  return (
    <div className='flex flex-wrap gap-x-3 gap-y-1 p-6'>
      <CustomIconButton
        {...(editor.isActive('bold') && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Bold'
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <i className='tabler-bold' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('underline') && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Underline'
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <i className='tabler-underline' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('italic') && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Italic'
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <i className='tabler-italic' />
      </CustomIconButton>

      <CustomIconButton
        {...(editor.isActive('strike') && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Remove Font Style'
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <i className='tabler-typography-off' />
      </CustomIconButton>

      <CustomIconButton
        {...(editor.isActive({ textAlign: 'justify' }) && { color: 'primary' })}
        style={{ background: 'transparent', border: 'none' }}
        variant='outlined'
        size='small'
        title='Font Family'
      >
        <CustomTextField
          select
          value={selectedFont}
          onChange={handleFontChange}
          required
          InputProps={{
            style: {
              height: '25px',
              marginTop: '5px' // Reduce inner padding to reduce height
            }
          }}
          fullWidth
          variant='standard'
          style={{ background: 'transparent', height: '5px', marginTop: '-30px' }}
        >
          <MenuItem value='Times New Roman'>
            <span style={{ fontFamily: 'Times New Roman' }}>Times New Roman</span>
          </MenuItem>
          <MenuItem value='Arial'>
            <span style={{ fontFamily: 'Arial' }}>Arial</span>
          </MenuItem>
          <MenuItem value='Poppins'>
            <span style={{ fontFamily: 'Poppins' }}>Poppins</span>
          </MenuItem>
          <MenuItem value='Brush Script MT'>
            <span style={{ fontFamily: 'Brush Script MT' }}>Brush Script MT</span>
          </MenuItem>
          <MenuItem value='Impact'>
            <span style={{ fontFamily: 'Impact' }}>Impact</span>
          </MenuItem>
        </CustomTextField>
      </CustomIconButton>

      {/* <CustomIconButton
        {...(editor.isActive('strike') && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Recent Color'
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <i className='tabler-typography' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('strike') && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Unordered List'
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <i className='tabler-list' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('strike') && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Ordered List'
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <i className='tabler-list-numbers' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('strike') && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Table'
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <i className='tabler-table' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('strike') && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Link'
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <i className='tabler-circles-relation' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('strike') && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Picture'
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <i className='tabler-photo' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('strike') && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Video'
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <i className='tabler-video' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('strike') && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Full Screen'
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <i className='tabler-arrows-maximize' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('strike') && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Code'
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <i className='tabler-code' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive('strike') && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Help'
        onClick={() => editor.chain().focus().toggleStrike().run()}
      >
        <i className='tabler-question-mark' />
      </CustomIconButton> */}
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'left' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Align Left'
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
      >
        <i className='tabler-align-left' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'center' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Align Center'
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
      >
        <i className='tabler-align-center' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'right' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Align Right'
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
      >
        <i className='tabler-align-right' />
      </CustomIconButton>
      <CustomIconButton
        {...(editor.isActive({ textAlign: 'justify' }) && { color: 'primary' })}
        variant='outlined'
        size='small'
        title='Justify Full'
        onClick={() => editor.chain().focus().setTextAlign('justify').run()}
      >
        <i className='tabler-align-justified' />
      </CustomIconButton>
    </div>
  )
}

const LayoutTwo = ({ content }: { content?: string }) => {
  //Editor
  const editor = useEditor({
    extensions: [
      StarterKit,
      FontFamily.configure({
        types: ['textStyle'] // Ensure FontFamily applies to textStyle
      }),
      TextStyle, // Add TextStyle extension to apply inline styles
      Placeholder.configure({
        placeholder: 'Write something here...'
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph']
      }),
      Underline
    ],
    content:
      content ??
      `
        <p>
          This is a radically reduced version of Tiptap. It has support for a document with paragraphs and text. That's it. It's probably too much for real minimalists, though. This is a radically reduced version of Tiptap. It has support for a document with paragraphs and text. That's it. It's probably too much for real minimalists, though.
        </p>
        <br />
        <p>
          The paragraph extension is not really required, but you need at least one node. Sure, that node can be something different.
        </p>
      `
  })

  return (
    <>
      <Typography variant='h6' component='h3'>
        Layout Two Admit Card Setting
      </Typography>
      <div className='mainContainer' style={{ display: 'flex' }}>
        <div className='containerOne'>
          {/* Student Photo */}
          <div className='studentPhoto' style={{ display: 'flex', gap: '300px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              STUDENT PHOTO
            </Typography>
            <div style={{ marginTop: '2%' }}>
              <RadioGroup row aria-label='controlled' defaultValue='show' name='controlled'>
                <Box mr={2}>
                  <FormControlLabel
                    value='show'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Show'
                  />
                </Box>
                <Box mr={2}>
                  <FormControlLabel
                    value='hide'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Hide'
                  />
                </Box>
              </RadioGroup>
            </div>
          </div>

          {/* FATHER'S NAME */}
          <div className='fatherName' style={{ display: 'flex', gap: '305px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              FATHER'S NAME
            </Typography>
            <div style={{ marginTop: '2%' }}>
              <RadioGroup row aria-label='controlled' defaultValue='show' name='controlled'>
                <Box mr={2}>
                  <FormControlLabel
                    value='show'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Show'
                  />
                </Box>
                <Box mr={2}>
                  <FormControlLabel
                    value='hide'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Hide'
                  />
                </Box>
              </RadioGroup>
            </div>
          </div>

          {/* CLASS & SECTION */}
          <div className='classSection' style={{ display: 'flex', gap: '292px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              CLASS & SECTION
            </Typography>
            <div style={{ marginTop: '2%' }}>
              <RadioGroup row aria-label='controlled' defaultValue='show' name='controlled'>
                <Box mr={2}>
                  <FormControlLabel
                    value='show'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Show'
                  />
                </Box>
                <Box mr={2}>
                  <FormControlLabel
                    value='hide'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Hide'
                  />
                </Box>
              </RadioGroup>
            </div>
          </div>

          {/* ACADEMIC YEAR */}
          <div className='academicYear' style={{ display: 'flex', gap: '304px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              ACADEMIC YEAR
            </Typography>
            <div style={{ marginTop: '2%' }}>
              <RadioGroup row aria-label='controlled' defaultValue='show' name='controlled'>
                <Box mr={2}>
                  <FormControlLabel
                    value='show'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Show'
                  />
                </Box>
                <Box mr={2}>
                  <FormControlLabel
                    value='hide'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Hide'
                  />
                </Box>
              </RadioGroup>
            </div>
          </div>

          {/* STUDENT CAN DOWNLOAD */}
          <div className='studentDownload' style={{ display: 'flex', gap: '230px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              STUDENT CAN DOWNLOAD
            </Typography>
            <div style={{ marginTop: '2%' }}>
              <RadioGroup row aria-label='controlled' defaultValue='yes' name='controlled'>
                <Box mr={2}>
                  <FormControlLabel
                    value='yes'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Yes'
                  />
                </Box>
                <Box mr={2}>
                  <FormControlLabel
                    value='no'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='No'
                  />
                </Box>
              </RadioGroup>
            </div>
          </div>

          {/* STUDENT NOTIFICATION */}
          <div className='studentNotification' style={{ display: 'flex', gap: '250px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              STUDENT NOTIFICATION
            </Typography>
            <div style={{ marginTop: '2%' }}>
              <RadioGroup row aria-label='controlled' defaultValue='yes' name='controlled'>
                <Box mr={2}>
                  <FormControlLabel
                    value='yes'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Yes'
                  />
                </Box>
                <Box mr={2}>
                  <FormControlLabel
                    value='no'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='No'
                  />
                </Box>
              </RadioGroup>
            </div>
          </div>

          {/* EXAM CONTROLLER SIGN */}
          <div className='examControllerSign' style={{ display: 'flex', gap: '238px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              EXAM CONTROLLER SIGN
            </Typography>
            <div style={{ marginTop: '2%' }}>
              <RadioGroup row aria-label='controlled' defaultValue='show' name='controlled'>
                <Box mr={2}>
                  <FormControlLabel
                    value='show'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Show'
                  />
                </Box>
                <Box mr={2}>
                  <FormControlLabel
                    value='hide'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Hide'
                  />
                </Box>
              </RadioGroup>
            </div>
          </div>
          <CustomTextField
            value='EXAM CONTROLLER SIGN'
            fullWidth
            sx={{ marginTop: '50px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Button variant='contained' sx={{ height: '25px', width: '90px', fontSize: '0.75rem' }}>
                    BROWSE
                  </Button>
                </InputAdornment>
              )
            }}
          />
        </div>

        {/* Conatiner Two */}
        <div className='containerTwo' style={{ marginLeft: '12%' }}>
          {/*STUDENT NAME */}
          <div className='studentName' style={{ display: 'flex', gap: '250px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              STUDENT NAME
            </Typography>
            <div style={{ marginTop: '2%' }}>
              <RadioGroup row aria-label='controlled' defaultValue='show' name='controlled'>
                <Box mr={2}>
                  <FormControlLabel
                    value='show'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Show'
                  />
                </Box>
                <Box mr={2}>
                  <FormControlLabel
                    value='hide'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Hide'
                  />
                </Box>
              </RadioGroup>
            </div>
          </div>

          {/* ADMISSION NO */}
          <div className='admissionNo' style={{ display: 'flex', gap: '255px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              ADMISSION NO
            </Typography>
            <div style={{ marginTop: '2%' }}>
              <RadioGroup row aria-label='controlled' defaultValue='show' name='controlled'>
                <Box mr={2}>
                  <FormControlLabel
                    value='show'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Show'
                  />
                </Box>
                <Box mr={2}>
                  <FormControlLabel
                    value='hide'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Hide'
                  />
                </Box>
              </RadioGroup>
            </div>
          </div>

          {/* EXAM NAME */}
          <div className='examName' style={{ display: 'flex', gap: '275px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              EXAM NAME
            </Typography>
            <div style={{ marginTop: '2%' }}>
              <RadioGroup row aria-label='controlled' defaultValue='show' name='controlled'>
                <Box mr={2}>
                  <FormControlLabel
                    value='show'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Show'
                  />
                </Box>
                <Box mr={2}>
                  <FormControlLabel
                    value='hide'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Hide'
                  />
                </Box>
              </RadioGroup>
            </div>
          </div>

          {/* SCHOOL ADDRESS */}
          <div className='schoolAddress' style={{ display: 'flex', gap: '230px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              SCHOOL ADDRESS
            </Typography>
            <div style={{ marginTop: '2%' }}>
              <RadioGroup row aria-label='controlled' defaultValue='show' name='controlled'>
                <Box mr={2}>
                  <FormControlLabel
                    value='show'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Show'
                  />
                </Box>
                <Box mr={2}>
                  <FormControlLabel
                    value='hide'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Hide'
                  />
                </Box>
              </RadioGroup>
            </div>
          </div>

          {/* PARENT CAN DOWNLOAD */}
          <div className='parentDownload' style={{ display: 'flex', gap: '182px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              PARENT CAN DOWNLOAD
            </Typography>
            <div style={{ marginTop: '2%' }}>
              <RadioGroup row aria-label='controlled' defaultValue='yes' name='controlled'>
                <Box mr={2}>
                  <FormControlLabel
                    value='yes'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Yes'
                  />
                </Box>
                <Box mr={2}>
                  <FormControlLabel
                    value='no'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='No'
                  />
                </Box>
              </RadioGroup>
            </div>
          </div>

          {/* PARENT NOTIFICATION */}
          <div className='parentNotification' style={{ display: 'flex', gap: '200px' }}>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              PARENT NOTIFICATION
            </Typography>
            <div style={{ marginTop: '2%' }}>
              <RadioGroup row aria-label='controlled' defaultValue='yes' name='controlled'>
                <Box mr={2}>
                  <FormControlLabel
                    value='yes'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='Yes'
                  />
                </Box>
                <Box mr={2}>
                  <FormControlLabel
                    value='no'
                    control={
                      <Radio
                        checkedIcon={<i className='tabler-circle-check-filled' />}
                        icon={<i className='tabler-circle' />}
                      />
                    }
                    label='No'
                  />
                </Box>
              </RadioGroup>
            </div>
          </div>

          {/* ADMIT CARD SUB TITLE */}
          <div className='admitCardTitle'>
            <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
              ADMIT CARD SUB TITLE
            </Typography>
            <CustomTextField style={{ marginTop: '10px', width: '100%' }} />
          </div>
        </div>
      </div>

      {/* Editor Section */}
      <Typography variant='h6' component='h4' style={{ fontWeight: 'normal', marginTop: '20px' }}>
        SHORT DESCRIPTION
      </Typography>
      <div className='border rounded-md'>
        <EditorToolbar editor={editor} />
        <Divider />
        <EditorContent editor={editor} className='bs-[200px] w-[100%] overflow-y-auto flex' />
      </div>

      {/* Button */}
      <CardActions sx={{ justifyContent: 'center' }}>
        <Button variant='contained'>
          <CheckSharpIcon sx={{ mr: 1 }} />
          UPDATE
        </Button>
      </CardActions>
    </>
  )
}

export default LayoutTwo
