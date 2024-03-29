
import {AppBar , Box, IconButton, Toolbar} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Search from './Search'
import MicIcon from '@mui/icons-material/Mic';
import Youtbe_Logo from '../assets/youtube_logo.svg'
import { Link } from 'react-router-dom';
const micStyle = {
  
}
const Header = ({setOpen , open}) => {
    
  return (
    <Box>
      <AppBar style={{background:'white'}}>
        <Toolbar style={{width:'100%'}}>
            <IconButton 
            color='black'
            >
                <MenuIcon onClick = {() => setOpen(open ? false : true)}/>
            </IconButton>
            <Box component={Link} to={'/'} className='d-flex align-items-center ms-3'>
                <img src={Youtbe_Logo} width={100} style={{}} alt="" /> <sup className='ms-1 ' style={{color:'black' , fontWeight:'bold' , listStyle:'none'}}>IN</sup>
            </Box>
            <Search />
           
            <Box className='d-flex justify-content-center mic align-items-center'  style={micStyle}>
                <MicIcon/>
            </Box>
            <Box className='ms-auto'>
                <VideoCallOutlinedIcon style={{background:'#000' , marginRight:10 , borderRadius:'50%'  , cursor:'pointer'}}/>
                <NotificationsActiveIcon  style={{background:'#000' , marginRight:10 , borderRadius:'50%' , cursor:'pointer'}}/>
                <AccountCircleIcon style={{background:'#000' , marginRight:10 , borderRadius:'50%' , cursor:'pointer'}}/>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
