'use client'
import {
  Typography,
  Card,
  CardContent,
  Box,
  RadioGroup,
  FormControlLabel,
  TextField,
  InputAdornment,
  ButtonGroup,
  Radio,
  Checkbox,
  FormGroup,
  Button
} from '@mui/material'
import Link from 'next/link'
import { Icon } from '@iconify/react/dist/iconify.js'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import CustomTextField from '@/@core/components/mui/TextField'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'

const OptionalSubjectGeneralLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h4'>
          Assign Optional Subject
        </Typography>
        <nav style={{ marginLeft: 'auto' }}>
          <Typography variant='h6' component='h4' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              General Settings
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Assign Optional Subject </Link>
          </Typography>
        </nav>
      </div>

      {/*  1st card */}
      <div className='assignOptionalSubject mt-4  ' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '35%' }}>
          <CardContent>
            <Typography variant='h6' component='h4'>
              Assign Optional Subject
            </Typography>
            <div className='flex' style={{ gap: 30, marginTop: '10px' }}>
              <Typography variant='h6' component='h3' style={{ fontWeight: 'lighter', fontSize: '14px' }}>
                SELECT CLASS*
              </Typography>
              <div style={{ marginTop: '30px', marginLeft: '-10%' }}>
                <FormGroup defaultValue='eced'>
                  <Box mr={2}>
                    <FormControlLabel
                      label='ECED '
                      value='eced'
                      control={
                        <Checkbox
                          defaultChecked={false}
                          name='size-small'
                          checkedIcon={<i className='tabler-circle-check-filled' />}
                          icon={<i className='tabler-circle' />}
                        />
                      }
                    />
                  </Box>
                  <Box mr={2}>
                    <FormControlLabel
                      label='1 '
                      control={
                        <Checkbox
                          defaultChecked
                          name='size-small'
                          checkedIcon={<i className='tabler-circle-check-filled' />}
                          icon={<i className='tabler-circle' />}
                        />
                      }
                    />
                  </Box>
                  <Box mr={2}>
                    <FormControlLabel
                      label='2 '
                      control={
                        <Checkbox
                          defaultChecked
                          name='size-small'
                          checkedIcon={<i className='tabler-circle-check-filled' />}
                          icon={<i className='tabler-circle' />}
                        />
                      }
                    />
                  </Box>
                  <Box mr={2}>
                    <FormControlLabel
                      label='All Select '
                      control={
                        <Checkbox
                          defaultChecked
                          name='size-small'
                          checkedIcon={<i className='tabler-circle-check-filled' />}
                          icon={<i className='tabler-circle' />}
                        />
                      }
                    />
                  </Box>
                </FormGroup>
              </div>

              <CustomTextField
                defaultValue={'0'}
                label='GPA ABOVE'
                required
                style={{ marginTop: '4px', marginLeft: '15%', width: '35%' }}
              />

              <Button
                variant='contained'
                style={{ width: 'auto', height: '38px', marginLeft: '50px', marginTop: '22.5px' }}
              >
                SAVE
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* ---- Table Section ----*/}
      <div className='optionalSubjectList mt-7 ' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                Optional Subject
              </Typography>
              <div style={{ flexGrow: 1 }}>
                <TextField
                  id='standard-search'
                  variant='standard'
                  placeholder='QUICK SEARCH'
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position='start'>
                        <SearchSharpIcon />
                      </InputAdornment>
                    )
                  }}
                />
              </div>
              {/*---------- Button Group Section ----------- */}
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <ButtonGroup
                  variant='outlined'
                  aria-label='Basic button group'
                  sx={{
                    '& .MuiButton-root': {
                      fontSize: '1.2rem',
                      padding: '4px 8px',
                      backgroundColor: 'tansparent',
                      borderColor: 'currentColor',
                      color: 'currentColor',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.08)',
                        borderColor: 'currentColor'
                      },
                      boxShadow: 'none'
                    }
                  }}
                >
                  <Button title='Copy Table'>
                    <Icon icon='material-symbols:file-copy-outline-sharp' />
                  </Button>
                  <Button title='Export to Excel'>
                    <Icon icon='mdi:file-excel-outline' />
                  </Button>
                  <Button title='Export to CSV'>
                    <Icon icon='mdi:file-document-outline' />
                  </Button>
                  <Button title='Export to PDF'>
                    <Icon icon='mdi:file-pdf-outline' />
                  </Button>
                  <Button title='Print'>
                    <Icon icon='fa:print' style={{ fontSize: '1rem' }} />
                  </Button>
                  <Button title='Action'>
                    <Icon
                      icon='mdi:table'
                      style={{
                        fontSize: '1.3rem'
                      }}
                    />
                  </Button>
                </ButtonGroup>
              </div>
            </div>
            {/*--------- Table section --------*/}
            <div style={{ marginTop: '20px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    <th
                      style={{
                        padding: '8px',
                        textAlign: 'left',
                        backgroundColor: 'lightgray',
                        position: 'relative',
                        borderRadius: '5px 0 0 5px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                        <span>SL </span>
                      </div>
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        textAlign: 'left',
                        backgroundColor: 'lightgray',
                        position: 'relative'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                        <span>Class Name </span>
                      </div>
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        textAlign: 'left',
                        backgroundColor: 'lightgray',
                        position: 'relative'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                        <span>GPA Above </span>
                      </div>
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        textAlign: 'left',
                        backgroundColor: 'lightgray',
                        position: 'relative'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                        <span>Action </span>
                      </div>
                    </th>
                  </tr>
                </thead>
                {/*----- Table body section ----- */}
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}></td>
                    <td style={{ padding: '8px' }}></td>
                    <td style={{ padding: '8px' }}>No Data Availabe in Table</td>
                    <td style={{ padding: '8px' }}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
          {/* Pagination */}
          <div style={{ display: 'flex', justifyContent: 'space-between', padding: '16px' }}>
            <Typography variant='body2' style={{ marginLeft: '16px' }}>
              Showing 0 to 0 of 0 entries
            </Typography>
            {/*----- Page number section ----- */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: 'auto',
                cursor: 'pointer',
                marginRight: '50%'
              }}
            >
              <Button
                size='small'
                style={{
                  color: 'black',
                  padding: '4px 8px',
                  width: '30px',
                  minWidth: 'auto',
                  border: 'none'
                }}
              >
                <ArrowBackIcon style={{ transform: 'scale(0.8)' }} />
              </Button>
              <Button
                size='small'
                style={{
                  color: 'black',
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

export default OptionalSubjectGeneralLayout
