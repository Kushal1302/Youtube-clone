import React from 'react'
import { Box } from '@mui/material'
import Banner from './Banner'
import Videos from './Videos'
const Home = () => {
  return (
   <>
    <Box >
            <Banner/>
    </Box>
    <Box>
            <Videos/>
    </Box>
   </>
    )
}

export default Home
