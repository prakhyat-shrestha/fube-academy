// MUI Imports
import Link from 'next/link'
import { Typography, MenuItem, Divider, InputAdornment, CardActions, Card, Button } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const ImportStudentLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Student Import
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Student Admission
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Student Import</Link>
          </Typography>
        </nav>
      </div>

      <Card className='mt-4' style={{ padding: '20px', height: 'auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Typography variant='h6'>Select Criteria</Typography>
          <Button
            variant='outlined'
            style={{ height: '30px', fontSize: '.8rem', borderRadius: '15px' }}
            href='importStudent'
          >
            DOWNLOAD SAMPLE FILE
            <DownloadIcon sx={{ fontSize: '1.05rem', marginLeft: '5px' }} />
          </Button>
        </div>

        <Typography variant='body2' style={{ margin: '10px 0' }}>
          1. Your CSV data should be in the format download file. The first line of your CSV file should be the column
          headers as in the table example. Also make sure that your file is UTF-8 to avoid unnecessary encoding
          problems.
        </Typography>
        <Typography variant='body2' style={{ margin: '10px 0' }}>
          2. If the column you are trying to import is date make sure that is formatted in format Y-m-d (2018-06-06).
        </Typography>
        <Typography variant='body2' style={{ margin: '10px 0' }}>
          3. Duplicate "Roll Number" (unique in section) rows will not be imported. Roll No used or not you can get from
          student report page search on class & section
        </Typography>
        <Typography variant='body2' style={{ margin: '10px 0' }}>
          4. Duplicate "Guardian email & Guardian Phone" rows will not be imported. Guardian email & Guardian Phone used
          or not you can get from student report page search on class & section
        </Typography>
        <Typography variant='body2' style={{ margin: '10px 0' }}>
          5. For student "Gender" use ID( 1=Male, 2=Female, 3=Others, ).
        </Typography>
        <Typography variant='body2' style={{ margin: '10px 0' }}>
          6. For student "Blood Group" use Id( 9=A+, 10=O+, 11=B+, 12=AB+, 13=A-, 14=O-, 15=B-, 16=AB-, ).
        </Typography>
        <Typography variant='body2' style={{ margin: '10px 0' }}>
          7. For student "Religion" use ID( 4=Islam, 5=Hinduism, 6=Sikhism, 7=Buddhism, 8=Protestantism, ).
        </Typography>
        <Typography variant='body2' style={{ margin: '10px 0' }}>
          8. For relation with guardian (F=Father, M=Mother, O=Other)
        </Typography>
        <Typography variant='body2' style={{ margin: '10px 0' }}>
          9. Please follow this date format(2020-06-15) for Date of birth & Admission date
        </Typography>
        <Divider />

        <div className='container' style={{ display: 'flex', gap: '20px', marginTop: '10px' }}>
          <CustomTextField
            select
            required
            fullWidth
            defaultValue='year'
            id='custom-select'
            style={{ margin: '20px 10px 0 0 ', width: '65%' }}
          >
            <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
            <MenuItem value='year'>
              <span style={{ fontStyle: 'normal' }}>Academic Year *</span>
            </MenuItem>
            <MenuItem value={'School Fee'}>2080[Baishakh-Chaitra]</MenuItem>
            <MenuItem value={'Plus Two Fee'}>2081[Session]</MenuItem>
          </CustomTextField>
          <CustomTextField
            select
            fullWidth
            required
            defaultValue='class'
            id='custom-select'
            style={{ margin: '20px 10px 0 0 ', width: '65%' }}
          >
            <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
            <MenuItem value='class'>
              <span style={{ fontStyle: 'normal' }}>Select Class *</span>
            </MenuItem>
            <MenuItem value='ECED'>ECED</MenuItem>
            <MenuItem value='1'>1</MenuItem>
            <MenuItem value='2'>2</MenuItem>
            <MenuItem value='3'>3</MenuItem>
            <MenuItem value='4'>4</MenuItem>
            <MenuItem value='5'>5</MenuItem>
            <MenuItem value='6'>6</MenuItem>
            <MenuItem value='7'>7</MenuItem>
          </CustomTextField>
          <CustomTextField
            select
            fullWidth
            defaultValue='section'
            required
            id='custom-select'
            style={{ margin: '20px 10px 0 0 ', width: '65%' }}
          >
            <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
            <MenuItem value='section'>
              <span style={{ fontStyle: 'normal' }}>Select Section</span>
            </MenuItem>
          </CustomTextField>
          <CustomTextField
            required
            value='Excel File'
            style={{ margin: '20px 0 0 0 ', width: '65%' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='end'>
                  <Button variant='contained' style={{ height: '25px', width: '90px', fontSize: '0.75rem' }}>
                    BROWSE
                  </Button>
                </InputAdornment>
              )
            }}
          />
        </div>
        <CardActions style={{ justifyContent: 'center' }}>
          <Button variant='contained' style={{ fontSize: '.8rem', height: '30px' }}>
            <CheckSharpIcon style={{ marginRight: 5 }} />
            SAVE BULK STUDENTS
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default ImportStudentLayout
