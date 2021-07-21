import React from "react";
import styled from "styled-components";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    outline: "none",
    width: "90%",
  },
  button: {
    height: "40%",
    width: "45%",
    color: "#00c4b0",
    margin: "2% 0",
  },
  button2: {
    height: "40%",
    width: "43%",
    color: "#00c4b0",
    margin: "2% 0",
  },
  buttonAge: {
    height: "40%",
    width: "100%",
    color: "#00c4b0",
  },
  select: {
    minWidth: 200,
    backgroundColor: "white",
    color: "white",
    borderRadius: 5,
  },
  selectEmpty: {},
}));
export const TopBar = () => {
  const classes = useStyles();
  return (
    <>
      <TopBarCont>
        <VehicleSection>
          <p>I want to rent a</p>
          <VehicleBox>
            <div>
              <img src="https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1555509635_group-3%403x.png" alt="" />
            </div>
            <span></span>
            <div>
              <img src="https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1555509998_group-2%403x.png" alt="" />
            </div>
          </VehicleBox>
        </VehicleSection>
        <LocationSection>
          <p>I need my vehicle near</p>
          <SearchBox></SearchBox>
        </LocationSection>
        <DateSection>
          <p>Select your pickup date & time</p>
          <DateBox>
            <TextField className={classes.textField} type="datetime-local" defaultValue="2021-07-10T10:52" />
          </DateBox>
        </DateSection>
        <DateSection>
          <p>Select your pickup drop & time</p>
          <DateBox>
            <TextField className={classes.textField} type="datetime-local" defaultValue="2021-07-10T10:52" />
          </DateBox>
        </DateSection>
        <SearchBtn>SEARCH</SearchBtn>
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
`;

const DateBox = styled.div`
  width: 100%;
  height: 70%;
  border: 1px solid #80808083;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
