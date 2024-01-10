import { Box, InputBase  } from '@mui/material'
import React, { useEffect , useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { getAllData } from '../service';
import { NavLink } from 'react-router-dom';


const Search = () => {
  const [text , setText] = useState('')
  const [allData , setAllData] = useState([])
  useEffect(() => {
    const getData = async () => {
      const data = await getAllData()
      setAllData(data.data)

    }
    getData()
  })

  return (
    <Box className='search-input'>
        <Box className='d-flex  align-items-center p-2' style={{width:515 , marginLeft:200 , border:'1px solid grey' ,borderRadius:20 , position:'relative'}}  height={38}>
            <InputBase type='search' placeholder='Search' onChange={(e) => setText(e.target.value)}  style={{width:505 , color:'black' , marginLeft:10}} />
            <SearchIcon style={{marginLeft:10 , cursor:'pointer'}} />
            <ul style={{position:'absolute' , top:40 , background:'white'}}>
              {
                text && allData.filter(item => item.title.toLowerCase().includes(text.toLowerCase())).map(item => {
                  return <div>
                    <NavLink to={`/video/${item.id}`} onClick={() => setText('')} style={{listStyle:'none' , textDecoration:'none' , color:'black'}} >{item.title}</NavLink>
               
                  </div>
                
                })
              }
            </ul>
        </Box>
        
    </Box>
  )
}

export default Search
