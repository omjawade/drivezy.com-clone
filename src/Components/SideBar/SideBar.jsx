import React from "react";
import styled from "styled-components";

export const SideBar = () => {
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
              <Button>240km</Button>
              <Button>480km</Button>
              <Button>700km</Button>
            </BtnCont>
          </Package>
        </BookingDetails>
        <Filter>
          <h4>Filter</h4>
          <Package>
            <p>Car type</p>
            <BtnCont2>
              <Button>Hatchback</Button>
              <Button>Sedan</Button>
              <Button>SUV</Button>
              <Button>Mini SUV</Button>
            </BtnCont2>
            <p>Transmission type</p>
            <BtnCont2>
              <Button>Manual</Button>
              <Button>Automatic</Button>
            </BtnCont2>
            <p>Fuel type</p>
            <BtnCont2>
              <Button>Diesel</Button>
              <Button>Petrol</Button>
            </BtnCont2>
            <p>Age Limit</p>
            <BtnCont2>
              <Button>18-21 years</Button>
            </BtnCont2>
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
  p:nth-child(1) {
    margin-bottom: 5%;
  }
  p:nth-child(3) {
    margin-top: 5%;
  }
`;

const BtnCont = styled.div`
  width: 90%;
  height: 60%;
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

const Button = styled.div`
  width: 45%;
  height: 45%;
  color: #000000;
  font-size: 12px;
  margin-bottom: 3%;
  border-radius: 7px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  color: gray;
`;

const BtnCont2 = styled.div`
  height: 30%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 5%;
  justify-content: space-between;
`;
