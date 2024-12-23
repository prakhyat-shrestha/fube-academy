import {
  Typography,
  Card,
  CardContent,
  Button,
  InputAdornment,
  CardActions,
  Table,
  TableContainer,
  TableBody,
  Paper,
  TableRow,
  TableCell
} from '@mui/material'
import Link from 'next/link'
import CustomTextField from '@/@core/components/mui/TextField'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import { IconDevicesShare } from '@tabler/icons-react'

function createData(name: string, details: string | JSX.Element) {
  return { name, details }
}

const rows = [
  createData('Software Version', '8.1.0'),
  createData(
    'Check Update',
    <Button
      sx={{
        fontSize: '0.9rem',
        height: '25px',
        marginLeft: '-15px'
      }}
    >
      <IconDevicesShare />
      Update
    </Button>
  ),
  createData('PHP Version', '8.2.20'),
  createData('CURL Enable', 'enable'),
  createData(
    'Purchase Code',
    <>
      Verified{' '}
      <Button
        variant='contained'
        sx={{
          fontSize: '0.8rem',
          height: '25px'
        }}
      >
        REVOKE LICENSE
      </Button>
    </>
  ),

  createData('Install Domain', 'https://erp.fubetech.com'),
  createData('System Activation Date', '30/07/2081'),
  createData('Last Update', '30/07/2081')
]

const AboutAndUpdateLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Update System
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
            <Link href='#'>Update System</Link>
          </Typography>
        </nav>
      </div>

      <div className='aboutAndUpdate mt-4 ' style={{ display: 'flex' }}>
        {/* Upload From Local Directory Card */}
        <Card sx={{ width: '40%', height: '20%' }}>
          <CardContent>
            <Typography variant='h6' component='h4'>
              Upload From Local Directory
            </Typography>
            <CustomTextField
              required
              value='Upload File'
              style={{ margin: '20px 40px 0 0 ', width: '100%' }}
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
            {/* Button */}
            <CardActions sx={{ justifyContent: 'center' }}>
              <Button variant='contained'>
                <CheckSharpIcon sx={{ mr: 1 }} />
                SAVE FILE
              </Button>
            </CardActions>
          </CardContent>
        </Card>

        {/* UPDATE DETAILS Card */}
        <Card className='updateDetails' sx={{ width: '100%', marginLeft: '2%', height: 'auto' }}>
          <CardContent>
            <Typography variant='h6' component='h4'>
              Update Details
            </Typography>
            <Typography variant='h6' component='h4' style={{ marginTop: '20px' }}>
              System Info
            </Typography>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650, marginTop: '5px' }} size='small' aria-label='a dense table'>
                <TableBody>
                  {rows.map(row => (
                    <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                      <TableCell component='th' scope='row'>
                        {row.name}
                      </TableCell>
                      <TableCell align='left'>{row.details}</TableCell>
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

export default AboutAndUpdateLayout
