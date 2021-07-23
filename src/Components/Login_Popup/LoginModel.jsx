
import React, { useState } from 'react';
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import styles from "./LoginModel.module.css";
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { authLoginPhone } from '../../Redux/AuthReducer/AuthAction';
const LoginModel = ({ openLogin, handleCloseLogin }) => {
const [input,setInput]=useState("")
const dispatch= useDispatch()
const handleinput=(e)=>{

     setInput(e.target.value)
}

const handleVerify=(e)=>{
dispatch(authLoginPhone({mobile:input}))
}
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
                  <label htmlFor="">Phone</label>
                <input 
                type="number"
                onChange={(e)=>handleinput(e)}
                
                 value={input}
                 placeholder="Enter your phone number" 
                  />
               {input.length!==10&& <h6>Invalid Phone Number</h6>}
              
                <Button onClick={handleVerify} disabled={input.length!==10} >Process</Button >
                <div className={styles.or_divider}>
                    <div></div>
                    <p>or</p>
                    <div></div>
                </div>
                <img src="googlesigin.png" alt="googlesigin" />
            </Paper>

        </Modal>


    );
};

export default LoginModel;