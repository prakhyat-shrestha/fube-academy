'use client'
import React, { useRef, useState } from 'react'

import {
  TextField,
  Typography,
  InputAdornment,
  Badge,
  CardActions,
  MenuItem,
  Menu,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import { Icon } from '@iconify/react/dist/iconify.js'
import CircleIcon from '@mui/icons-material/Circle'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import SearchSharpIcon from '@mui/icons-material/SearchSharp'

import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import AddIcon from '@mui/icons-material/Add'

const ChatBoxLayout = ({ label, isOnline }) => {
  const textFieldRef = useRef<HTMLInputElement>(null)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [anchorEl2, setAnchorEl2] = useState<null | HTMLElement>(null)

  const handleFocus = () => {
    if (textFieldRef.current) {
      textFieldRef.current.placeholder = ''
    }
  }

  const handleBlur = () => {
    if (textFieldRef.current && textFieldRef.current.value === '') {
      textFieldRef.current.placeholder = 'SEARCH'
    }
  }

  //for 1st upper button
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  //For 2nd upper button
  const handleClick2 = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl2(event.currentTarget)
  }

  const handleClose2 = () => {
    setAnchorEl2(null)
  }

  //Dummmy Name List

  const names = [
    'Aadish Bomjan',
    'Aaditya Thakur',
    'Manoj Thakur',
    'Aakankshya Tamang',
    'Dawa Tamang',
    'Aarav Waiba Tamang',
    'Aarush Nepali'
  ]

  return (
    <>
      <div className='flex'>
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
          <div>
            <Button
              endIcon={<ArrowDownwardIcon sx={{ color: 'black' }} />}
              variant='contained'
              onClick={handleClick}
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'purple'
                },
                '&:active': {
                  backgroundColor: 'purple'
                }
              }}
            >
              <Typography sx={{ marginRight: '8px' }} color='black'>
                Some Random User
              </Typography>
              <Badge
                sx={{ ml: 1 }}
                overlap='circular'
                badgeContent={
                  <CircleIcon
                    style={{ color: '#00ff00' }}
                    sx={{
                      fontSize: 10,
                      color: isOnline ? 'green' : 'gray'
                    }}
                  />
                }
              />
            </Button>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
            >
              <MenuItem onClick={handleClose} value='search'>
                SEARCH
              </MenuItem>
              <MenuItem onClick={handleClose} value='files'>
                FILES
              </MenuItem>
            </Menu>
          </div>
          <div style={{ marginLeft: '450px' }}>
            <Button
              endIcon={<ArrowDownwardIcon sx={{ color: 'black' }} />}
              variant='contained'
              onClick={handleClick2}
              sx={{
                display: 'flex',
                alignItems: 'center',
                backgroundColor: 'transparent',
                '&:hover': {
                  backgroundColor: 'purple'
                },
                '&:active': {
                  backgroundColor: 'purple'
                }
              }}
            >
              <Typography sx={{ marginRight: '8px' }} color='black'>
                Admin
              </Typography>
              <Badge
                sx={{ ml: 1 }}
                overlap='circular'
                badgeContent={
                  <CircleIcon
                    style={{ color: '#00ff00' }}
                    sx={{
                      fontSize: 10,
                      color: isOnline ? 'green' : 'gray'
                    }}
                  />
                }
              />
            </Button>
            <Menu
              anchorEl={anchorEl2}
              open={Boolean(anchorEl2)}
              onClose={handleClose2}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left'
              }}
            >
              <MenuItem onClick={handleClose2} value='active'>
                Active
              </MenuItem>
              <MenuItem onClick={handleClose2} value='inactive'>
                Inactive
              </MenuItem>
              <MenuItem onClick={handleClose2} value='away'>
                Away
              </MenuItem>
              <MenuItem onClick={handleClose2} value='busy'>
                Busy
              </MenuItem>
            </Menu>
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', marginTop: '-2.5%' }}>
        {/* Chat Box List Group card */}
        <div className='chatListGroup' style={{ display: 'grid', justifyContent: 'space-between' }}>
          <Card sx={{ width: 550, height: 500 }}>
            <CardContent>
              <div>
                <Typography variant='h5' component='h3'>
                  Chat List
                </Typography>
                <div style={{ marginLeft: '71%', marginTop: '-5%' }}>
                  <Button variant='contained'>
                    <AddIcon style={{ marginRight: 2 }} />
                    NEW CHAT
                  </Button>
                </div>
              </div>

              <Typography variant='body2' component='div'>
                <div style={{ marginTop: '10px' }}>
                  <TextField
                    id='standard-search'
                    variant='standard'
                    placeholder='Search People or Group'
                    inputRef={textFieldRef}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <SearchSharpIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
              </Typography>
              {/* //Left side Chat List */}
              <List>
                {names.map((name, index) => (
                  <ListItem key={index}>
                    <ListItemIcon>
                      <AddIcon /> {/* Replace with the actual icon you want to use */}
                    </ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItem>
                ))}
              </List>
            </CardContent>
            <CardActions style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div>
                <Typography>Group</Typography>
              </div>
              <div style={{ marginLeft: '50%', marginTop: '-5%' }}>
                <Button variant='contained'>
                  <AddIcon style={{ marginRight: 2 }} />
                  ADD GROUP
                </Button>
              </div>
            </CardActions>
          </Card>
        </div>

        {/* ChatlistTextEditor 2nd card */}
        <div className='ChatListTextEditor mt-20 mx-6' style={{ flex: 1 }}>
          <Card sx={{ width: '102%', height: 270 }}>
            <CardContent>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant='h6' component='h3' style={{ flex: 1, marginRight: '12%' }}>
                  Text-Editor Here
                </Typography>
                <div style={{ flexGrow: 1 }}>
                  <TextField
                    id='standard-search'
                    variant='standard'
                    placeholder='SEARCH'
                    inputRef={textFieldRef}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position='start'>
                          <SearchSharpIcon />
                        </InputAdornment>
                      )
                    }}
                  />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                  <ButtonGroup
                    variant='outlined'
                    aria-label='Basic button group'
                    sx={{
                      '& .MuiButton-root': {
                        fontSize: '1.2rem',
                        padding: '4px 8px',
                        backgroundColor: 'transparent',
                        borderColor: 'currentColor',
                        color: 'currentColor',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.08)',
                          borderColor: 'currentColor'
                        },
                        boxShadow: 'none'
                      }
                    }}
                  >
                    <Button title='Copy Table'>
                      <Icon icon='material-symbols:file-copy-outline-sharp' />
                    </Button>
                    <Button title='Export to Excel'>
                      <Icon icon='mdi:file-excel-outline' />
                    </Button>
                    <Button title='Export to CSV'>
                      <Icon icon='mdi:file-document-outline' />
                    </Button>
                    <Button title='Export to PDF'>
                      <Icon icon='mdi:file-pdf-outline' />
                    </Button>
                    <Button title='Print'>
                      <Icon icon='fa:print' style={{ fontSize: '1rem' }} />
                    </Button>
                    <Button title='Action'>
                      <Icon
                        icon='mdi:table'
                        style={{
                          fontSize: '1.3rem'
                        }}
                      />
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  )
}

export default ChatBoxLayout
