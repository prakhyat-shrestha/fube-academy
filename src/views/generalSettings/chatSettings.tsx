import { Typography, Card, CardContent } from '@mui/material'
import Link from '@/components/Link'
import ChattingMethod from './chattingsComponents/chattingMethod'
import ChatSettings from './chattingsComponents/chatSettings'
import InvitationSettings from './chattingsComponents/invitationSettings'
import GenerateConnections from './chattingsComponents/generateConnections'
import PermissionSettings from './chattingsComponents/permissionSettings'

const ChatSettingsLayout = () => {
  return (
    <>
      <div className='flex'>
        <Typography variant='h6' component='h3'>
          Setting
        </Typography>
        <nav style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <Typography variant='h6' component='h3' style={{ display: 'flex', alignItems: 'center' }}>
            <Link href='#' style={{ marginRight: '35px' }}>
              Dashboard
            </Link>
            <span style={{ marginRight: '10px' }}>|</span>
            <Link href='#' style={{ marginRight: '35px' }}>
              Human Resource
            </Link>
            <span style={{ marginRight: '35px' }}>|</span>
            <Link href='#'>Setting</Link>
          </Typography>
        </nav>
      </div>
      <div className='chatSettings mt-4' style={{ flex: 1 }}>
        <Card sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <Typography variant='h6' component='h3'>
              Chatting Method Settings
            </Typography>
            <ChattingMethod />
          </CardContent>
        </Card>

        <Card className='mt-7' sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <Typography variant='h6' component='h3'>
              Chat Settings
            </Typography>
            <ChatSettings />
          </CardContent>
        </Card>

        <Card className='mt-7' sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <Typography variant='h6' component='h3'>
              Invitation Settings
            </Typography>
            <InvitationSettings />
          </CardContent>
        </Card>

        <Card className='mt-7' sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <Typography variant='h6' component='h3'>
              Generate Connections
            </Typography>
            <GenerateConnections />
          </CardContent>
        </Card>

        <Card className='mt-7' sx={{ width: '100%', height: '105%' }}>
          <CardContent>
            <Typography variant='h6' component='h3'>
              Permission Settings
            </Typography>
            <PermissionSettings />
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default ChatSettingsLayout
