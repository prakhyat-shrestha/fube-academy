import { Typography, MenuItem } from '@mui/material'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CustomTextField from '@core/components/mui/TextField'
import Button from '@mui/material/Button'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'

const TransactionLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Transaction
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Account Report
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Transaction</Link>
          </Typography>
        </nav>
      </div>
      <div className='transaction mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <div className='container' style={{ display: 'flex', gap: '75.25%' }}>
              <Typography variant='h6' component='h4'>
                Select Criteria
              </Typography>
            </div>

            <div className='container' style={{ display: 'flex' }}>
              <CustomTextField
                type='date'
                fullWidth
                label='DATE FROM'
                required
                style={{ margin: '20px 40px 0 0 ', width: '60%' }}
              />
              <CustomTextField
                type='date'
                fullWidth
                label='DATE TO'
                required
                defaultValue='year'
                style={{ margin: '20px 40px 0 0 ', width: '60%' }}
              />
              <CustomTextField
                select
                fullWidth
                defaultValue='type'
                label='TYPE'
                required
                id='custom-select'
                style={{ margin: '20px 40px 0 0 ', width: '60%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='type'>
                  <span style={{ fontStyle: 'normal' }}>Select Type * </span>
                </MenuItem>
                <MenuItem value='one'>Income</MenuItem>
                <MenuItem value='two'>Expense</MenuItem>
              </CustomTextField>
              <CustomTextField
                select
                fullWidth
                defaultValue='payment'
                label='PAYMENT METHOD'
                required
                id='custom-select'
                style={{ margin: '20px 0 0 0 ', width: '60%' }}
              >
                <CustomTextField placeholder='Search...' style={{ padding: '0 6px 8px 6px', width: '100%' }} />
                <MenuItem value='payment'>
                  <span style={{ fontStyle: 'normal' }}>All </span>
                </MenuItem>
                <MenuItem value='one'>Cash</MenuItem>
                <MenuItem value='two'>Cheque</MenuItem>
                <MenuItem value='three'>Bank</MenuItem>
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
    </>
  )
}

export default TransactionLayout
