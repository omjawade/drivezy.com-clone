import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textField: {
    outline: "none",
    width: "90%",
  },
  button: {
    height: "40%",
    width: "45%",
    color: "#000000",
    fontSize: "12px",
    margin: "2% 0",
  },
  button2: {
    height: "40%",
    width: "43%",
    color: "#000000",
    fontSize: "12px",
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
export const SideBar = () => {
  const classes = useStyles();
  return (
    <>
      <SideBarCont>
        <BookingDetails>
          <h4>Select your fuel package</h4>
          <FuelCont>
            <div>Without Fuel</div>
            <div>With Fuel</div>
          </FuelCont>
          <Package>
            <p>Current Package</p>
            <BtnCont>
              <Button className={classes.button} variant="outlined">
                240km
              </Button>
              <Button className={classes.button} variant="outlined">
                480km
              </Button>
              <Button className={classes.button} variant="outlined">
                700km
              </Button>
            </BtnCont>
          </Package>
        </BookingDetails>
        <Filter>
          <h4>Filter</h4>
          <Package>
            <p>Car type</p>
            <BtnCont>
              <Button className={classes.button2} variant="outlined">
                Hatchback
              </Button>
              <Button className={classes.button2} variant="outlined">
                Sedan
              </Button>
              <Button className={classes.button2} variant="outlined">
                SUV
              </Button>
              <Button className={classes.button2} variant="outlined">
                Mini SUV
              </Button>
            </BtnCont>
            <p>Transmission type</p>
            <BtnCont>
              <Button className={classes.button2} variant="outlined">
                Manual
              </Button>
              <Button className={classes.button2} variant="outlined">
                Automatic
              </Button>
            </BtnCont>
            <p>Fuel type</p>
            <BtnCont>
              <Button className={classes.button2} variant="outlined">
                Diesel
              </Button>
              <Button className={classes.button2} variant="outlined">
                Petrol
              </Button>
            </BtnCont>
            <p>Age Limit</p>
            <BtnCont>
              <Button className={classes.buttonAge} variant="outlined">
                18-21 years
              </Button>
            </BtnCont>
          </Package>
        </Filter>
      </SideBarCont>
    </>
  );
};

//styled-components
const SideBarCont = styled.div`
  width: 23%;
  height: 100%;
  overflow: overlay;
  padding: 1%;
  p {
    margin: 0;
    padding: 0;
  }
  h4 {
    margin: 0;
    padding: 0;
  }
`;

const BookingDetails = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px #00000037;
  align-items: left;
  border-radius: 10px;
  h4 {
    font-weight: 500;
    padding: 5% 5%;
  }
`;

const FuelCont = styled.div`
  width: 100%;
  height: 13%;
  border-top: 1px solid #555555d5;
  border-bottom: 1px solid #555555d5;
  display: flex;
  align-items: center;
  justify-content: space-around;
  div {
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #555555d5;
  }
  div:nth-child(1) {
    background-color: #daf7f4;
  }
`;

const Package = styled.div`
  width: 89%;
  height: 50%;
  padding: 5%;
`;

const BtnCont = styled.div`
  width: 90%;
  margin-top: 3%;
  padding: 5%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Filter = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px #00000037;
  align-items: left;
  border-radius: 10px;
  margin-top: 5%;
  ${BtnCont} {
    width: 90%;
  }
  h4 {
    font-weight: 500;
    padding: 0% 5%;
    margin-top: 5%;
    font-size: 18px;
  }
`;
