import { Box, Drawer } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import { Link } from 'react-router-dom';
const listStyle = {
  
  listStyle:'none',
  padding:'5px',
  marginBottom:2,
  marginLeft:0,
  transition:'0.5s',
  borderRadius:'10px',
  display:'flex',
  alignItems:'center',
  textDecoration:'none',
  color:'#000'
}
const Slider = ({setOpen , open}) => {

  return (
    <Box >
      <Drawer open={open} onClose={setOpen}  anchor='left' PaperProps={{
        sx:{
            background:'white',
            marginTop:'62px'
        }

      }}
      variant='persistent' >
        <Box width={200} style={{marginTop:10}}>
            <Box>
              <ul className=''>
                <Link to={'/'} className='list' style={listStyle}><HomeIcon/> Home</Link>
                <li className='list' style={listStyle}><SlideshowIcon/> Shorts</li>
                <li className='list' style={listStyle}><SubscriptionsIcon/>Subscriptions</li>
              </ul>
            </Box>
              
              <hr style={{height:10}} />
          
            <Box>
              <ul>
                <li className='list'  style={listStyle}>Your Channel</li>
                <li className='list' style={listStyle}>History</li>
                <li className='list' style={listStyle}>Your Videos</li>
                <li className='list' style={listStyle}>Watch Later</li>
                <li className='list' style={listStyle}>Your Clips</li>
              </ul>
            </Box>
            <hr />
            <Box>
              <ul>
                <li className='list'  style={listStyle}>Your Channel</li>
                <li className='list' style={listStyle}>History</li>
                <li className='list' style={listStyle}>Your Videos</li>
                <li className='list' style={listStyle}>Watch Later</li>
                <li className='list' style={listStyle}>Your Clips</li>
              </ul>
            </Box>
            <hr />
            <Box>
              <ul>
                <li className='list'  style={listStyle}>Your Channel</li>
                <li className='list' style={listStyle}>History</li>
                <li className='list' style={listStyle}>Your Videos</li>
                <li className='list' style={listStyle}>Watch Later</li>
                <li className='list' style={listStyle}>Your Clips</li>
              </ul>
            </Box>
            <hr />
            <Box>
              <ul>
                <li className='list'  style={listStyle}>Your Channel</li>
                <li className='list' style={listStyle}>History</li>
                <li className='list' style={listStyle}>Your Videos</li>
                <li className='list' style={listStyle}>Watch Later</li>
                <li className='list' style={listStyle}>Your Clips</li>
              </ul>
            </Box>
        </Box>
      </Drawer>
    </Box>
  )
}

export default Slider
