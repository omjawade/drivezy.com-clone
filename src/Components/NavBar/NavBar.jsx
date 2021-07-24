import React, { useEffect } from "react";
import styles from "./NavBar.module.css";
import MenuItem from "@material-ui/core/MenuItem";
import Popover from "@material-ui/core/Popover";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import { useDispatch, useSelector } from "react-redux";
import { authFailureAction, authRequest } from "../../Redux/AuthReducer/AuthAction";
import LoginModel from "../Login_Popup/LoginModel";
import OTPmodel from "../OtpModel/OTPmodel";
import { useHistory } from "react-router-dom";

function NavBar() {

    const authLoading = useSelector((state) => state.auth.authLoading)

    const dispatch = useDispatch()

    const handlechange = () => {
        dispatch(authRequest())
        console.log("calling", authLoading);
    }

    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorE2, setAnchorE2] = React.useState(null);
    const [anchorE3, setAnchorE3] = React.useState(null);
    const [openLogin, setOpenLogin] = React.useState(false)
    const [openOTP,setOpenOTP]= React.useState(false)

    const open1 = Boolean(anchorEl);
    const open2 = Boolean(anchorE2);
    const open3 = Boolean(anchorE3);
    const id1 = open1 ? 'simple-popover' : undefined;
    const id2 = open2 ? 'simple-popover' : undefined;
    const id3 = open3 ? 'simple-popover' : undefined;
    const user= useSelector((state)=>state.auth.user)
    const history=useHistory()
    
    const handleCloseLogin = () => {
       
        setOpenLogin(false)
        
    }

    const handleResponse=()=>{
        setOpenOTP(true)
        setOpenLogin(false)
    }

    const handleModel = () => {
        setOpenLogin(true)
    }

    const handleAccount=()=>{
        if(user===null){
            handleModel()
        }else{

        }
    }
    const handleCloseOTP = () => {
       setOpenOTP(false)
      
    }

    const handleClick1 = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose1 = () => {
        setAnchorEl(null);
    };

    const handleClick2 = (event) => {
        setAnchorE2(event.currentTarget);
    };

    const handleClose2 = () => {
        setAnchorE2(null);
    };

    const handleClick3 = (event) => {
        setAnchorE3(event.currentTarget);
    };

    const handleClose3 = () => {
        setAnchorE3(null);
    };

useEffect(()=>{
    localStorage.getItem("drivezyuserKey")
})
  

    

    return (
        <div className={styles.Box}>
            <LoginModel openLogin={openLogin} handleResponse={handleResponse} handleCloseLogin={handleCloseLogin} />
            <OTPmodel openOTP={openOTP} handleCloseOTP={handleCloseOTP}/>
            <div className={styles.left}>
                <div>
                    <img style={{ height: "40px", marginTop: "5%" }} src="Drivezyheaderlogo.svg" alt="logo" />
                </div>
                <div className={styles.flex} >
                    <div className={styles.flex} onClick={handleClick1}>
                        <img style={{ height: "20px", paddingRight: "5%", marginTop: "20%" }} src="IndianFlag.png" alt="flag" />
                        <p>India</p>
                        <KeyboardArrowDownIcon style={{ marginTop: "20%" }} />
                    </div>
                    <Popover
                        id={id1}
                        open={open1}
                        anchorEl={anchorEl}
                        onClose={handleClose1}
                        anchorReference="anchorPosition"
                        anchorPosition={{ top: 75, left: 200 }}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItem className={styles.typography} onClick={handleClose1}>
                            <img style={{ height: "25px" }} src="IndianFlag.png" alt="flag" />
                            <p>India</p>
                        </MenuItem>
                        <MenuItem className={styles.typography} onClick={handleClose1}>
                            <img style={{ height: "25px" }} src="AmericanFlag.png" alt="flag" />
                            <p>United States</p>
                        </MenuItem>
                    </Popover>
                </div>
                <div className={styles.flex}>
                    <p>Bengaluru</p>
                    <KeyboardArrowDownIcon style={{ marginTop: "20%" }} />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.flex}>
                    <div  className={styles.flex} onClick={handleClick2}>
                        <p style={{width:"100px"}} >Earn with us</p>
                        <KeyboardArrowDownIcon style={{ marginTop: "17.5%" }} />
                    </div>
                    <Popover
                        id={id2}
                        open={open2}
                        anchorE2={anchorE2}
                        onClose={handleClose2}
                        anchorReference="anchorPosition"
                        anchorPosition={{ top: 75, left: 525 }}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItem className={styles.typography} onClick={handleClose2}>
                            <img style={{ height: "25px" }} src="PartnerDashboard.svg" alt="flag" />
                            <p>Share-A-Business - become a franchise partner</p>
                        </MenuItem>
                        <MenuItem className={styles.typography} onClick={handleClose2}>
                            <img style={{ height: "25px" }} src="ListYourCar.svg" alt="flag" />
                            <p>List your vehicle</p>
                        </MenuItem>
                    </Popover>
                </div>
                <div  className={styles.flex}>
                    <p style={{width:"70px"}}>My Offers</p>
                </div>
                <div className={styles.flex}>
                    <div className={styles.flex} onClick={handleClick3}>
                        <p>Careers</p>
                        <KeyboardArrowDownIcon style={{ marginTop: "22.5%" }} />
                    </div>
                    <Popover
                        id={id3}
                        open={open3}
                        anchorE3={anchorE3}
                        onClose={handleClose3}
                        anchorReference="anchorPosition"
                        anchorPosition={{ top: 75, left: 900 }}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                    >
                        <MenuItem className={styles.typography} onClick={handleClose3}>
                            <img style={{ height: "25px" }} src="Jobs.svg" alt="flag" />
                            <p>Jobs</p>
                        </MenuItem>
                        <MenuItem className={styles.typography} onClick={handleClose3}>
                            <img style={{ height: "25px" }} src="People.svg" alt="flag" />
                            <p>People</p>
                        </MenuItem>
                        <MenuItem className={styles.typography} onClick={handleClose3}>
                            <img style={{ height: "25px" }} src="Culture.svg" alt="flag" />
                            <p>Culture</p>
                        </MenuItem>
                    </Popover>
                </div>
                <div className={styles.flex}>
                    <ShoppingCartRoundedIcon style={{ marginTop: "20%", fontSize: 25 }} />
                    <p>My Plan</p>
                </div>
                <div onClick={()=>handleModel()} className={styles.flex}>
                    <AccountCircleOutlinedIcon style={{ fontSize: 50 }} />
                </div>
            </div>


        </div>
   
  );
}

export { NavBar };
