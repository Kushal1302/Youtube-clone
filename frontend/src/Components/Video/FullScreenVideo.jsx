import { Box, Typography  } from '@mui/material'

import {  Link, useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'
import  {getData, getAllData } from '../../service'
import verified from '../../assets/verified.png'


const FullScreenVideo = () => {
    const { id } = useParams()
    const [videoData , setVideoData] = useState({})
    const [Subscribe , setSubScribe] = useState(
       {
        
        Subscribe:"Subscribe",
        bgcolor:"red",
        fontColor:"white"
       }

    )
    const [allData , setAllData] = useState([])
    useEffect(()=> {
       const ApiData = async () => {
            const res = await getData(id)
            setVideoData(res.data)
            const data = await getAllData()
            setAllData(data.data) 
            
            

       }
       ApiData()
    },[id])
  return (
    <>
        <Box className="container ">
            <div className="row">
                <div className="col-lg-8 col-12">
                    <div className="card border-0" style={{marginTop:100 , background:'white' }}>
                       {
                        videoData &&  <img src={videoData.imageUrl} style={{ borderRadius:15}} alt="" />
                        
                       }
                       <div>
                        <Typography className='fw-bold' style={{color:'black' , marginTop:5 , fontSize:20}}>
                                {videoData.title}
                            </Typography>
                       </div>
                       <div>
                        <Typography style={{color:'black'}}>
                            {videoData.channelName} <img width={17} src={verified} alt="" />
                            <button onClick={() => setSubScribe(Subscribe.Subscribe === "Subscribe" ? {Subscribe : "Subscribed" , bgcolor:"" ,  fontColor:""} : {Subscribe : "Subscribe" , bgcolor:"red" , fontColor:"white"})} style={{backgroundColor:Subscribe.bgcolor , color: Subscribe.fontColor ,  borderRadius:20 , padding:'5px 10px' , marginLeft:10 , border:'none' , }}>{Subscribe.Subscribe}</button>
                        </Typography>
                       </div>
                    </div>
                </div>
                <div className="col-lg-4 for-scroll " style={{maxHeight:'80vh' , overflowY:'auto' , marginTop:100}}>
                    
                       {
                        allData && allData.map(item => {
                            return <Box component={Link} to={`/video/${item.id}`}  className="card p-2 mb-2" style={{background:'white'}}>
                            <img src={item.imageUrl} key={item.id} alt='' />
                            <div>
                               <Typography className='fw-bold' style={{color:'black' , marginTop:5 , fontSize:20}}>
                                   {item.title}
                               </Typography>
                            </div>
                           <div>
                               <Typography style={{color:'black'}}>
                                   {item.channelName} <img width={17} src={verified} alt="" />
                               </Typography>
                           </div>
                            </Box>
                        })
                       }
                    

                </div>
            </div>
        </Box>
    </>
  )
}

export default FullScreenVideo
