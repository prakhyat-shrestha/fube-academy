'use client'
import { useState } from 'react'

import Link from 'next/link'

import {
  Button,
  Card,
  CardContent,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Typography
} from '@mui/material'

import CheckIcon from '@mui/icons-material/Check'

import CustomTextField from '@/@core/components/mui/TextField'

type TempTypes = {
  [key: string]: string
}

const SmsTemplateLayout = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('Student Admission')
  const [selectedValue, setSelectedValue] = useState('admission')

  const template: TempTypes = {
    'Student Admission': 'admission',
    'Student Admission For Parent': 'studentAdmissionForParent',
    'Exam Schedule For Student': 'examScheduleForStudent',
    'Exam Schedule For Parent': 'examScheduleForParent',
    'User Login Permission': 'userLoginPermission',
    'Student Promote': 'studentPromote',
    'Communicate sms': 'communicateSms',
    'Student Attendance': 'studentAttendance',
    'Student Attendance For Parent': 'studentAttendanceForParent',
    'Student Absent': 'studentAbsent',
    'Student Absent For Parent': 'studentAbsentForParent',
    'Student Late': 'studentLate',
    'Student Late For Parent': 'studentLateForParent',
    'Student leave application': 'studentLeaveApplication',
    'Student Leave Approve': 'studentLeaveApprove',
    'Parent leave application for student': 'parentLeaveApplicationForStudent',
    'Parent Leave Approve For Student': 'parentLeaveApproveForStudent',
    'Student Library Book Issue': 'studentLibraryBookIssue',
    'Parent Library Book Issue': 'parentLibraryBookIssue',
    'Student Return Issue Book': 'studentReturnIssueBook',
    'Parent Return Issue Book': 'parentReturnIssueBook',
    'Exam Mark Student': 'examMarkStudent',
    'Exam Mark Parent': 'examMarkParent',
    'Student Fees Due': 'studentFeesDue',
    'Student Fees Due For Parent': 'studentFeesDueForParent',
    'Staff Credentials': 'staffCredentials',
    'Staff Attendance': 'staffAttendance',
    'Staff Absent': 'staffAbsent',
    'Staff Late': 'staffLate',
    'Staff leave application': 'staffLeaveApplication',
    'Staff Leave Approve': 'staffLeaveApprove',
    'School Holiday': 'holiday',
    'Student Birthday': 'studentBirthday',
    'Staff Birthday': 'staffBirthday',
    'Student Dues Fees': 'studentDuesFees',
    'Student Dues Fees For Parent': 'studentDuesFeesForParent',
    'Student Absent Notification': 'studentAbsentNotification',
    'Two Factor Code': 'twoFactorCode',
    'Behaviour Record Update': 'behaviourRecordUpdate'
  }

  const handleTemplateClick = (templateName: any) => {
    setSelectedTemplate(templateName)
    setSelectedValue(template[templateName])
  }

  return (
    <>
      <div className='flex '>
        <Typography variant='h5'>SMS Template</Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '15px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '15px' }}>
              Communicate
            </Link>
            <span style={{ marginRight: '15px' }}>|</span>
            <Link href='#'> SMS Template</Link>
          </Typography>
        </nav>
      </div>
      <div style={{ display: 'flex', gap: '35px' }}>
        <Card sx={{ height: 'auto', width: '30%' }}>
          <CardContent>
            {Object.keys(template).map(templateName => (
              <Typography
                key={templateName}
                onClick={() => handleTemplateClick(templateName)}
                style={{
                  cursor: 'pointer',
                  color: templateName === selectedTemplate ? 'purple' : 'black',
                  marginBottom: '10px'
                }}
              >
                {templateName}
              </Typography>
            ))}
          </CardContent>
        </Card>
        <Card sx={{ height: '70%', width: '70%' }}>
          <CardContent>
            <Typography>
              <div style={{ display: 'flex' }}>
                <Typography sx={{ fontWeight: 'bold' }}>Variables:</Typography> &nbsp;
                <Typography sx={{ color: 'blue', fontWeight: 'bold' }}>{selectedValue || 'None'}</Typography>{' '}
                <FormControl sx={{ position: 'fixed', marginTop: '-5px', marginLeft: '48.9%' }}>
                  <FormGroup>
                    <FormControlLabel
                      label='Enable'
                      control={
                        <Checkbox
                          name='student'
                          icon={
                            <span
                              style={{
                                width: 20,
                                height: 20,
                                border: '2px solid gray',
                                borderRadius: '50%',
                                display: 'inline-block'
                              }}
                            />
                          }
                          checkedIcon={
                            <span
                              style={{
                                width: 20,
                                height: 20,
                                backgroundColor: 'blue',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                fontSize: '16px',
                                fontWeight: 'bold'
                              }}
                            >
                              ✓
                            </span>
                          }
                        />
                      }
                    ></FormControlLabel>
                  </FormGroup>
                </FormControl>
              </div>
            </Typography>
            <Typography sx={{ marginTop: '5%' }}>SUBJECT*</Typography>
            <CustomTextField
              InputProps={{
                sx: {
                  height: 45
                }
              }}
              fullWidth
              value={selectedTemplate}
            >
              {selectedTemplate || 'None'}
            </CustomTextField>
            <Button variant='contained' sx={{ marginTop: '40px', marginLeft: '45%' }}>
              <CheckIcon />
              UPDATE
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default SmsTemplateLayout
