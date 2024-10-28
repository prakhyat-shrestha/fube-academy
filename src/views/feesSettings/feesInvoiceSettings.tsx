'use client'
import { Typography, Card, CardContent, Button } from '@mui/material'
import Link from 'next/link'
import CustomAutocomplete from '@core/components/mui/Autocomplete'
import CustomTextField from '@core/components/mui/TextField'
import CardActions from '@mui/material/CardActions'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const FeesInvoiceSettingsLayout = () => {
  const choiceSelection = [{ title: 'Prefix' }, { title: 'Class' }, { title: 'Section' }, { title: 'EMIS No' }]

  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h4'>
          Fees Invoice Settings
        </Typography>
        <nav style={{ marginLeft: 'auto' }}>
          <Typography variant='h6' component='h4' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '25px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '25px' }}>
              Fees Settings
            </Link>
            <span style={{ marginRight: '25px' }}>|</span>
            <Link href='#'>Fees Invoice Settings </Link>
          </Typography>
        </nav>
      </div>

      {/*  1st card */}
      <div className='feesInvoiceSettings mt-4  ' style={{ display: 'flex', width: '102%' }}>
        <Card sx={{ width: '100%', height: '35%' }}>
          <CardContent>
            <Typography variant='h6' component='h4'>
              Invoice Number Generator
            </Typography>
            <CustomAutocomplete
              multiple
              className='mbs-5'
              options={choiceSelection}
              defaultValue={[choiceSelection[0]]}
              id='autocomplete-size-medium-multi'
              getOptionLabel={option => option.title || ''}
              renderInput={params => (
                <CustomTextField {...params} label='Invoice Number Position' required size='medium' />
              )}
            />
          </CardContent>
        </Card>
        <Card className='secondCard mx-7' sx={{ width: '100%', height: '35%' }}>
          <CardContent>
            <Typography variant='h6' component='h4'>
              Invoice Number Preview
            </Typography>
            <Card className='mt-4'>
              <CardContent>
                <Typography variant='h6' component='h4' sx={{ color: 'gray' }}>
                  CDMV-One-123-A
                </Typography>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>

      {/* ---- 2nd Card ----*/}
      <div className='invoiceAttribute mt-7 '>
        <Card sx={{ width: '100%', height: '100%' }}>
          <CardContent>
            <div>
              <Typography variant='h6' component='h3' style={{ flex: 1 }}>
                Invoice Attribute
              </Typography>
            </div>
            <div className='rowOne mt-5' style={{ display: 'flex', gap: '40px' }}>
              <CustomTextField label='UNIQUE ID START' required defaultValue={'001'} style={{ width: '50%' }} />
              <CustomTextField label='PREFIX(MAX 10 CHARACTERS)' defaultValue={'CDMV'} style={{ width: '50%' }} />
            </div>
            <div className='rowTwo mt-5' style={{ display: 'flex', gap: '40px' }}>
              <CustomTextField label='CLASS LIMIT' defaultValue={'3'} style={{ width: '50%' }} />
              <CustomTextField label='SECTION LIMIT' defaultValue={'1'} style={{ width: '50%' }} />
            </div>
            <div className='rowThree mt-5'>
              <CustomTextField label='ADMISSION NO LIMIT' defaultValue={'3'} style={{ width: '48.5%' }} />
            </div>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained' style={{ margin: '5px 0 0 0' }}>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                UPDATE
              </Button>
            </CardActions>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default FeesInvoiceSettingsLayout
