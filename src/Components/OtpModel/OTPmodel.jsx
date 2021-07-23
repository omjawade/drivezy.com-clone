
import React, { useEffect, useState } from 'react';
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import styles from "./OTPmodel.module.css";
import CloseIcon from '@material-ui/icons/Close';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { authLoginPhone, authVerifyPhone } from '../../Redux/AuthReducer/AuthAction';
import { Pin } from '../OTPInput/Pin';
const OTPmodel = ({ openOTP, handleCloseOTP }) => {
const [input,setInput]=useState("")
const [count,setCount]=useState(60)

const loginRes= useSelector((state)=>state.auth.loginRes)
const user=useSelector((state)=>state.auth.user)
let time;
const dispatch= useDispatch()
const handleinput=(value)=>{

     setInput(value)
}

const handleVerify=(e)=>{
dispatch(authVerifyPhone({mobile:loginRes,OTPcode:input}))
}


useEffect(()=>{
    setCount(60)
 time= setInterval(() => {
        openOTP&&setCount((count)=>count>0?count-1:0)
    if(count<=0){
        clearInterval(time)
    }
    }, 1000);
    return ()=>{
        clearInterval(time)
      
    }
},[openOTP])

useEffect(()=>{
handleCloseOTP()
},[user])


    return (

        <Modal
            open={openOTP}
           
            className={styles.login_model}
            disablePortal
            disableEnforceFocus
            disableAutoFocus
        >
            <Paper>
                <div className={styles.title}>
                    <h4>VERIFY OTP</h4>
                    <CloseIcon onClick={handleCloseOTP} className={styles.close_icon} />
                </div>
                  <label htmlFor="">Enter Your OTP</label>
                 <div className={styles.pin}><Pin label={"OTP"} onChange={handleinput} noOfBoxes={4} maxCharPerBox={1}/></div> 
            
                  <p>didn't received OTP? <span style={count==0?{color:"blue"}:{color:"lightgray"}}>resend</span></p>
                <p>Time: 0:{count}s</p>
                <Button onClick={handleVerify} disabled={input.length!==4} >Verify</Button >
        
            </Paper>

        </Modal>


    );
};

export default OTPmodel;