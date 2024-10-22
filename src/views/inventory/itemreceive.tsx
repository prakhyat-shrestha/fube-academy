'use client'
import { Typography, Divider, MenuItem, FormControlLabel, Checkbox, Box, FormGroup } from '@mui/material'
import Link from 'next/link'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import AddSharpIcon from '@mui/icons-material/AddSharp'

const ItemReceiveLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Item Receive
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Inventory
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Item Receive </Link>
          </Typography>
        </nav>
      </div>

      <div className='flex' style={{ display: 'flex' }}>
        {/* Receive Details card */}
        <div className='receiveDetail mt-4'>
          <Card sx={{ width: 320, height: '98%' }}>
            <CardContent>
              <Typography variant='h6' component='h4'>
                Receive Details
              </Typography>

              <CustomTextField
                select
                defaultValue='expense'
                label='EXPENSE HEAD'
                required
                style={{ width: '100%', marginTop: '20px' }}
              >
                <CustomTextField
                  placeholder='Search...'
                  style={{ width: '100%', marginTop: '20px', padding: '0 8px 8px  8px' }}
                />
                <MenuItem value='expense'>
                  <span style={{ fontStyle: 'normal' }}>Expense Head *</span>
                </MenuItem>
              </CustomTextField>

              <CustomTextField
                select
                defaultValue='payment'
                label='PAYMENT METHOD'
                required
                style={{ width: '100%', marginTop: '20px' }}
              >
                <CustomTextField
                  placeholder='Search...'
                  style={{ width: '100%', marginTop: '20px', padding: '0 8px 8px  8px' }}
                />
                <MenuItem value='payment'>
                  <span style={{ fontStyle: 'normal' }}>Payment Method *</span>
                </MenuItem>
              </CustomTextField>

              <CustomTextField
                select
                defaultValue='supplier'
                label='SUPPLIER'
                required
                style={{ width: '100%', marginTop: '20px' }}
              >
                <CustomTextField
                  placeholder='Search...'
                  style={{ width: '100%', marginTop: '20px', padding: '0 8px 8px  8px' }}
                />
                <MenuItem value='supplier'>
                  <span style={{ fontStyle: 'normal' }}>Select Supplier *</span>
                </MenuItem>
              </CustomTextField>

              <CustomTextField
                select
                defaultValue='storeWareHouse'
                label='STORE WAREHOUSE'
                required
                style={{ width: '100%', marginTop: '20px' }}
              >
                <CustomTextField
                  placeholder='Search...'
                  style={{ width: '100%', marginTop: '20px', padding: '0 8px 8px  8px' }}
                />
                <MenuItem value='storeWareHouse'>
                  <span style={{ fontStyle: 'normal' }}>Select Store/Warehouse *</span>
                </MenuItem>
              </CustomTextField>

              <CustomTextField label='REFERENCE NO' style={{ width: '100%', marginTop: '20px' }} />

              <CustomTextField label='RECEIVE DATE' type='date' style={{ width: '100%', marginTop: '20px' }} />

              <CustomTextField label='DESCRIPTION' multiline rows={2} style={{ marginTop: '20px', width: '100%' }} />
            </CardContent>
            <CardActions style={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon style={{ marginRight: 5 }} />
                SAVE
              </Button>
            </CardActions>
          </Card>
        </div>

        <div className='flex' style={{ display: 'flex' }}>
          {/* Item Recieve card */}
          <div className='itemReceive mt-4 mx-6'>
            <Card sx={{ width: '110.3%', height: '450px' }}>
              <CardContent>
                <div className='container' style={{ display: 'flex', gap: '81.5%' }}>
                  <Typography variant='h6' component='h4'>
                    Item Receive
                  </Typography>
                  <Button variant='contained' startIcon={<AddSharpIcon />}>
                    ADD
                  </Button>
                </div>
                <div className='title'>
                  <div className='subTitle' style={{ display: 'flex', marginTop: '20px' }}>
                    <div className='product' style={{ marginRight: '9.3%' }}>
                      <Typography variant='h6' component='h3' style={{ fontSize: '11px' }}>
                        PRODUCT NAME*
                      </Typography>
                    </div>
                    <div className='unit' style={{ marginRight: '17.9%' }}>
                      <Typography variant='h6' component='h3' style={{ fontSize: '11px' }}>
                        UNIT PRICE*
                      </Typography>
                    </div>
                    <div className='quantity' style={{ marginRight: '18.4%' }}>
                      <Typography variant='h6' component='h3' style={{ fontSize: '11px' }}>
                        QUANTITY*
                      </Typography>
                    </div>
                    <div className='total' style={{ marginRight: '19%' }}>
                      <Typography variant='h6' component='h3' style={{ fontSize: '11px' }}>
                        SUB TOTAL
                      </Typography>
                    </div>
                    <Typography variant='h6' component='h3' style={{ fontSize: '11px' }}>
                      ACTION
                    </Typography>
                  </div>

                  <Divider style={{ marginTop: '10px' }} />

                  <div style={{ display: 'flex', marginTop: '20px', gap: '15px' }}>
                    <CustomTextField select defaultValue='storeWareHouse' required style={{ width: '17%' }}>
                      <CustomTextField
                        placeholder='Search...'
                        style={{ width: '100%', marginTop: '20px', padding: '0 8px 8px  8px' }}
                      />
                      <MenuItem value='storeWareHouse'>
                        <span style={{ fontStyle: 'normal' }}>Select Item *</span>
                      </MenuItem>
                    </CustomTextField>

                    <CustomTextField style={{ width: '23%' }} InputLabelProps={{ style: { fontSize: '20px' } }} />

                    <CustomTextField style={{ width: '23%' }} InputLabelProps={{ style: { fontSize: '20px' } }} />

                    <CustomTextField
                      style={{ width: '23%' }}
                      defaultValue={'0.0'}
                      InputLabelProps={{ style: { fontSize: '20px' } }}
                    />

                    <Button
                      variant='contained'
                      style={{
                        borderRadius: '15%',
                        width: '25px',
                        height: '25px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '25px',
                        padding: '0',
                        minWidth: '0',
                        minHeight: '0',
                        cursor: 'pointer',
                        margin: '6px '
                      }}
                    >
                      {<i className='tabler-trash' />}
                    </Button>
                  </div>

                  <Divider style={{ marginTop: '20px' }} />
                </div>

                <div className='total' style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
                  <Typography variant='h6' component='h3' style={{ marginTop: '10px', fontWeight: 'bold' }}>
                    Total
                  </Typography>
                  <div className='field' style={{ display: 'flex', gap: 20 }}>
                    <CustomTextField style={{ width: '40%' }} defaultValue={'0.00'} />
                    <CustomTextField style={{ width: '40%' }} defaultValue={'0.00'} />
                  </div>
                </div>

                <Divider style={{ marginTop: '40px' }} />

                <div style={{ display: 'flex', fontSize: 'small', fontWeight: 'bold', marginTop: '20px' }}>
                  <div style={{ marginTop: '2%' }}>
                    <FormGroup row>
                      <Box mr={54}>
                        <FormControlLabel
                          label='Full Paid '
                          control={
                            <Checkbox
                              name='size-small'
                              checkedIcon={<i className='tabler-circle-check-filled' />}
                              icon={<i className='tabler-circle' />}
                            />
                          }
                        />
                      </Box>
                    </FormGroup>
                  </div>
                  <div className='fieldSecond' style={{ display: 'flex', gap: 50, marginTop: '10px' }}>
                    <CustomTextField label='TOTAL PAID' style={{ width: '100%' }} defaultValue={'0.00'} />
                    <CustomTextField label='TOTAL DUE' style={{ width: '100%' }} defaultValue={'0.00'} />
                  </div>
                </div>
              </CardContent>
              <CardActions style={{ justifyContent: 'center', marginBottom: '5px' }}>
                <Button variant='contained'>
                  <CheckSharpIcon style={{ marginRight: 5 }} />
                  RECEIVE
                </Button>
              </CardActions>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItemReceiveLayout
