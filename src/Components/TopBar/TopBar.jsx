import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { useDispatch, useSelector } from "react-redux";
import { addDateDetails, addVehicleDetails } from "../../Redux/vehicleDetails/vehicleAction";
import { getVehicleData } from "../../Redux/vehicleDetails/vehicleAction";
export const TopBar = () => {
  const [time, setTime] = useState({
    pickUpTime: "",
    dropUpTime: "",
  });
  const [vehicleSelect, setVehicleSelect] = useState(true);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { value, name } = e.target;
    setTime({ ...time, [name]: value });
  };
  let currentDate = new Date().toString();
  let date = currentDate.slice(8, 10);
  let hour = currentDate.slice(16, 18);
  let minutes = currentDate.slice(19, 21);
  useEffect(() => {
    dispatch(getVehicleData(vehicleSelect ? "cars" : "bikes"));
    dispatch(addVehicleDetails(vehicleSelect ? "cars" : "bikes"));
  }, [vehicleSelect]);

  const handleSearch = () => {
    dispatch(addDateDetails(time));
  };
  let params = new URLSearchParams(document.location.search.substring(1));
  let name = params.get("name");

  return (
    <>
      <TopBarCont>
        <VehicleSection>
          <p>I want to rent a</p>
          <VehicleBox>
            <div onClick={() => setVehicleSelect(true)}>
              <img
                style={{ filter: vehicleSelect ? "" : "grayscale(100%)" }}
                src="https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1555509635_group-3%403x.png"
                alt=""
              />
            </div>
            <span></span>
            <div onClick={() => setVehicleSelect(false)}>
              <img
                style={{ filter: vehicleSelect ? "grayscale(100%)" : "" }}
                src="https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1555509998_group-2%403x.png"
                alt=""
              />
            </div>
          </VehicleBox>
        </VehicleSection>
        <LocationSection>
          <p>I need my vehicle near</p>
          <SearchBox>
            <p>{name}</p>
          </SearchBox>
        </LocationSection>
        <DateSection>
          <p>Select your pickup date & time</p>
          <DateBox>
            <TextField
              type="datetime-local"
              name="pickUpTime"
              defaultValue={"2021-07-" + date + "T" + hour + ":" + minutes}
              onChange={handleChange}
              InputProps={{
                disableUnderline: true,
              }}
            />
          </DateBox>
        </DateSection>
        <DateSection>
          <p>Select your pickup drop & time</p>
          <DateBox>
            <TextField
              InputProps={{
                disableUnderline: true,
              }}
              type="datetime-local"
              name="dropUpTime"
              value={time.dropUpTime}
              onChange={handleChange}
            />
          </DateBox>
        </DateSection>
        <SearchBtn onClick={() => handleSearch()}>SEARCH</SearchBtn>
      </TopBarCont>
    </>
  );
};

//styled-components

const TopBarCont = styled.div`
  width: 100%;
  height: 15%;
  border-radius: 20px;
  box-shadow: 0px 0px 10px #00000076;
  display: flex;
  align-items: center;
  justify-content: space-around;
  p {
    font-size: 12px;
    color: #555555d5;
  }
`;

const VehicleSection = styled.div`
  width: 15%;
  height: 70%;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
`;
const LocationSection = styled.div`
  width: 30%;
  height: 70%;

  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
`;
const DateSection = styled.div`
  width: 15%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: space-between;
`;
const SearchBtn = styled.div`
  width: 12%;
  height: 48%;
  border: 1px solid #80808083;
  border-radius: 10px;
  margin-top: 1.5%;
  background-color: #41b6ac;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;

const VehicleBox = styled.div`
  width: 100%;
  height: 70%;
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
      cursor: pointer;
    }
  }
  div:nth-child(1) {
    img {
      margin-bottom: 0%;
      width: 90%;
    }
  }
`;

const SearchBox = styled.div`
  width: 100%;
  height: 70%;
  border: 1px solid #80808083;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  p {
    padding: 0;
    margin: 0;
    font-size: 16px;
    font-weight: 500;
  }
`;

const DateBox = styled.div`
  width: 100%;
  height: 70%;
  border: 1px solid #80808083;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  * {
    cursor: pointer;
  }
`;
