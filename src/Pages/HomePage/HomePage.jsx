import React, { useState } from "react";
// import { Footer } from "../../Components/Footer/Footer";
// import { NavBar } from "../../Components/NavBar/NavBar";
import { HomeBox } from "../../Components/HomeBox/HomeBox"
import SearchBar from "../../Components/SearchBarHome/SearchBar";
import styles from "./HomePage.module.css";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import suggtionDATA from "./suggetion.json";
const array = ["test,trst"];

function HomePage() {
  const [open, setClose] = useState(false);

  const [input, setInput] = useState("")

  const handleInput = (area) => {
    setInput(area)
    setClose(false);
  }

  const handleClose = () => {
    setClose(false);
  };
  const handleOpen = () => {
    setClose(true);
  };

  const body = (
    <>
      {suggtionDATA.bengaluru.map((area) => (
        <div onClick={() => handleInput(area)} className={styles.suggetion}>
          <div>
            <LocationOnIcon className={styles.suggetion_icon} />
          </div>
          <div>
            <h4>{area}</h4>
          </div>
        </div>
      ))}
    </>
  );
  return (
    <>
      {/* <NavBar /> */}

      <div className={styles.home}>
        <div className={styles.container}>
          <div className={styles.info}>
            <div
              style={open ? { height: "0px", overflow: "hidden" } : {}}
              className={styles.heading}
            >
              <h1>
                Own the <span>experience</span>,
              </h1>
              <h1>not the ride</h1>
              <h3>Rent vehicles from people around you</h3>
            </div>

            <SearchBar input={input} handleInput={handleInput} handleOpen={handleOpen} />
          </div>
          <div className={styles.cover}>
            <img
              src="https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1569575901_bangalore1.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        className={styles.input_model}
        disablePortal
        disableEnforceFocus
        disableAutoFocus
      >
        <Paper>
          <div className={styles.input_box}>
            <input
              type="text"
              placeholder="Type or Select your location here"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </div>

          <div className={styles.suggetion_container}>
            <h5>SUGGETIONS</h5>
            {body}</div>
        </Paper>
      </Modal>

      <HomeBox />

      {/* <Footer /> */}
    </>
  );
}

export { HomePage };
