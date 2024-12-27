'use client'
import { useState } from 'react'

import Link from 'next/link'

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Checkbox,
  Container,
  FormControl,
  FormControlLabel,
  FormGroup,
  Typography,
  IconButton,
  Select,
  MenuItem,
  Tooltip
} from '@mui/material'
import {
  FormatBold,
  FormatItalic,
  FormatUnderlined,
  FormatListBulleted,
  FormatListNumbered,
  FormatAlignLeft,
  FormatAlignCenter,
  FormatAlignRight,
  InsertPhoto,
  Code,
  HelpOutline
} from '@mui/icons-material'
import 'react-quill/dist/quill.snow.css'
import CheckIcon from '@mui/icons-material/Check'

import CustomTextField from '@/@core/components/mui/TextField'

type TempTypes = {
  [key: string]: string
}

const EmailTemplateLayout = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('')
  const [selectedValue, setSelectedValue] = useState('')

  const template: TempTypes = {
    'Test Mail': 'testMail',
    'Password Reset': 'passwordReset',
    'Student Login Credentials': 'studentLoginCredentials',
    'Frontend Contact': 'frontendContact',
    'Communication Sent Email': 'communicationSentEmail',
    'Parent Login Credentials': 'parentLoginCredentials',
    'Staff Login Credentials': 'staffLoginCredentials',
    'Due Fees Payment': 'dueFeesPayment',
    'Dues Payment': 'duesPayment',
    'Parent Reject Bank Payment': 'parentRejectBankPayment',
    'Student Reject Bank Payment': 'studentRejectBankPayment',
    'Wallet Approve': 'walletApprove',
    'Wallet Reject': 'walletReject',
    'Fees Extra Amount Add': 'feesExtraAmountAdd',
    'Wallet Refund': 'walletRefund',
    'Leave Applied': 'leaveApplied',
    'Leave Notification': 'leaveNotification',
    'Two Factor Code': 'twoFactorCode',
    'Behaviour Record Update': 'behaviourRecordUpdate',
    'Exam Mark Parent': 'examMarkParent',
    'Student Fees Due': 'studentFeesDue',
    'Student Fees Due For Parent': 'studentFeesDueForParent',
    'Staff Credentials': 'staffCredentials'
  }

  const handleTemplateClick = (templateName: any) => {
    setSelectedTemplate(templateName)
    setSelectedValue(template[templateName])
  }

  return (
    <>
      <div className='flex '>
        <Typography variant='h5'>Email Template</Typography>
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
            <Link href='#'> Email Template</Link>
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
                <Typography sx={{ color: 'blue', fontWeight: 'bold' }}>{selectedTemplate || 'None'}</Typography>{' '}
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
              value={selectedValue}
            >
              {selectedValue || 'None'}
            </CustomTextField>
            <Typography sx={{ marginTop: '3%' }}>BODY</Typography>
            {/* // EMAIL TEMPLATE TOOL */}
            <Card>
              <CardContent>
                <div>
                  {' '}
                  <Box display='flex' alignItems='center' bgcolor='#f5f7fa' px={1} py={1} borderRadius={2}>
                    {/* Bold */}
                    <Tooltip title='Bold'>
                      <IconButton>
                        <FormatBold />
                      </IconButton>
                    </Tooltip>

                    {/* Italic */}
                    <Tooltip title='Italic'>
                      <IconButton>
                        <FormatItalic />
                      </IconButton>
                    </Tooltip>

                    {/* Underline */}
                    <Tooltip title='Underline'>
                      <IconButton>
                        <FormatUnderlined />
                      </IconButton>
                    </Tooltip>

                    {/* Font Family */}
                    <Select defaultValue='Poppins' size='small' sx={{ mx: 1 }}>
                      <MenuItem value='Poppins'>Poppins</MenuItem>
                      <MenuItem value='Arial'>Arial</MenuItem>
                      <MenuItem value='Roboto'>Roboto</MenuItem>
                    </Select>

                    {/* Font Size */}
                    <Select defaultValue='14' size='small' sx={{ mx: 1 }}>
                      <MenuItem value='12'>12</MenuItem>
                      <MenuItem value='14'>14</MenuItem>
                      <MenuItem value='16'>16</MenuItem>
                    </Select>

                    {/* Alignment */}
                    <Tooltip title='Align Left'>
                      <IconButton>
                        <FormatAlignLeft />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title='Align Center'>
                      <IconButton>
                        <FormatAlignCenter />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title='Align Right'>
                      <IconButton>
                        <FormatAlignRight />
                      </IconButton>
                    </Tooltip>

                    {/* List Options */}
                    <Tooltip title='Bulleted List'>
                      <IconButton>
                        <FormatListBulleted />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title='Numbered List'>
                      <IconButton>
                        <FormatListNumbered />
                      </IconButton>
                    </Tooltip>

                    {/* Insert Link */}
                    <Tooltip title='Insert Link'>
                      <IconButton>
                        <Link href={'https://google.com'} />
                      </IconButton>
                    </Tooltip>

                    {/* Insert Image */}
                    <Tooltip title='Insert Image'>
                      <IconButton>
                        <InsertPhoto />
                      </IconButton>
                    </Tooltip>

                    {/* Code */}
                    <Tooltip title='Code'>
                      <IconButton>
                        <Code />
                      </IconButton>
                    </Tooltip>

                    {/* Help */}
                    <Tooltip title='Help'>
                      <IconButton>
                        <HelpOutline />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </div>
                <Box bgcolor='#FFFFFF' width='100%' sx={{ tableLayout: 'fixed' }}>
                  {/* Header */}
                  <Box bgcolor='#415094' py={3}>
                    <Container maxWidth='sm'>
                      <Box display='flex' justifyContent='center'>
                        <CardMedia component='img' image='' alt='logo.png' sx={{ maxWidth: 150, height: 'auto' }} />
                      </Box>
                    </Container>
                  </Box>

                  {/* Main Content */}
                  <Box bgcolor='#415094'>
                    <Container
                      maxWidth='sm'
                      sx={{
                        backgroundColor: '#ffffff',
                        padding: '25px 0',
                        borderTopLeftRadius: '30px',
                        borderTopRightRadius: '30px'
                      }}
                    >
                      <Box display='flex' justifyContent='center' p={2}>
                        <CardMedia
                          component='img'
                          image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGF00Oi-zJNU_EvYGueBVz_sqXmFjk8pxNtg&usqp=CAU'
                          alt='Header Image'
                          sx={{ width: '100%', maxWidth: 541, height: 'auto' }}
                        />
                      </Box>
                    </Container>
                  </Box>

                  {/* Leave Applied Section */}
                  <Box bgcolor='#7c32ff'>
                    <Container
                      maxWidth='sm'
                      sx={{
                        backgroundColor: '#ffffff',
                        borderBottomLeftRadius: '30px',
                        borderBottomRightRadius: '30px',
                        overflow: 'hidden'
                      }}
                    >
                      <Typography
                        variant='h4'
                        textAlign='center'
                        color='#555555'
                        fontFamily='Arial, Helvetica Neue, Helvetica, sans-serif'
                        gutterBottom
                        mt={3}
                      >
                        Leave Applied
                      </Typography>
                      <Box px={3} py={2}>
                        <Typography
                          variant='h6'
                          fontWeight='bold'
                          mb={2}
                          color='textPrimary'
                          fontFamily='Arial, Helvetica Neue, Helvetica, sans-serif'
                        >
                          Dear Admin,
                        </Typography>
                        <Typography variant='body1' color='textSecondary' fontSize='16px' lineHeight={1.929}>
                          A [role] named [name] applied for a leave on [apply_date] from [leave_from] to [leave_to] for
                          reason [reason].
                        </Typography>
                      </Box>
                    </Container>
                  </Box>

                  {/* Footer */}
                  <Box bgcolor='#7c32ff' py={3}>
                    <Container maxWidth='sm'>
                      <Typography
                        variant='body2'
                        textAlign='center'
                        color='#FFFFFF'
                        fontFamily='Arial, Helvetica Neue, Helvetica, sans-serif'
                      >
                        © 2020 Infix Education software | Copyright © 2020 All rights reserved | This application is
                        made by Codethemes
                      </Typography>
                    </Container>
                  </Box>
                </Box>
              </CardContent>
            </Card>
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

export default EmailTemplateLayout
