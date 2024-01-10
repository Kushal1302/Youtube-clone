import { Box, Typography } from '@mui/material'
import React from 'react'
import Youtube_Logo from '../assets/youtube_logo.svg'

const Banner = () => {
  return (
    <Box>
      <div className="container-fluid">
        <div className="row">
                <div className="col-lg-12 col-12" >
                    <Box className='banner' style={{background:'url(https://www.gstatic.com/youtube/img/promos/growth/3e5a02221ef0984521f64b2c3c664064a5067aecc3ec8de1c89319ae47193d91_2560x520.jpeg) center no-repeat' , height:'360px' , width:'100%',position:'relative' , marginTop:62 , padding:20}}>
                        <Typography className='fw-bold d-flex flex-column ' style={{ position:'absolute', top:'100px' , width:300 , fontSize:20}}>
                                <img src={Youtube_Logo} alt=""  width={100} className='me-1 mb-2'/>
                                 Get more from your favourite creators by purchasing a channel membership
                                 
                        </Typography>
                        
                    </Box>
                </div>
        </div>
      </div>
    </Box>
  )
}

export default Banner
