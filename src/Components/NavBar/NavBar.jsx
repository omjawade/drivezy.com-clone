import React from "react";
import "./Navbar.css"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

function NavBar() {

    return (
        <div className="Box">
            <div className="left">
                <div>
                    <img style={{ width: "175px" }} src="Drivezyheaderlogo.svg" alt="logo" />
                </div>
                <div className="flex">
                    <img style={{ height: "25px", marginTop: "12px", paddingRight: "5px" }} src="IndianFlag.png" alt="flag" />
                    <p>India</p>
                    <KeyboardArrowDownIcon style={{ marginTop: "15px" }} />
                </div>
                <div className="flex">
                    <p>Bengaluru</p>
                    <KeyboardArrowDownIcon style={{ marginTop: "15px" }} />
                </div>
            </div>
            <div className="right">
                <div className="flex">
                    <p>Earn with us</p>
                    <KeyboardArrowDownIcon style={{ marginTop: "15px" }} />
                </div>
                <div className="flex">
                    <p>My Offers</p>
                </div>
                <div className="flex">
                    <p>Careers</p>
                    <KeyboardArrowDownIcon style={{ marginTop: "15px" }} />
                </div>
                <div className="flex">
                    <ShoppingCartRoundedIcon style={{ marginTop: "15px", fontSize: 25 }} />
                    <p>My Plan</p>
                </div>
                <div className="flex">
                    <AccountCircleOutlinedIcon style={{ fontSize: 50 }} />
                </div>
            </div>
        </div>
    )
}

export { NavBar }