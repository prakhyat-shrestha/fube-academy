import { Typography, Table, TableContainer, TableHead, TableBody, TableRow, Paper, TableCell, Box } from '@mui/material'

const BankLayout = () => {
  return (
    <>
      <div className='bank' style={{ marginLeft: '-18%' }}>
        <Typography component='h3' variant='h6'>
          Bank Account List
          <br />
          <span>
            <b style={{ fontSize: '.8rem' }}>Note:</b>{' '}
            <span style={{ fontSize: '.7rem' }}>Available For Students And Parents</span>
          </span>
        </Typography>
        {/* Table */}
        <TableContainer className='mt-4' component={Paper}>
          <Table sx={{ minWidth: 650 }} stickyHeader aria-label='sticky table'>
            <TableHead>
              <TableRow>
                {['VALUE', 'BANK NAME', 'ACCOUNT NAME', 'ACCOUNT NUMBER', 'ACCOUNT TYPE'].map(header => (
                  <TableCell align='left' sx={{ padding: 2, fontSize: '.8rem' }} key={header}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>{header}</Box>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody></TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  )
}

export default BankLayout
