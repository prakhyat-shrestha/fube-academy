import { Typography, Button } from '@mui/material'
import CheckSharpIcon from '@mui/icons-material/CheckSharp'

const GenerateConnections = () => {
  return (
    <>
      <div className='container'>
        <div className='generateConnections' style={{ marginTop: '20px' }}>
          <Typography variant='h6' component='h3'>
            GENERATE TEACHER AND STUDENT CONNECTION FOR OLD CLASSES & SUBJECTS
          </Typography>
        </div>
      </div>
      {/* Button */}
      <Button variant='contained' sx={{ marginTop: '10px', borderRadius: '50px' }}>
        <CheckSharpIcon sx={{ mr: 1 }} />
        GENERATE
      </Button>
    </>
  )
}

export default GenerateConnections
