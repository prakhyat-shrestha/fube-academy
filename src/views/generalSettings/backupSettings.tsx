import {
  Typography,
  Table,
  Card,
  CardContent,
  Button,
  CardActions,
  TableContainer,
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Paper,
  InputAdornment
} from '@mui/material'
import Link from 'next/link'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'
import CustomTextField from '@/@core/components/mui/TextField'
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined'

const BackupSettingsLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Backup
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
            <Link href='#'>Backup</Link>
          </Typography>
        </nav>
      </div>

      <div className='backupSetting mt-4 ' style={{ display: 'flex' }}>
        {/* Upload From Local Directory Card */}
        <Card sx={{ width: '30%', height: '20%' }}>
          <CardContent>
            <div className='container'>
              <Typography variant='h6' component='h4'>
                Upload From Local Directory
              </Typography>
            </div>
            <CustomTextField
              required
              value='Attach File*'
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
                UPDATE
              </Button>
            </CardActions>
          </CardContent>
        </Card>

        {/* Database Backup List Card */}
        <Card className='databaseBackup' sx={{ width: '100%', marginLeft: '2%', height: 'auto' }}>
          <CardContent>
            <div style={{ display: 'flex', gap: '45%' }}>
              <Typography variant='h6' component='h4'>
                Database Backup List
              </Typography>
              <div className='btns' style={{ display: 'flex', width: 'auto', gap: '5px', marginLeft: '35px' }}>
                <Button
                  variant='contained'
                  style={{
                    fontSize: '.7rem',
                    height: '25px'
                  }}
                >
                  <ExpandCircleDownOutlinedIcon sx={{ mr: 1, fontSize: '.9rem' }} />
                  UPLOAD FILE BACKUP
                </Button>

                <Button
                  variant='contained'
                  style={{
                    fontSize: '.7rem',
                    height: '25px'
                  }}
                >
                  <ExpandCircleDownOutlinedIcon sx={{ mr: 1, fontSize: '.9rem' }} />
                  DATABASE BACKUP
                </Button>
              </div>
            </div>
            <TableContainer className='mt-4' component={Paper}>
              <Table sx={{ minWidth: 650 }} stickyHeader aria-label='sticky table'>
                <TableHead>
                  <TableRow>
                    <TableCell>SIZE</TableCell>
                    <TableCell align='right'>CREATED DATE TIME</TableCell>
                    <TableCell align='right'>BACKUP FILES</TableCell>
                    <TableCell align='right'>FILE TYPE</TableCell>
                    <TableCell align='right'>ACTION</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody></TableBody>
              </Table>
            </TableContainer>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default BackupSettingsLayout
