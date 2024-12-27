'use client'
import Link from 'next/link'

import { useRouter } from 'next/navigation'

import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import { createTheme } from '@mui/material/styles'

import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AddIcon from '@mui/icons-material/Add'
import Accordion from '@mui/material/Accordion'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'

const NoticeList = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2'
      }
    }
  })

  const router = useRouter()

  const handleEdit = (event: React.MouseEvent) => {
    event.stopPropagation()
    router.push('/home')
  }

  const handleDelete = (event: React.MouseEvent) => {
    event.stopPropagation()
    router.push('/home')
  }

  return (
    <>
      <div className='flex '>
        <Typography variant='h5' component='h3'>
          Notice Board
        </Typography>
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
            <Link href='#'>Notice Board</Link>
          </Typography>
        </nav>
      </div>
      <div className='noticeList mt-4 ml-1' style={{ flex: 1 }}>
        <Card sx={{ width: '102%', height: 'auto' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='h5' component='h3' style={{ flex: 1 }}>
                All Notices
              </Typography>
              <div>
                <Button variant='contained'>
                  <AddIcon />
                  ADD NOTICE
                </Button>
              </div>
            </div>
            {/* Accordions */}
            <div style={{ marginTop: '20px' }}>
              <div style={{ alignItems: 'center', marginBottom: '10px' }}>
                <Accordion
                  sx={{
                    width: 'auto',
                    border: '0.25px solid #e0e0e0',
                    borderRadius: '8px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                    overflow: 'hidden'
                  }}
                >
                  <AccordionSummary
                    expandIcon={null}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    {/* Accordion Title */}
                    <Typography sx={{ flex: 1 }}>Important Exam Information</Typography>

                    {/* Buttons */}
                    <Box>
                      <Button onClick={handleEdit} variant='outlined' aria-label='edit' sx={{ marginRight: '10px' }}>
                        <EditIcon />
                        EDIT
                      </Button>
                      <Button onClick={handleDelete} variant='outlined' aria-label='delete' color='error'>
                        <DeleteIcon /> DELETE
                      </Button>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div style={{ display: 'flex' }}>
                      <div>
                        <Typography sx={{ marginRight: '25%', textAlign: 'justify' }}>
                          Dear Students, As the semester comes to a close, please take note of the following important
                          exam information: - Exam Schedule: 01-06-24 and 08 AM. - Exam Venue: Main Campus Make sure to
                          prepare adequately and reach the exam venue on time. Wishing you success in your exams! Best
                          Regards, Charles E. Donovan Infix Edu Administration
                        </Typography>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div style={{ alignItems: 'center', marginBottom: '10px' }}>
                <Accordion
                  sx={{
                    width: 'auto',
                    border: '0.25px solid #e0e0e0',
                    borderRadius: '8px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                    overflow: 'hidden'
                  }}
                >
                  <AccordionSummary
                    expandIcon={null}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    {/* Accordion Title */}
                    <Typography sx={{ flex: 1 }}>Extracurricular Activity Registration</Typography>

                    {/* Buttons */}
                    <Box>
                      <Button onClick={handleEdit} variant='outlined' aria-label='edit' sx={{ marginRight: '10px' }}>
                        <EditIcon />
                        EDIT
                      </Button>
                      <Button onClick={handleDelete} variant='outlined' aria-label='delete' color='error'>
                        <DeleteIcon /> DELETE
                      </Button>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div style={{ display: 'flex' }}>
                      <div>
                        <Typography sx={{ marginRight: '25%', textAlign: 'justify' }}>
                          Dear Students, Get ready to explore your interests and enhance your skills! Infix Edu is
                          opening registration for various extracurricular activities, including clubs, sports, and
                          cultural events. Do not miss this chance to enrich your college experience. Registration
                          Period: 15-01-24. Venue: Main Campus. For more details, visit [Website/Office] We look forward
                          to your active participation! Warm Regards, Olivia M. Thornton Infix Edu Administration
                        </Typography>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div style={{ alignItems: 'center', marginBottom: '10px' }}>
                <Accordion
                  sx={{
                    width: 'auto',
                    border: '0.25px solid #e0e0e0',
                    borderRadius: '8px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                    overflow: 'hidden'
                  }}
                >
                  <AccordionSummary
                    expandIcon={null}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    {/* Accordion Title */}
                    <Typography sx={{ flex: 1 }}>Library Closure for Maintenance</Typography>

                    {/* Buttons */}
                    <Box>
                      <Button onClick={handleEdit} variant='outlined' aria-label='edit' sx={{ marginRight: '10px' }}>
                        <EditIcon />
                        EDIT
                      </Button>
                      <Button onClick={handleDelete} variant='outlined' aria-label='delete' color='error'>
                        <DeleteIcon /> DELETE
                      </Button>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div style={{ display: 'flex' }}>
                      <div>
                        <Typography sx={{ marginRight: '25%', textAlign: 'justify' }}>
                          Dear Students, Please be advised that the Infix Edu library will be closed for maintenance on
                          31-12-23. We apologize for any inconvenience this may cause and appreciate your understanding.
                          Normal library hours will resume on 01-01-24. Thank you for your cooperation. Best Regards,
                          Benjamin L. Fitzgerald Infix Edu Administration
                        </Typography>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
              <div style={{ alignItems: 'center', marginBottom: '10px' }}>
                <Accordion
                  sx={{
                    width: 'auto',
                    border: '0.25px solid #e0e0e0',
                    borderRadius: '8px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                    overflow: 'hidden'
                  }}
                >
                  <AccordionSummary
                    expandIcon={null}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    {/* Accordion Title */}
                    <Typography sx={{ flex: 1 }}>Scholarship Opportunities</Typography>

                    {/* Buttons */}
                    <Box>
                      <Button onClick={handleEdit} variant='outlined' aria-label='edit' sx={{ marginRight: '10px' }}>
                        <EditIcon />
                        EDIT
                      </Button>
                      <Button onClick={handleDelete} variant='outlined' aria-label='delete' color='error'>
                        <DeleteIcon /> DELETE
                      </Button>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div style={{ display: 'flex' }}>
                      <div>
                        <Typography sx={{ marginRight: '25%', textAlign: 'justify' }}>
                          Dear Students, Infix Edu is delighted to inform you about new scholarship opportunities
                          available for deserving students. If you meet the criteria, don&apos;t miss this chance to
                          apply and alleviate the financial burden of your education.
                        </Typography>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>

              <div style={{ alignItems: 'center', marginBottom: '10px' }}>
                <Accordion
                  sx={{
                    width: 'auto',
                    border: '0.25px solid #e0e0e0',
                    borderRadius: '8px',
                    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)',
                    overflow: 'hidden'
                  }}
                >
                  <AccordionSummary
                    expandIcon={null}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between'
                    }}
                  >
                    {/* Accordion Title */}
                    <Typography sx={{ flex: 1 }}>Academic Counseling Sessions</Typography>

                    {/* Buttons */}
                    <Box>
                      <Button onClick={handleEdit} variant='outlined' aria-label='edit' sx={{ marginRight: '10px' }}>
                        <EditIcon />
                        EDIT
                      </Button>
                      <Button onClick={handleDelete} variant='outlined' aria-label='delete' color='error'>
                        <DeleteIcon /> DELETE
                      </Button>
                    </Box>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div style={{ display: 'flex' }}>
                      <div>
                        <Typography sx={{ marginRight: '25%', textAlign: 'justify' }}>
                          Dear Students, We hope this message finds you well. Infix Edu is pleased to announce upcoming
                          academic counseling sessions to provide guidance on course selection, career paths, and
                          overall academic planning. Please make sure to attend these sessions to make informed
                          decisions about your academic journey. Date: 12-12-23 Time: 02.30 PM Venue: Main Campus
                          Auditorium. Your participation is crucial, and our team is excited to assist you in achieving
                          your academic and career goals. See you there! Best Regards, Alexander J. Harrington Infix Edu
                          Administration
                        </Typography>
                      </div>
                    </div>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </CardContent>
          {/* Pagination */}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
            <Typography variant='body2' style={{ marginLeft: '16px' }}>
              Showing 1 to 3 of 3 entries
            </Typography>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
                cursor: 'pointer'
              }}
            >
              <Button
                size='small'
                style={{
                  color: 'black',
                  marginRight: '10px',
                  padding: '4px 8px',
                  width: '30px',
                  minWidth: 'auto',
                  border: 'none'
                }}
              >
                <ArrowBackIcon style={{ fontSize: '16px' }} />
              </Button>
              <Typography
                variant='body2'
                sx={{
                  color: 'white',
                  padding: '4px 16px',
                  borderRadius: '4px',
                  background: theme.palette.primary.main,
                  cursor: 'pointer'
                }}
              >
                1
              </Typography>
              <Button
                size='small'
                style={{
                  color: 'black',
                  marginLeft: '10px',
                  padding: '4px 8px',
                  width: '30px',
                  minWidth: 'auto',
                  border: 'none'
                }}
              >
                <ArrowForwardIcon style={{ transform: 'scale(0.8)' }} />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </>
  )
}

export default NoticeList
