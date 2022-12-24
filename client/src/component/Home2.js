import React, { useState,useEffect, Component} from 'react';
import { render } from "react-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

export default class Home2 extends React.Component{
    
    state={
        persons:[],
    };


    componentDidMount(){
        axios.get('http://127.0.0.1:8003/router/getdata')
        .then( res=>{
            console.log(res.data);
        this.setState({persons: res.data});
    })
    .catch(function (error) {
        console.log("get data02 error");
        console.log(error);
        });
}
render(){

return (     
          

    <div className='mt-5'>
     <div className="container">
          <div className="add_btn mt -2 mb-2">
              <NavLink to="/register" className="btn btn-primary">Add data</NavLink>
          </div>
          <table class="table">              
          <thead>
                         
            
                            <tr className="table-dark">
                            
                            <th scope="col">Id</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">job</th>
                            <th scope="col">Number</th>
                        </tr>
                      
                    </thead>
          <tbody>                                              
                      {this.state.persons.map(person=> <tr><td scope="row">{person._id}</td>  
                                                            <td> {person.name}</td> 
                                                            <td>{person.age} </td>
                                                             <td> {person.work}</td>
                                                             <td> {person.mobile}</td>
                                                             <td className ="d-flex justify-content-between">
                                              {/* <NavLink to={`view/id=${person._id}`}> <button className ="btn btn-success"><VisibilityIcon/></button></NavLink>*/}
                                              <NavLink to={{
                                                pathname:`view/${person._id}`,
                                                state:{
                                                    id:`${person._id}`}}}> <button className ="btn btn-success"><VisibilityIcon/></button></NavLink>
                                                <NavLink to={{
                                                pathname:`edit/${person._id}`,
                                                state:{
                                                    id:`${person._id}`}}}><button className ="btn btn-primary"><EditIcon/></button></NavLink>
                                               <button className ="btn btn-danger"><DeleteOutlineIcon/></button>  
                                               </td></tr>)}
           </tbody> 
          </table>


      </div>
  </div>
  // )
)
}
}