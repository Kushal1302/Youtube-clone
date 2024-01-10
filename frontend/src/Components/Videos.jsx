import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import OneVideo from './Video/OneVideo'
import { getAllData } from '../service'



const Videos = () => {
  const [allData , setAllData] = useState([])
  useEffect(() => {
    const ApiData = async () => {
      
      const data = await getAllData()
      setAllData(data.data) 
      
      

 }
 ApiData()
  })
  return (
    <Box className = 'container-fluid' width={'100%'}>
      <Box className='row p-2'>
        {allData.map(item => {
           return <OneVideo id = {item.id}  title = {item.title} imageUrl = {item.imageUrl} views = {item.views} daysOld = {item.daysOld} channelName = {item.channelName} />
           
        })}

        
        

      </Box>
    </Box>
  )
}

export default Videos
