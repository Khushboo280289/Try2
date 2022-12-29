import React, { useState, useEffect, Component, useContext } from 'react';
import { render } from "react-dom";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import { adddata, updateddata, deleteddata } from './context/ContextProvider';


const Home = () => {

    const { udata, setUdata } = useContext(adddata);
    const { updata, setUPdata } = useContext(updateddata);
    const { deldata, setDLTdata } = useContext(deleteddata);

    console.log("In Home");

    // const Sirname="Khushboo";
    const [getUserData, setUserData] = useState([]);
    //  console.log("get data00 error00");
    const getdata = async (e) => {

        console.log("get data00 error01");
        //  const res = axios.get('http://127.0.0.1:8003/router/getdata',{responseType: "json" }) 
      //  const response = axios.get('http://127.0.0.1:8003/router/getdata')
      const response = axios.get('http://127.0.0.1:8003/router/getdata')
            .then((response) => {
                //        
                const Data = response.data;
                console.log(Data);
                //   setUserData({...getUserData, name:Data.name});
                setUserData(Data);

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

    useEffect(() => {
        //console.log("get data");
        getdata();
        //console.log(this.getuserdata.Name);  
    }, [])

    const DeleteUser = async (id) => {

        console.log("get data00 error01");

        var res2 = axios.delete(`http://127.0.0.1:8003/router/deleteuser/${id}`)
            .then(res2 => {
                console.log(res2.data);
                //  this.setState({ persons: res2.data });
                console.log("get data00 error01");
                setDLTdata(res2);
                getdata();

            })
            .catch(function (error) {
                console.log("get data02 error");
                console.log(error);
            });

    }
    return (
        <>
            {
                udata ?
                    <> <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>{udata.name}</strong> User Added!!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    </> : ""
            }

            {
                updata ?
                    <> <div class="alert alert-success alert-dismissible fade show" role="alert">
                        <strong>{updata.name}</strong> User Updated successfully!!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    </> : ""
            }

            {
                deldata ?
                    <> <div class="alert alert-danger alert-dismissible fade show" role="alert">
                        <strong>{deldata.name}</strong> User Deleted successfully!!
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                    </> : ""
            }

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
                            {
                                getUserData.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{id + 1}</th>
                                                <td> {element.name}</td>
                                                <td>{element.email} </td>
                                                <td> {element.work}</td>
                                                <td> {element.mobile}</td>
                                                <td className="d-flex justify-content-between">
                                                    {/* <NavLink to={`view/id=${person._id}`}> <button className ="btn btn-success"><VisibilityIcon/></button></NavLink>*/}
                                                    <NavLink to={{
                                                        pathname: `view/${element._id}`,
                                                        state: {
                                                            id: `${element._id}`
                                                        }
                                                    }}> <button className="btn btn-success"><VisibilityIcon /></button></NavLink>
                                                    <NavLink to={{
                                                        pathname: `edit/${element._id}`,
                                                        state: {
                                                            id: `${element._id}`
                                                        }
                                                    }}><button className="btn btn-primary"><EditIcon /></button></NavLink>
                                                    <button className="btn btn-danger" onClick={() => { DeleteUser(element._id) }} ><DeleteOutlineIcon /></button>
                                                </td>
                                            </tr></>
                                    )
                                }
                                )
                            }

                        </tbody>
                    </table>


                </div>
            </div>
        </>
        // )
    )
}

export default Home