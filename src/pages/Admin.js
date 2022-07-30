import React from 'react'
import {useState} from 'react'
import axios from 'axios'



function Admin() {
    const [data,setData] = useState({
        username: "",
        password: ""
    })
    const [errorMessages, setErrorMessages] = useState({});
    const renderErrorMessage = (name) =>
  name === errorMessages.name && (
    <div className="error">{errorMessages.message}</div>
  );

  const handleSubmit = (event) => {
    // Prevent page reload
    event.preventDefault();
    
    axios.post('http://localhost:5000/admin/validate',
    {
    username: data.username,
    password: data.password
    }
    ).then(res => {
        console.log(res.data)
      })
    
  };
  const handle=(e)=>{

    var newdata={...data}
    newdata[e.target.id]=e.target.value;
    setData(newdata)
    console.log(newdata)
  }
  return (
    
        <div className="form">
          <form onSubmit={handleSubmit} >
            <div className="input-container">
              <label>Username </label>
              <input onChange={(e)=>handle(e)} id="username" value={data.username} type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input onChange={(e)=>handle(e)} id="password" value={data.password} type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
     
  )
}

export default Admin