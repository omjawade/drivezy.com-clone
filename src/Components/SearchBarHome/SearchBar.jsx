import React, { useState } from 'react';
import styles from "./SearchBar.module.css"
import PinDropIcon from '@material-ui/icons/PinDrop';
import styled from "styled-components";
const SearchBar = () => {

    const [vehicle,setVehicle]=useState(true)

    return (
        <div className={styles.container} >
            <div className={styles.title}>
              <PinDropIcon className={styles.title_icon} />
              <h3>Rent Vehicle</h3>
            </div>
            <div className={styles.searchbar} >
                <div className={styles.vehicle_box}>
                    <p>I want to rent a</p>
                <div>
                <div onClick={() => setVehicle(true)}>
              <img
                style={{ filter: vehicle ? "" : "grayscale(100%)" }}
                src="https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1555509635_group-3%403x.png"
                alt=""
              />
            </div>
          
            <div onClick={() => setVehicle(false)}>
              <img
                style={{ filter: vehicle ? "grayscale(100%)" : "" }}
                src="https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1555509998_group-2%403x.png"
                alt=""
              />
            </div>
                </div>
                </div>

                <div className={styles.input_box}>
                    <p>I need my vehicle near</p>
                    <input type="text"  />
                </div>
                <div className={styles.submit}>
                  
                    <input type="submit" value="Search" />
                    <div>
                        <div>
                            
                        </div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;


const VehicleBox = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid #80808083;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  span {
    height: 80%;
    width: 0.5%;
    background-color: #80808078;
  }
  div {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: 70%;
      margin-bottom: 5%;
    }
  }
  div:nth-child(1) {
    img {
      margin-bottom: 0%;
      width: 90%;
    }
  }
`;