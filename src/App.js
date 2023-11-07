import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import React, { useState, useEffect } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('dark:bg-gray-200')
  const togglemode = () => {
    if (mode == 'dark:bg-gray-200') {
      setMode('dark:bg-gray-900')
      document.body.style.backgroundColor = 'black'
    }
    else {
      setMode('dark:bg-gray-200')
      document.body.style.backgroundColor = 'white'
    }
  }
  const [count, setCount] = useState(0);
  // useEffect(() => { 

  //       //Implementing the setInterval method 
  //       const interval = setInterval(() => { 
  //           if(count<5)
  //             setCount(count + 1);
  //           else
  //             setCount(0);
  //       }, 1000); 

  //       //Clearing the interval 
  //       return () => clearInterval(interval); 
  //   }, [count]);
  return (
    // <Router>
      <div className="App">
        <Navbar mode={mode} togglemode={togglemode} />
        {/* <Routes> */}
          {/* <Route path='/'> */}
            <Form text="enter text here" mode={mode} />
          {/* </Route> */}
          {/* <Route path='/about'> */}
            {/* <About /> */}
          {/* </Route> */}
          {/* <Route path="/" element={<Form text="enter text here" mode={mode} />} /> */}
          {/* <Route path="/about" element={<About />} /> */}
        {/* </Routes> */}
      </div>
    // </Router>
  );
}

export default App;
