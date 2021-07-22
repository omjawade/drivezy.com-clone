import React from "react";
import styles from "./HomeBox.module.css";
import Button from '@material-ui/core/Button';

function HomeBox() {

    return (
        <div>
            <div className={styles.plane}>
                <img src="Plane.png" alt="logo" />
            </div>
            <div className={styles.container1}>
                <div className={styles.left1}>
                    <h2>BENGALURU AIRPORT RIDES</h2>
                    <img style={{ marginLeft: "-2.5%" }} src="Ridesat449.svg" alt="logo" />
                    <p style={{ color: "#78828d" }}>Bengaluru airport rides made easy with Drivezy. No need to book an expensive cab to or from Bengaluru airport. Hire a one-way car to or from Bengaluru airport and drive yourself at half the price.</p>
                    <p>This feature is only available on app. <span>DOWNLOAD NOW</span></p>
                    <Button variant="contained" style={{ backgroundColor: "#41b6ac", color: "white", padding: "2.5% 5%" }}>
                        KNOW MORE
                    </Button>
                </div>

                <div className={styles.right1}>
                    <img src="IPhoneXTemplate.png" alt="logo" />
                </div>
            </div>
            <div className={styles.container2}>
                <h3>WHY CHOOSE DRIVEZY</h3>
                <div className={styles.features}>
                    <div>
                        <img src="Security.png" alt="logo" />
                        <p>No security deposit</p>
                    </div>
                    <div>
                        <img src="Doorstep.png" alt="logo" />
                        <p>Doorstep delivery</p>
                    </div>
                    <div>
                        <img src="Smart.png" alt="logo" />
                        <p>Smart check-in</p>
                    </div>
                    <div>
                        <img src="Pay.png" alt="logo" />
                        <p>Pay later</p>
                    </div>
                    <div>
                        <img src="Instant.png" alt="logo" />
                        <p>Instant refund</p>
                    </div>
                </div>
            </div>
            <div className={styles.container3}>
                <div className={styles.left3}>
                    <img src="Listyourvehicle.png" alt="logo" />
                </div>
                <div className={styles.right3}>
                    <h3>JUSTCONNECT - BE A PART OF DRIVEZY</h3>
                    <img src="Earning.svg" alt="logo" />
                    <p style={{ color: "#78828d" }}>List your vehicle on Drivezy and turn it into an earning member of your family.</p>
                    <Button variant="contained" style={{ backgroundColor: "#41b6ac", color: "white", padding: "2.5% 5%" }}>
                        KNOW MORE
                    </Button>
                </div>
            </div>
        </div>
    )
}

export { HomeBox }