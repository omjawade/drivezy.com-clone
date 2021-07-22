import React from "react";
import styles from "./NavBar.module.css"
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import ShoppingCartRoundedIcon from '@material-ui/icons/ShoppingCartRounded';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';

function NavBar() {

    return (
        <div className={styles.Box}>
            <div className={styles.left}>
                <div>
                    <img style={{ width: "175px" }} src="Drivezyheaderlogo.svg" alt="logo" />
                </div>
                <div className={styles.flex}>
                    <img style={{ height: "25px", marginTop: "12px", paddingRight: "5px" }} src="IndianFlag.png" alt="flag" />
                    <p>India</p>
                    <KeyboardArrowDownIcon style={{ marginTop: "15px" }} />
                </div>
                <div  className={styles.flex}>
                    <p>Bengaluru</p>
                    <KeyboardArrowDownIcon style={{ marginTop: "15px" }} />
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.flex}>
                    <p>Earn with us</p>
                    <KeyboardArrowDownIcon style={{ marginTop: "15px" }} />
                </div>
                <div className={styles.flex}>
                    <p>My Offers</p>
                </div>
                <div className={styles.flex}>
                    <p>Careers</p>
                    <KeyboardArrowDownIcon style={{ marginTop: "15px" }} />
                </div>
                <div className={styles.flex}>
                    <ShoppingCartRoundedIcon style={{ marginTop: "15px", fontSize: 25 }} />
                    <p>My Plan</p>
                </div>
                <div className={styles.flex}>
                    <AccountCircleOutlinedIcon style={{ fontSize: 50 }} />
                </div>
            </div>
        </div>
    )
}

export { NavBar }