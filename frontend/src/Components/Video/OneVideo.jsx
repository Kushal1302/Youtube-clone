import React from 'react'

import { Box, Typography } from '@mui/material'
import Youtube from '../../assets/youtube.png'
import { Link } from 'react-router-dom'

const OneVideo = ({id , title , imageUrl , views , daysOld , channelName}) => {
  return (
    <Box component={Link} to={`/video/${id}`} className="col-lg-4 col-12 col-md-6 card p-1 " style={{background:'white' }}>
            <img src={imageUrl} alt="" />
            <Typography color={'black'} className='p-2' style={{lineHeight:1.2}}>
                <img src={Youtube} width={40} alt="" className='me-2' />
                {
                    title
                }
                <Box style={{color:'grey' , marginLeft:48}}>
                    {
                        channelName
                    }
                </Box>
                <Box style={{color:'grey' , marginLeft:48}}>
                    {views} views . {daysOld} Days ago
                </Box>
            </Typography>
    </Box>
  )
}

export default OneVideo
