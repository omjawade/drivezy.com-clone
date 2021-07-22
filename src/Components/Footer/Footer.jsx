import React from "react";
import styles from "./Footer.module.css"
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

function Footer() {

    const classes = useStyles();

    return (
        <div>
            <div className={styles.top}>
                <div className={styles.row1}>
                    <div className={`${styles.left1} ${classes.root}`}>
                        <img style={{height: "75px", marginLeft: "-20%"}} src="logowhite.svg" alt="logo" />
                        <div className={styles.flex}>
                            <img style={{marginRight:"5%"}} src="Mail.svg" alt="logo" />
                            <p>support@drivezy.com</p>
                        </div>
                        <div className={styles.flex}>
                            <img style={{marginRight:"5%"}} src="Phone.svg" alt="logo" />
                            <p>08061933715</p>
                        </div>
                        <div className={styles.flex}>
                            <Button variant="outlined" style={{border: "none", marginLeft:"-5%"}}>
                                <img src="Appstore.svg" alt="logo"/>
                            </Button>
                            <Button variant="outlined" style={{border: "none"}}>
                                <img src="Playstore.svg" alt="logo"/>
                            </Button>
                        </div>
                    </div>
                    <div className={styles.right1}>
                        <div className={styles.Box1}>
                            <p>COMPANY</p>
                            <ul>
                                <li>Careers</li>
                                <li>Blog</li>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Be a part of Justconnect</li>
                                <li>Become a Franchise Partner</li>
                            </ul>
                        </div>
                        <div className={styles.Box2}>
                            <p>POLICIES</p>
                            <ul>
                                <li>Privacy policy</li>
                                <li>Rental agreement</li>
                                <li>Refund and cancellation</li>
                                <li>Going outstation?</li>
                                <li>Terms & conditions</li>
                                <li>Damage charges</li>
                            </ul>
                        </div>
                        <div className={styles.Box3}>
                            <p>QUICK LINKS</p>
                            <ul>
                                <li>Help Centre</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.row2}>
                    <div className={styles.left2}>
                        © 2020 Drivezy, Inc. All rights reserved.
                    </div>
                    <div className={styles.right2}>
                        <img src="Twitter.svg" alt="logo"/>
                        <img src="Fb.svg" alt="logo"/>
                        <img src="Insta.svg" alt="logo"/>
                    </div>
                </div>
            </div>
            <div className={styles.bottom}>
                <h1>Self Drive Car or Bike Rentals in Bengaluru, India</h1>
                <h3>Rent a Car or Bike in Bengaluru</h3>
                <p>Rent cars for self drive in Bengaluru. Drivezy is the most preferred brand for self drive car rentals in Bengaluru. You can also rent a bike in Bengaluru with Drivezy. Self drive car rentals and self drive bike rental options are getting extremely popular in Bengaluru. Rent an Activa, Rent a Swift or Rent a Royal Enfield and enjoy the freedom to drive on your own with Drivezy.</p>
                <h3>Car or Bike Rental Locations in Bengaluru</h3>
                <p>Hire a car for self drive from different locations. You can rent a self drive Car or Bike from these locations in Bengaluru:</p>
                <div className={styles.area}>
                    <div>Kalyan Nagar - Hormavu Junction</div>
                    <div>Bommanahalli</div>
                    <div>Mysore Road (Near R.V College of Engineering)</div>
                    <div>Vijayanagar</div>
                    <div>Koramangala Agara</div>
                    <div>Mysore Road Satellite Bus Stand</div>
                    <div>Mathikere</div>
                    <div>BTM Layout</div>
                    <div>Manpho Convention Center (NEW)</div>
                    <div>Ashwath Nagar (HBR Layout)</div>
                    <div>MS Palya - New</div>
                    <div>Marathahalli, Outer Ring Road</div>
                    <div>RR Nagar</div>
                </div>
                <h3>Self Drive Rentals in India</h3>
                <p>Drivezy is present in various locations in India:</p>
                <div className={styles.area}>
                    <div>Rent a car in Mumbai</div>
                    <div>Rent a car in Bengaluru</div>
                    <div>Rent a car in Pune</div>
                    <div>Rent a car in Mysuru</div>
                    <div>Rent a bike in Goa</div>
                    <div>Rent a car in Hyderabad</div>
                    <div>Rent a car in Manipal</div>
                    <div>Rent a car in Nagpur</div>
                    <div>Rent a car in Hubli</div>
                    <div>Rent a car in Delhi</div>
                    <div>Rent a car in Amritsar</div>
                    <div>Rent a car in Chandigarh</div>
                    <div>Rent a car in Chennai</div>
                    <div>Rent a car in Coimbatore</div>
                    <div>Rent a car in Madurai</div>
                    <div>Rent a car in Bhubaneshwar</div>
                    <div>Rent a car in Jaipur</div>
                    <div>Rent a car in Tirupur</div>
                    <div>Rent a car in Amravati</div>
                    <div>Rent a car in Guntur</div>
                </div>
                <p>Drivezy is the most affordable brand that provides self drive cars and self drive bikes for rent across India. Rent a car for self drive, Rent a scooter, hire cars of your choice.</p>
            </div>
        </div>
    )
}

export { Footer }