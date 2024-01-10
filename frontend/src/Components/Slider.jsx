import { Box, Drawer } from '@mui/material'
import React from 'react'

const Slider = ({setOpen , open}) => {
  return (
    <Box>
      <Drawer open={open} onClose={setOpen}  anchor='left' PaperProps={{
        sx:{
            background:'white',
            marginTop:'62px'
        }

      }}
      variant='persistent' >
        <Box width={200} style={{marginTop:10}}>

        </Box>
      </Drawer>
    </Box>
  )
}

export default Slider
