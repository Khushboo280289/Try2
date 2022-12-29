
import logo from './logo.svg';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
import Navbaar from './component/Navbaar';
import Home from './component/Home';
import Register from './component/register';
import Edit from './component/Edit';
import Details from './component/Details';
//import PersonList  from './component/PersonList';
//import Home2 from './component/Home2';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Component } from 'react';
//import {Switch,Route} from "react-router-dom"

//import { Switch } from '@mui/material';
//import { Switch } from '@mui/material';

/* function App() {
  return (
    <>
      <Navbaar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Details" element={<Details />} />
        <Route exact path="/Edit" element={<Edit />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>

    </>
  );
} 

export default App;*/

class App extends Component{
  render()
  {
    return(
      <div className='App'>
     <Navbaar />
           
       <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/view/:id" element={<Details />} />
        <Route exact path="/edit/:id" element={<Edit />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
      </div>
    )
  }
}
export default App;
