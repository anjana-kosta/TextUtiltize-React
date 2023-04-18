import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

import {BrowserRouter as Router, Routes, Route} from "react-router-dom"


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode is enable or not
  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) =>{
   setAlert({
    msg: message,
    type:type
   })
   setTimeout(() => {
    setAlert(null);
   }, 2000);
}

  const toggleMode = ()=>{
    if(mode === 'light'){ 
      setMode('dark');
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has ben enable", "success");
      document.title = 'React make- Dark mode';
      // setInterval(() => {
      //   document.title = 'React make is good Application by Anjana';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'React make is react application';
      // }, 1500);
    }
    else{  
      setMode('light');
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has ben enable", "success");
      document.title = 'React make- light mode';
    }
  }
  
  return (
    <>
    <Router>
    <Navbar title="ReactJs" aboutText="About Us" mode = {mode} toggleMode={toggleMode} />
    <Alert alert= {alert} />
    <div className='container my-3'>
      <Routes>
          <Route exact path="/about" element={<About />}>  
          {/* /user ==> copmonenet\
          users/home ==> component 2
           */}
          {/* React is a partial matching so used the exact keyword used   */}
          </Route>
          <Route exact path="/" element= {<TextForm showAlert={showAlert} heading="Enter the text to analyis below" mode = {mode}/>}>
             {/* <TextForm showAlert={showAlert} heading="Enter the text to analyis below" mode = {mode}/> */}
          </Route> 
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
