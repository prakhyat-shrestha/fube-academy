'use client'
import Grid from '@mui/material/Grid'
import CustomTextField from '@core/components/mui/TextField'
import * as React from 'react';
import { useState } from 'react';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import MenuItem from '@mui/material/MenuItem'
import { Divider, InputAdornment, Tab } from '@mui/material';
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import Card from '@mui/material/Card'
import { Button } from '@mui/material';
import { useRouter } from 'next/router';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

type FormDataType= {
  sl: string,
  booktitle: string,
  isbn: string,
  catergory: string,
  publishername: string,
  authorname:string,
  quantity:number,
  price:number,

}

interface TablePaginationActionsProps {
    count: number;
    page: number;
    rowsPerPage: number;
    onPageChange: (
      event: React.MouseEvent<HTMLButtonElement>,
      newPage: number,
    ) => void;
  }

  // const AddBook=()=>{
  //   const [formData,setFormData]=useState<FormDataType>({
  //     sl: '',
  //     booktitle: '',
  //     isbn: 0,
  //     catergory: '',
  //     publishername: '',
  //     authorname:'',
  //     quantity:0,
  //     price:0,
  //     action:'',
  //   })
  
  // }
 
//function for adding books

export default function AddBooklist() {
  const [value, setValue] = useState('personal_info')

  const [formData,setFormData]=useState<FormDataType>({
    sl: '',
    booktitle: '',
    isbn: '',
    catergory: '',
    publishername: '',
    authorname:'',
    quantity:0,
    price:0,
  })

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { name, value } = e.target;
    setFormData(formData);
    console.log(formData);
  };

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
  //  const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (inputValue.trim() !== '') {
  //     // Update table data with new input value
  //     setTableData(e.tableData);
  //     setFormData(e.target.value);
  //   }
  // };
    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
      page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
  
    const handleChangePage = (
      event: React.MouseEvent<HTMLButtonElement> | null,
      newPage: number,
    ) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };

  return (
    <>
  <h2>Add Books</h2>

      <Card>
      <TabContext value={value}>
        <TabList variant='scrollable' className='border-be'>
          <Tab label='Add Book' value='add_book' />
        </TabList>
        <form onSubmit={(e)=>handleSubmit(e)}>
          <CardContent>
            <TabPanel value='personal_info'>
              <Grid container spacing={6}>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='SL'
                    placeholder='SL'
                    className='sl'
                    // value={formData.sl}
                    // onChange={handleSubmit}
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Book Title'
                    placeholder='Enter title'
                    className='booktitle'
                    // value={formData.booktitle}
                    // onChange={handleSubmit}
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='ISBN'
                    type='number'
                    placeholder='123-456-7890'
                    className='isbn'
                    // value={formData.isbn}
                    // onChange={handleSubmit}
                   
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Author'
                    type='string'
                    placeholder='Enter address 1'
                    className='catergory'
                    // value={formData.catergory}
                    // onChange={handleSubmit}
                    
                    
                  />
                </Grid> <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Publisher'
                    type='string'
                    placeholder='Enter publisher'
                    className='publishername'
                    // value={formData.publishername}
                    // onChange={handleSubmit}
                    
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Author'
                    type='string'
                    placeholder='Enter author name'
                    className='authorname'
                    // value={formData.authorname}
                    // onChange={handleSubmit}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Quantity'
                    type='number'
                    placeholder='Enter quantity'
                    className='quantity'
                    // value={formData.quantity}
                    // onChange={handleSubmit}
                   
                    
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <CustomTextField
                    fullWidth
                    label='Price'
                    type='number'
                    placeholder='Enter price'
                    className='price'
                    // value={formData.price}
                    // onChange={handleSubmit}
                   
                  
                  />
                </Grid>

              </Grid>
            </TabPanel>
            
            
          </CardContent>
          <Divider />
          <CardActions>
            <Button type='submit' variant='contained' sx={{ marginLeft: 'auto' }}>
              Submit
            </Button>
          </CardActions>
        </form>
      </TabContext>
    </Card>
</>
);
}
