import Link from 'next/link'

import { Typography, MenuItem } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

import Button from '@mui/material/Button'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

import CustomTextField from '@core/components/mui/TextField'

const AddBookLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h5' component='h3'>
          Add Book
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Library
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Add Book</Link>
          </Typography>
        </nav>
      </div>
      <div className='multiclass mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div className='container' style={{ display: 'flex', gap: '69%' }}>
              <Typography variant='h6' component='h4'>
                Select Criteria
              </Typography>
            </div>

            <div className='container' style={{ display: 'flex' }}>
              <CustomTextField
                required
                fullWidth
                label='BOOK TITLE'
                id='custom-select'
                style={{ margin: '20px 35px 0 0 ', width: '65%' }}
              />

              <CustomTextField
                select
                fullWidth
                required
                defaultValue='book'
                label='BOOK CATEGORIES'
                id='custom-select'
                style={{ margin: '20px 35px 0 0 ', width: '65%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='book'>
                  <span style={{ fontStyle: 'normal' }}>Select Book Category*</span>
                </MenuItem>
                <MenuItem value='ECED'>ECED</MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                required
                defaultValue='section'
                label='SUBJECT'
                id='custom-select'
                style={{ margin: '20px 35px 0 0 ', width: '65%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='section'>
                  <span style={{ fontStyle: 'normal' }}>Select Subjects*</span>
                </MenuItem>
              </CustomTextField>
              <CustomTextField
                fullWidth
                label='BOOK NUMBER'
                id='custom-select'
                style={{ margin: '20px 35px 0 0 ', marginRight: '10px', width: '65%' }}
              />
            </div>
            {/* //Second Rpw */}
            <div className='container' style={{ display: 'flex' }}>
              <CustomTextField
                fullWidth
                label='ISBN NO'
                id='custom-select'
                style={{ margin: '20px 35px 0 0 ', width: '65%' }}
              />

              <CustomTextField
                fullWidth
                label='PUBLISHER NAME'
                id='custom-select'
                style={{ margin: '20px 35px 0 0 ', width: '65%' }}
              />
              <CustomTextField
                fullWidth
                label='AUTHOR NAME'
                id='custom-select'
                style={{ margin: '20px 35px 0 0 ', width: '65%' }}
              />

              <CustomTextField
                fullWidth
                label='RACK NUMBER'
                id='custom-select'
                style={{ margin: '20px 35px 0 0 ', marginRight: '10px', width: '65%' }}
              />
              {/* Third Row */}
            </div>
            <div className='container' style={{ display: 'flex', width: '51%' }}>
              <CustomTextField
                fullWidth
                label='QUANTITY'
                id='custom-select'
                style={{ margin: '20px 35px 0 0 ', width: '65%' }}
              />

              <CustomTextField
                fullWidth
                label='BOOK PRICE'
                id='custom-select'
                style={{ margin: '20px 35px 0 0 ', width: '65%' }}
              />
            </div>
            <div className='container' style={{ display: 'flex', width: '100%', marginTop: '20px' }}>
              <CustomTextField label='DESCRIPTION' variant='outlined' multiline rows={4} fullWidth />
            </div>

            <div className='container' style={{ display: 'flex', marginTop: '25px', marginLeft: '45%' }}>
              <Button variant='contained' startIcon={<CheckSharpIcon />}>
                SAVE BOOK
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default AddBookLayout
