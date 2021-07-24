import React, { useEffect } from "react";
import styles from "./ProfilePage.module.css"
import Divider from '@material-ui/core/Divider';
import { ProfileSideBar } from "../../Components/ProfileSideBar/ProfileSideBar";
import { ProfileCard } from "../../Components/ProfileCard/ProfileCard";
import { BookingCard } from "../../Components/BookingCard/BookingCard";
import { useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";

function ProfilePage() {
const user=useSelector((state)=>state.auth.user)
const {tab}= useParams()
useEffect(()=>{
console.log(user);
},[])
if(user===null){
    return <Redirect to="/"/>

}

    return (
        <div>
            <Divider />
            <div className={styles.container1}>
                <ProfileSideBar />
                {/* <ProfileCard /> */}
                <BookingCard />
            </div>
        </div>
    )
}

export { ProfilePage }