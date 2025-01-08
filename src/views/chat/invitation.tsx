import { Card, CardContent, Typography } from '@mui/material'

const InvitationLayout = () => {
  return (
    <>
      <div className='invitationGroup' style={{ display: 'flex', gap: '2.5%' }}>
        {/* Left Card */}
        <Card sx={{ width: '100%', height: 'auto' }}>
          <CardContent>
            <div>
              <Typography variant='h6' component='h3' sx={{ marginLeft: '-0.5%' }}>
                Your Request
              </Typography>
              <Typography sx={{ marginLeft: '-0.5%', marginTop: '2%' }}>No Connection Request Found!</Typography>
            </div>
          </CardContent>
        </Card>
        {/* Right Card */}
        <Card sx={{ width: '100%', height: 'auto' }}>
          <CardContent>
            <div>
              <Typography variant='h6' component='h3' sx={{ marginLeft: '-0.5%' }}>
                People Request You To Connect
              </Typography>
              <Typography sx={{ marginLeft: '-0.5%', marginTop: '2%' }}>No Connection Request Found!</Typography>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='invitationGroup'>
        {/* Left Card */}
        <Card sx={{ width: '100%', height: 'auto', marginTop: '5%' }}>
          <CardContent>
            <div>
              <Typography variant='h6' component='h3' sx={{ marginLeft: '-0.5%' }}>
                Connection Connected With You
              </Typography>
              <Typography sx={{ marginLeft: '-0.5%', marginTop: '2%' }}>
                No Connection Connected Request Found!
              </Typography>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default InvitationLayout
