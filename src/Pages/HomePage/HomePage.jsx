import React from "react";
import { NavBar } from "../../Components/NavBar/NavBar"
import SearchBar from "../../Components/SearchBarHome/SearchBar";
import styles from "./HomePage.module.css"


function HomePage() {

    return (
        <>
            <NavBar />

            <div className={styles.home}>
                <div className={styles.container}>
                <div className={styles.info}>
                    <h1>Own the <span>experience</span>,</h1>
                    <h1>not the ride</h1>
                    <h3>Rent vehicles from people around you</h3>

                    <SearchBar/>
                </div>
                <div className={styles.cover}>
                 <img src="https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1569575901_bangalore1.jpg" alt="" />
                </div>

                </div>


            </div>
        </>
    )
}

export { HomePage }