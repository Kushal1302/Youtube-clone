import Header from "./Components/Header";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Slider from "./Components/Slider.jsx";
import { useState } from "react";
import './index.css'
import { Box } from "@mui/material";
// import Banner from "./Components/Banner.jsx";
// import Videos from "./Components/Videos.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";
import FullScreenVideo from "./Components/Video/FullScreenVideo.jsx";



function App() {
  const [open , setOpen] = useState(false)
  return (
      <>
      <Box style = {{background:'white' , minHeight:'100vh'}}>
          <Header setOpen =  {setOpen} open = {open}/>
          <Slider open = {open} setOpen={setOpen}/>
          <Routes>
            <Route path ="/video/:id" Component={FullScreenVideo} />
            <Route path="/" Component={Home}/>
            <Route path="*" element= {<h1>Hello</h1>}/>
          </Routes>
      </Box>

      </>
  );
}

export default App;
