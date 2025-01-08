import { Card, CardContent, Typography } from '@mui/material'

const BlockedUserLayout = () => {
  return (
    <div className='blockListGroup'>
      <Card sx={{ width: '100%', height: 'auto' }}>
        <CardContent>
          <div>
            <Typography variant='h6' component='h3' sx={{ marginLeft: '-0.5%' }}>
              Blocked User
            </Typography>
            <Typography variant='h6' component='h3' sx={{ marginLeft: '-0.5%', marginTop: '2%' }}>
              People
            </Typography>
            <Typography sx={{ marginLeft: '-0.5%', marginTop: '2%' }}>No User Found!</Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default BlockedUserLayout
