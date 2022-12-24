 import React,{ useState,useEffect, Component,render} from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import MailIcon from '@mui/icons-material/Mail';
import WorkIcon from '@mui/icons-material/Work';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { renderMatches, useParams, useSearchParams ,NavLink,useLocation }  from 'react-router-dom';

import axios from 'axios';

const Details = () => {
    var UserData;
    const[getUserData,setUserData]=useState({
      name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    desc: ""
});
    const Data=([]);
   // const res;
      const{id} = useParams("");
    console.log(id);

     /*    const { pathname, search, hash, state } = location;*/
     const getUser = async(e)=>{ 
  // console.log(state.id);
    const res = axios.get(`http://127.0.0.1:8003/router/getuser/${id}`)
    .then(function (res) {
      const Data= res.data[0];
    console.log(Data);
   //   setUserData({...getUserData, name:Data.name});
     setUserData(Data);
    // console.log(getUserData.name);
    //  console.log(getUserData.name);
      
    //  data[0] = res.data;  
     ///console.log(getUserData);
    })
    .catch(function (error) {
      console.log(error);
    }); 
  //  console.log(Data[0].name);  
}
//static id= useParams("");
//console.log(data[0].name);
useEffect(()=>
{
     //console.log("get data");
      getUser();
     // console.log(getUserData.name);
},[]) 
//console.log(data[0].name);
    return (  
            <div className="container mt-3">
            <h1 style={{ fontWeight: 400 }}> Welcome {getUserData.name}</h1>
            <Card sx={{ maxWidth: 675 }}>
                <CardContent >
                    <div className='add_btn'>
                        <button className="btn btn-primary mx-2"><EditIcon /></button>
                        <button className="btn btn-danger"><DeleteOutlineIcon /></button>
                    </div>
                    <div className="row">
                        <div className="left_view col-lg-6 col-md-6 col-12">
                            <img src="/profile.png" style={{ width: 50 }} alt="profile" />
                            <h3 className="mt-3">Name:<span>{getUserData.name}</span></h3>
                            <h3 className="mt-3">Age: <span>{getUserData.age}</span></h3>
                            <p className="mt-3"><MailIcon />Email:<span>{getUserData.email}</span></p>
                            <p className="mt-3"><WorkIcon />Occupation :<span>{getUserData.work}</span></p>
                        </div>
                        <div className="right_view col-lg-6 col-md-6 col-12">
                            <p className='mt-5'><MobileFriendlyIcon />mobile: <span>{getUserData.mobile}</span></p>
                            <p className='mt-3'><LocationOnIcon />Location: <span>{getUserData.add}</span></p>
                            <p className='mt-3'>Description: <span>{getUserData.desc}</span></p>

                        </div>
                    </div>

                </CardContent>
            </Card>
        </div>
    )
    
}
export default Details