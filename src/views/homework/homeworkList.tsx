'use client'
import { Typography, MenuItem, TextField, InputAdornment } from '@mui/material'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CustomTextField from '@core/components/mui/TextField'
import Button from '@mui/material/Button'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'
import AddSharpIcon from '@mui/icons-material/AddSharp'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useRef } from 'react'
import { Icon } from '@iconify/react/dist/iconify.js'

const HomeworkListGroup = () => {
  const textFieldRef = useRef<HTMLInputElement>(null)

  const handleFocus = () => {
    if (textFieldRef.current) {
      textFieldRef.current.placeholder = ''
    }
  }

  const handleBlur = () => {
    if (textFieldRef.current && textFieldRef.current.value === '') {
      textFieldRef.current.placeholder = 'SEARCH'
    }
  }
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Homework List
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Homework
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Homework List</Link>
          </Typography>
        </nav>
      </div>
      <div className='homeWork mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div className='container' style={{ display: 'flex', gap: '75.25%' }}>
              <Typography variant='h6' component='h4'>
                Select Criteria
              </Typography>
              <Button variant='contained' startIcon={<AddSharpIcon />}>
                ADD HOMEWORK
              </Button>
            </div>

            <div className='container' style={{ display: 'flex' }}>
              <CustomTextField
                select
                fullWidth
                defaultValue='Fees Group'
                label='CLASS*'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '60%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='Fees Group'>
                  <span style={{ fontStyle: 'normal' }}>Fees Group</span>
                </MenuItem>
                <MenuItem value={'School Fee'}>School Fee</MenuItem>
                <MenuItem value={'Plus Two Fee'}>Plus Two Fee</MenuItem>
                <MenuItem value={'Bachelor Fee'}>Bachelor Fee</MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                defaultValue='Fees Group'
                label='SUBJECT*'
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '60%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='Fees Group'>
                  <span style={{ fontStyle: 'normal' }}>Fees Group</span>
                </MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                defaultValue='Fees Group'
                label='SECTION*'
                id='custom-select'
                style={{ marginTop: '20px', width: '60%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='Fees Group'>
                  <span style={{ fontStyle: 'normal' }}>UNSELECT ALL</span>
                </MenuItem>
              </CustomTextField>
            </div>
            <div
              className='container mt-6'
              style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}
            >
              <Button variant='contained' startIcon={<SearchSharpIcon />}>
                SEARCH
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      {/* ---- Table Section ----*/}
      <div className='homeWorkList mt-7 ' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '16%' }}>
                Homework List
              </Typography>
              <div style={{ flexGrow: 1 }}>
                <TextField
                  id='standard-search'
                  variant='standard'
                  placeholder='QUICK SEARCH'
                  inputRef={textFieldRef}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
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
                        <span>Si </span>
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
                        <span>Class </span>
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
                        <span>Section </span>
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
                        <span>Subject </span>
                      </div>
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        textAlign: 'left',
                        backgroundColor: 'lightgray'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                        <span>Marks</span>
                      </div>
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        textAlign: 'left',
                        backgroundColor: 'lightgray'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                        <span>Homework Date</span>
                      </div>
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        textAlign: 'left',
                        backgroundColor: 'lightgray'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowDownwardIcon style={{ marginLeft: '8px' }} />
                        <span>Submission Date</span>
                      </div>
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        textAlign: 'left',
                        backgroundColor: 'lightgray'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                        <span>Evaluation Date</span>
                      </div>
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        textAlign: 'left',
                        backgroundColor: 'lightgray'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                        <span>Created By</span>
                      </div>
                    </th>
                    <th
                      style={{
                        padding: '8px',
                        textAlign: 'left',
                        backgroundColor: 'lightgray',
                        borderRadius: '0 5px 5px 0'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ArrowDownwardIcon style={{ marginRight: '8px' }} />
                        <span>Actions</span>
                      </div>
                    </th>
                  </tr>
                </thead>
                {/*----- Table body section ----- */}
                <tbody>
                  <tr style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '8px' }}></td>
                    <td style={{ padding: '8px' }}></td>
                    <td style={{ padding: '8px' }}></td>
                    <td style={{ padding: '8px' }}></td>
                    <td style={{ padding: '8px' }}></td>
                    <td style={{ padding: '8px' }}>No Data Availabe in Table</td>
                    <td style={{ padding: '8px' }}></td>
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

export default HomeworkListGroup
