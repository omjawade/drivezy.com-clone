import React from "react";
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import styles from "./ProfileCard.module.css"
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { useState } from "react";
import { useSelector } from "react-redux";
import { grey } from "@material-ui/core/colors";

const useStyle= makeStyles({
    avatar:{
        fontSize:"100px",
        color: "gray",
    }
})

function ProfileCard() {
    const style= useStyle()
    const user=useSelector((state)=>state.auth.user)
    const [hover, setHover] = useState(false);
  

  

    return (
        <div className={styles.container1}>

            <Card className={styles.info_card}>
                <label htmlFor="avatar">
                     <div onMouseOver={()=>setHover(true)} onMouseLeave={()=>setHover(false)} className={style.avatar_div}>
                     <AccountCircleOutlinedIcon className={style.avatar} />
                 { hover&&  <div  className={styles.upload_div} >
                      <h3>Upload Picture</h3>
                     </div> }
                     <input type="file" id="avatar" style={{display:"none"}} accept="image/*" multiple = "false"/>
                 </div>
                 </label>
                 <div>
                     <h2>{user?.name}</h2>

                 </div>
            </Card>
       
            <Card className={styles.container2}>
                <div className={styles.left2}>
                    <h4>Personal Information</h4>
                    <div>
                        <p>Full Name</p>
                        <p>{user?.name}</p>
                    </div>
                    <div>
                        <p>Email ID</p>
                        <p>{user?.email&&user.email}</p>
                    </div>
                    <div>
                        <p>Mobile Number</p>
                        <p>{user?.mobile&&user.mobile}</p>
                    </div>
                    <p>
                        Please ensure you carry the following when you come to pick up your vehicle:
                        <ul>
                            <li>Original driving license</li>
                            <li>Alternate govt. ID proof</li>
                        </ul>
                    </p>
                </div>
                <div className={styles.right2}>
                    <h4>License Details</h4>
                    <Paper style={{height: "65%"}} variant="outlined">
                        <img style={{}} src="https://thumbs.dreamstime.com/b/driver-licence-icon-driver-id-card-vector-license-drive-identity-photo-identification-driver-licence-icon-driver-id-card-vector-167518886.jpg" alt="logo" />
                        <Button 
                            variant="contained" 
                            style={{ 
                                backgroundColor: "#41b6ac", 
                                color: "white", 
                                marginLeft: "5%",
                                width: "90%"
                                }}>
                            UPLOAD LICENSE
                        </Button>
                        
                    </Paper>
                </div>
            </Card>
        </div>
    )
}

export { ProfileCard }