import React, { StrictMode, useState } from 'react'
import { NavLink } from 'react-router-dom'
import axios from 'axios';
const url = 'http://127.0.0.1:8003/router/register'

//const url = 'http://127.0.0.1:3000/register'
const Register = () => {

  // this one get the value of text box from webpage
  const [inpval, setINP] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    desc: ""
  })

  // to set the value of data that has been set by the user while filling the form
  const setdata = (e) => {
    let data = e.target.value;
    let id = e.target.id;
      
    if (id === 'name') {
      console.log(inpval.name);      
      return setINP({...inpval, name:e.target.value});
        
    }  
   else if (id === 'email') {

      console.log(inpval.name);     
     return setINP({...inpval, email:e.target.value});
        }
      
     // console.log(inpval.email);
    
    else if (id === 'age') {
      console.log(inpval.name);   
      return setINP({...inpval, age:e.target.value});
    }
    else if (id === 'mobile') {
      console.log(inpval.age);   
      return setINP({...inpval, mobile:e.target.value});
    }
    else if (id === 'work') {
      console.log(inpval.mobile);   
      return setINP({...inpval, work:e.target.value});
    }
    else if (id === 'add') {
      console.log(inpval.work);   
      return setINP({...inpval, add:e.target.value});
    }
    else if (id === 'desc') {
      console.log(inpval.add);   
      return setINP({...inpval, desc:e.target.value});
    }
  }
    const addinpdata = async (e) => {
      e.preventDefault();

    
    
      console.log(inpval.name);
      console.log(inpval.email);
      console.log(inpval.age);
      console.log(inpval.mobile);
      console.log(inpval.add);
      console.log(inpval.desc);

      
      const res = axios.post('http://127.0.0.1:8003/router/register', inpval)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      //   let res =  axios.post(url, inpval)
      //  .then(function (res) {
      //     console.log("please fill the in frontend11");
      //       console.log(res);
      //   })
      //   .catch(function (error) {
      //     console.log("please fill the in frontend12");

      //   });

      //console.log("res");
      //const data = await res.json();
      // console.log("please fill the in frontend3");
      console.log(res.data);
      console.log( res.status); 

      if (res.status === 422 || !res.data) {
        console.log("Data is Already Present or is empty110");
        alert("error");
        console.log("Data is Already Present110");
      }
      else {
        alert("data added");
        console.log("data added");
      }
    }
    return (

      <div className="container">
        <nav>
          <NavLink to='/'> Home </NavLink>

          <form className='mt-4'>

            <div className="row">
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputName" class="form-label">Name</label>
                <input type="text" value={inpval.name} onChange={setdata} name="name" class="form-control" id="name" aria-describedby="NameHelp" />

              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputEmail1" class="form-label">email</label>
                <input type="email" value={inpval.email} onChange={setdata} name="email" class="form-control" id="email" aria-describedby="emailHelp" />
              </div>

              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputAge" class="form-label">age</label>
                <input type="number" value={inpval.age} onChange={setdata} name="age" class="form-control" id="age" />
              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputmobile" class="form-label">Mobile</label>
                <input type="number" value={inpval.mobile} onChange={setdata} name="mobile" class="form-control" id="mobile" />
              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputwork" class="form-label">work</label>
                <input type="text" value={inpval.work} onChange={setdata} name="work" class="form-control" id="work" />
              </div>
              <div class="mb-3 col-lg-6 col-md-6 col-12">
                <label for="exampleInputAddress" class="form-label">Address</label>
                <input type="text" value={inpval.add} onChange={setdata} name="add" class="form-control" id="add" />
              </div>


              <div class="mb-3 col-lg-12 col-md-12 col-12">
                <label for="exampleInputexampleInputDescription" class="form-label">Description</label>
                <textarea type="text" value={inpval.desc} onChange={setdata} name="desc" class="form-control" id="desc" cols="30" rows="5" ></textarea>
              </div>

              <button type="submit" onClick={addinpdata} class="btn btn-primary">Submit</button>
            </div>
          </form>
        </nav>

      </div>
    )
  }


  export default Register