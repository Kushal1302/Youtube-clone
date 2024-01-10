
import {AppBar , Box, IconButton, Toolbar} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

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
                <img src={Youtbe_Logo} width={100} style={{}} alt="" /> <sup className='ms-1 ' style={{color:'black' , listStyle:'none' , textDecoration:'none'}}>IN</sup>
            </Box>
            <Search />
           
            <Box className='d-flex justify-content-center mic align-items-center'  style={micStyle}>
                <MicIcon/>
            </Box>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
