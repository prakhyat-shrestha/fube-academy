import { Card, CardContent, TextField, Button } from '@mui/material'

import CustomTextField from '@/@core/components/mui/TextField'

const AllIssuedBooks = () => {
  return (
    <div>
      <h3>Issued Book List</h3>

      <Card sx={{ maxWidth: 800 }}>
        <CardContent>
          <div>
            <h3>Select Criteria</h3>
          </div>
          <div className='flex gap-10'>
            <CustomTextField label='BOOK' className='book' />
            <CustomTextField label='SEARCH BY BOOK ID' className='searchbookbyid' />

            <CustomTextField label='SUBJECT' className='subject' />
          </div>
          <div className='{sx:{margin:auto}}'>
            <Button variant='contained'>Search</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default AllIssuedBooks
