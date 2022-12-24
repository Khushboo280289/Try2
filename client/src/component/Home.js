import React, { useState,useEffect, Component} from 'react';
import { render } from "react-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import axios from 'axios';


const Home = () => {
    console.log("In Home");
    
   // const Sirname="Khushboo";
  // const [getUserdata, setUserdata] = useState({
    var setUserdata={
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    desc: ""
  }; 
  console.log("get data00 error00");
        const getdata = async(e)=>{ 
           
        console.log("get data00 error01");
        //  const res = axios.get('http://127.0.0.1:8003/router/getdata',{responseType: "json" }) 
      const response  =  axios.get('http://127.0.0.1:8003/router/getdata') 
        .then(( response)=>{ 
            //        
            console.log(response.data);  
            var Values =response.data;
            this.setUserdata = ({
                name: Values.name,
                age: Values.age,
                email:  Values.email
              });            
            
            //this.Data ({ getres });
            //console.log(getres.data.age); 
                        //console.log(this.getuserdata[0].Name);           
            }) 
        .catch(function (error) {
            console.log("get data02 error");
            console.log(error);
            });
        }
       
       /*  const res= await fetch("http://127.0.0.1:8003/router/getdata",{
            method:"GET",
            headers:{
                "content-Type":"application/json"
            }
        });
       
        console.log(data);
        if(res.status == 404 || !data)
        console.log("error");
        
        else{
        setUserdata(data);
        console.log("get data");
        console.log(getuserdata.name);
        } */
   // }
           
          useEffect(()=>
        {
            //console.log("get data");
                getdata();
                //console.log(this.getuserdata.Name);  
        },[]) 
       // const data =''; 
      //  return ( */
     
           // data.map(response.data);
           return (     
          

          <div className='mt-5'>
           <div className="container">
                <div className="add_btn mt -2 mb-2">
                    <NavLink to="/register" className="btn btn-primary">Add data</NavLink>
                </div>
                <table class="table">
                    
                        <tr className="table-dark">
                            <th scope="col">Id</th>
                            <th scope="col">Username</th>
                            <th scope="col">Email</th>
                            <th scope="col">job</th>
                            <th scope="col">Number</th>
                        </tr>       


                 <tbody>
                   
                   <tr>
                            <th scope="row">1</th>
                            <td>Khushbo</td>
                            <td>meet@gmail.com</td>
                            <td>@webdeveloper</td>
                            <td>@19191919191</td>
                            <td className ="d-flex justify-content-between">
                                <button className ="btn btn-success"><VisibilityIcon/></button>
                                <button className ="btn btn-primary"><EditIcon/></button>
                                <button className ="btn btn-danger"><DeleteOutlineIcon/></button>  
                                
                         </td>
                        </tr> 
                 </tbody> 
                </table>


            </div>
        </div>
        // )
     )
}

export default Home