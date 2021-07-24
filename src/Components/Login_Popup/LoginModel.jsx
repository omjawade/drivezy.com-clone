
import React, { useEffect, useState } from 'react';
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import styles from "./LoginModel.module.css";
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { authgooglelogin, authLoginPhone, savename } from '../../Redux/AuthReducer/AuthAction';
import { useHistory } from 'react-router-dom';
const LoginModel = ({ openLogin, handleResponse,handleCloseLogin }) => {
const [input,setInput]=useState("")
const [name,setName]=useState("")
const dispatch= useDispatch()
const authLoading =useSelector((state)=> state.authLoading)
const handleinput=(e)=>{

     setInput(e.target.value)
}

const handleVerify=(e)=>{
 
    dispatch(savename({name:name}))
dispatch(authLoginPhone({mobile:input}))
}

const history=useHistory()

const handlegoogleauth=()=>{
 history.push("http://localhost:8080/auth/google")
}

useEffect(()=>{
handleResponse()
},[authLoading])

    return (

        <Modal
            open={openLogin}
           
            className={styles.login_model}
            disablePortal
            disableEnforceFocus
            disableAutoFocus
        >
            <Paper>
                <div className={styles.title}>
                    <h4>Login/SignUp</h4>
                    <CloseIcon onClick={handleCloseLogin} className={styles.close_icon} />
                </div>
                <p>Welcome to Drivezy!</p>
                <label htmlFor="">Full Name</label>
                <input 
                type="text"
                onChange={(e)=>setName(e.target.value)}
                
                 value={name}
                 placeholder="Joe West" 
                  />
                   {name.length<5 && name.length!==0&& <h6>Enter Full Name</h6>}
                  <label htmlFor="">Phone</label>
                <input 
                type="number"
                onChange={(e)=>handleinput(e)}
                
                 value={input}
                 placeholder="Enter your phone number" 
                  />
               {input.length<10&& input.length!==0 &&<h6>Invalid Phone Number</h6>}
              
                <Button onClick={handleVerify} disabled={input.length!==10 ||  name.length<5} >Process</Button >
                <div className={styles.or_divider}>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>
                <img onClick={handlegoogleauth} src="googlesigin.png" alt="googlesigin" />
            </Paper>

        </Modal>


    );
};

export default LoginModel;