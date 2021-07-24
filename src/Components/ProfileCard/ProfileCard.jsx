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

const useStyles = makeStyles((theme) => ({
    input: {
        display: 'none',
    },
}));

function ProfileCard() {
    const user=useSelector((state)=>state.auth.user)
    const [name, setName] = useState("Abhishek Sardagi");
    const [email, setEmail] = useState("sonuabhsardagi@gmail.com");
    const [mobile, setMobile] = useState("7259961321");

   // const classes = useStyles();

    return (
        <div className={styles.container1}>
            <AccountCircleOutlinedIcon style={{ color: "grey", fontSize: "800%" }} />
            <input
                style={{ marginLeft: "-275%", marginBottom: "225%", }}
                accept="image/*"
                className={classes.input}
                id="icon-button-file"
                type="file" />
            <label htmlFor="icon-button-file">
                <IconButton style={{ color: "black" }} aria-label="upload picture" component="span">
                    <AddCircleIcon style={{ marginLeft: "-275%", marginBottom: "225%", fontSize: "150%" }} />
                </IconButton>
            </label>
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
                        <img src="DL.png" alt="logo" />
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