import * as React from 'react'
import {
  Switch,
  Typography,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Button
} from '@mui/material'
import Link from '@/components/Link'
import UploadIcon from '@mui/icons-material/Upload'

const names = [
  {
    title: 'Zoom (Version: ) ',
    paragraph: 'This is Zoom module for live virtual class and meeting in this system at a time. Thanks for using.',
    purchased: false
  },
  {
    title: 'Online Exam (Version: )',
    paragraph: 'This is OnlineExam module for take online exam Thanks for using.',
    purchased: false
  },
  {
    title: 'Parent Registration (Version: )',
    paragraph: 'This is Parent Registration module for Registration. Thanks for using.',
    purchased: false
  },
  {
    title: 'Razor Pay (Version: )',
    paragraph: 'This is Razor Pay module for Online payemnt. Thanks for using.',
    purchased: false
  },
  {
    title: 'BBB (Version: )',
    paragraph:
      'This is BigBlueButton module for live virtual class and meeting in this system at a time. Thanks for using.',
    purchased: false
  },
  {
    title: 'Jitsi (Version: )',
    paragraph: 'This is Jitsi module for live virtual class and meeting in this system at a time. Thanks for using.',
    purchased: false
  },
  {
    title: 'Saas (Version: )',
    paragraph:
      'This is Saas module for manage multiple school or institutes.Every school managed by individual admin. Thanks for using.',
    purchased: false
  },
  {
    title: 'Xendit Payment (Version: )',
    paragraph: 'This is online payment gateway module for specially indonesian currency. Thanks for using.',
    purchased: false
  },
  {
    title: 'App Slider (Version: 1.0)',
    paragraph: 'This is for school affiliate banner for mobile app. Thanks for using.',
    purchased: true
  },
  {
    title: 'Khalti Payment (Version: )',
    paragraph: 'Khalti Is A Online Payment Gatway Module For Collect Fees Online',
    purchased: false
  },
  {
    title: 'Raudhahpay (Version: )',
    paragraph: 'This is Saas module for Online Payment. Thanks for using.',
    purchased: false
  },
  {
    title: 'Infix Biometrics (Version: )',
    paragraph:
      'This is InfixBiometrics module for live virtual class and meeting in this system at a time. Thanks for using.',
    purchased: false
  },
  {
    title: 'Gmeet (Version: )',
    paragraph: 'This is Gmeet module for live virtual class and meeting in this system at a time. Thanks for using.',
    purchased: false
  },
  {
    title: 'Phone Pay (Version: )',
    paragraph: 'This is PhonePay module for manage Phonepe online payment gateway . Thanks for using.',
    purchased: false
  },
  {
    title: 'Behaviour Records (Version: 1.0)',
    paragraph: 'This is Behaviour Records Module for manage student behaviour records & Activity. Thanks for using.',
    purchased: true
  },
  {
    title: 'Download Center (Version: 1.0)',
    paragraph: 'This Module is named Download Center for managing study materials more efficiently. Thanks for using.',
    purchased: false
  },
  {
    title: 'Lms (Version: )',
    paragraph:
      'This is Lms module for learning management. Teacher & Admin Can create course and student & parent can enroll using online & offline payment gateway . Thanks for using.',
    purchased: false
  },
  {
    title: 'Cc Avenue (Version: )',
    paragraph: 'This CcAveune Module For InfixEdu . Manage online payment for fees & wallet.',
    purchased: false
  },
  {
    title: 'Ai Content (Version: )',
    paragraph: 'This is AI Content Generator module. Generate content via AI.',
    purchased: false
  },
  {
    title: 'Whatsapp Support (Version: )',
    paragraph: 'This is WhatsApp Support module. Send message via WhatsApp.',
    purchased: false
  },
  {
    title: 'Certificate (Version: )',
    paragraph: "This is the module to generate Certificate's for students and employees.",
    purchased: false
  },
  {
    title: 'Mercado Pago (Version: )',
    paragraph: 'This is MercadoPago Payment Module For Online Payment. Thanks For Using.',
    purchased: false
  },
  { title: 'University (Version: )', paragraph: 'Manage Your University Using This Module.', purchased: false },
  {
    title: 'In App Live Class (Version: )',
    paragraph: 'This InAppLiveClass Module For InfixEdu. Manage Online Class and Meeting Reports.',
    purchased: false
  }
]

const rows = Array.from({ length: 24 }, (_, index) => ({
  SL: index + 1,
  Name: names[index % names.length],
  Status:
    index + 1 === 15 || index + 1 === 16 ? (
      <Button variant='contained' style={{ fontSize: '.7rem', background: '#81d164' }}>
        ACTIVE
      </Button>
    ) : (
      <Button variant='contained' style={{ fontSize: '.7rem' }}>
        DISABLE
      </Button>
    ),
  Action:
    index + 1 === 9 ? (
      <Button variant='outlined' style={{ fontSize: '.7rem' }}>
        VERIFY
      </Button>
    ) : index + 1 === 15 || index + 1 === 16 ? (
      <Switch defaultChecked />
    ) : (
      <Button variant='outlined' style={{ fontSize: '.7rem' }}>
        BUY NOW
      </Button>
    )
}))

const ModuleManagerLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Module Manage
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              General Settings
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Module Manage</Link>
          </Typography>
        </nav>
      </div>
      <div className='moduleManage mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div className='container' style={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant='h6' component='h4'>
                Module Manage
              </Typography>
              <Button variant='contained' startIcon={<UploadIcon />} style={{ fontSize: '.8rem' }}>
                UPLOAD/UPDATE MODULE
              </Button>
            </div>
            <TableContainer className='mt-4' component={Paper}>
              <Table sx={{ minWidth: 650 }} stickyHeader aria-label='sticky table'>
                <TableHead>
                  <TableRow>
                    <TableCell align='left' sx={{ padding: 4, width: '3%' }}>
                      SL
                    </TableCell>
                    <TableCell align='left' sx={{ padding: 0, width: 'auto' }}>
                      <Box sx={{ marginLeft: '1.7%' }}>NAME</Box>
                    </TableCell>
                    <TableCell align='right' sx={{ padding: 0, width: '10%' }}>
                      <Box sx={{ marginRight: '40%' }}>STATUS</Box>
                    </TableCell>
                    <TableCell align='right' sx={{ padding: 4, width: '10%' }}>
                      <Box sx={{ marginRight: '40%' }}>ACTION</Box>
                    </TableCell>
                  </TableRow>
                </TableHead>

                <TableBody>
                  {rows.map((row, index) => (
                    <TableRow key={row.SL}>
                      <TableCell align='left'>{row.SL}</TableCell>
                      <TableCell align='left'>
                        <Typography variant='subtitle1' style={{ fontWeight: 'bold', color: 'grey' }}>
                          {row.Name.title}
                        </Typography>
                        <Typography variant='body2'>{row.Name.paragraph}</Typography>
                        <Typography
                          variant='caption'
                          sx={{
                            color: index + 1 === 15 || index + 1 === 16 ? 'green' : row.Name.purchased ? 'green' : 'red'
                          }}
                        >
                          {index + 1 === 15 || index + 1 === 16
                            ? 'Verified | Published on November 15th, 2024'
                            : row.Name.purchased
                              ? 'Purchased'
                              : 'Not Purchased'}
                        </Typography>
                      </TableCell>
                      <TableCell align='right'>{row.Status}</TableCell>
                      <TableCell align='right'>{row.Action}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default ModuleManagerLayout
