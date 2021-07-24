import React from "react";
import styles from "./ProfilePage.module.css"
import Divider from '@material-ui/core/Divider';
import { ProfileSideBar } from "../../Components/ProfileSideBar/ProfileSideBar";
import { ProfileCard } from "../../Components/ProfileCard/ProfileCard";
import { BookingCard } from "../../Components/BookingCard/BookingCard";

function ProfilePage() {

    return (
        <div>
            <Divider />
            <div className={styles.container1}>
                <ProfileSideBar/>
                <ProfileCard />
                {/* <BookingCard /> */}
            </div>
        </div>
    )
}

export { ProfilePage }