import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addFilterDetails, addVehicleType } from "../../Redux/vehicleDetails/vehicleAction";

let carType = [];
let distanceArr = ["240km"];
let transmissionArr = [];
let fuelArr = [];
let ageLimit = [];
export const SideBar = () => {
  const [val, setVal] = useState({});
  const handleClick = (e) => {
    // console.log(e.target.textContent);
    if (carType.includes(e.target.textContent)) {
      const index = carType.indexOf(e.target.textContent);
      if (index > -1) {
        carType.splice(index, 1);
      }
    } else {
      carType.push(e.target.textContent);
    }
    setVal({ ...val, [e.target.textContent]: 1 });
    // setVal([...val, e.target.textContent]);
    // console.log(carType);
  };
  const handleDistanceClick = (e) => {
    distanceArr.pop();
    distanceArr.push(e.target.textContent);
    setVal({ ...val, [e.target.textContent]: 1 });
    // setVal([...val, e.target.textContent]);
  };
  const handleTransmissionClick = (e) => {
    transmissionArr.pop();
    transmissionArr.push(e.target.textContent);
    setVal({ ...val, [e.target.textContent]: 1 });
    // setVal([...val, e.target.textContent]);
    // if (transmissionArr.length == 1) {
    // } else {
    // }
  };
  const handleFuelClick = (e) => {
    fuelArr.pop();
    fuelArr.push(e.target.textContent);
    // setVal([...val, e.target.textContent]);
    setVal({ ...val, [e.target.textContent]: 1 });
  };
  const handleAgeClick = (e) => {
    if (ageLimit.length > 0) {
      ageLimit.pop();
      setVal({ ...val, [e.target.textContent]: 0 });
    } else {
      ageLimit.push(e.target.textContent);
      // setVal([...val, e.target.textContent]);
      setVal({ ...val, [e.target.textContent]: 1 });
    }
  };

  const dispatch = useDispatch();
  let filterArray = [...carType, ...transmissionArr, ...fuelArr, ...distanceArr, ...ageLimit];

  useEffect(() => {
    const successAction = addFilterDetails(filterArray);
    dispatch(successAction);
    dispatch(addVehicleType(carType[carType.length - 1]));
  }, [val]);
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
              <Button
                style={{
                  border: distanceArr.includes("240km") ? "2px solid #41b6ac" : "",
                  color: distanceArr.includes("240km") ? "#41b6ac" : "",
                }}
                onClick={(e) => handleDistanceClick(e)}
              >
                240km
              </Button>
              <Button
                style={{
                  border: distanceArr.includes("480km") ? "2px solid #41b6ac" : "",
                  color: distanceArr.includes("480km") ? "#41b6ac" : "",
                }}
                onClick={(e) => handleDistanceClick(e)}
              >
                480km
              </Button>
              <Button
                style={{
                  border: distanceArr.includes("700km") ? "2px solid #41b6ac" : "",
                  color: distanceArr.includes("700km") ? "#41b6ac" : "",
                }}
                onClick={(e) => handleDistanceClick(e)}
              >
                700km
              </Button>
            </BtnCont>
          </Package>
        </BookingDetails>
        <Filter>
          <h4>Filter</h4>
          <Package>
            <p>Car type</p>
            <BtnCont2>
              <Button
                style={{
                  border: carType.includes("Hatchback") ? "2px solid #41b6ac" : "",
                  color: carType.includes("Hatchback") ? "#41b6ac" : "",
                }}
                onClick={(e) => handleClick(e)}
              >
                Hatchback
              </Button>
              <Button
                style={{
                  border: carType.includes("Sedan") ? "2px solid #41b6ac" : "",
                  color: carType.includes("Sedan") ? "#41b6ac" : "",
                }}
                onClick={(e) => handleClick(e)}
              >
                Sedan
              </Button>
              <Button
                style={{
                  border: carType.includes("SUV") ? "2px solid #41b6ac" : "",
                  color: carType.includes("SUV") ? "#41b6ac" : "",
                }}
                onClick={(e) => handleClick(e)}
              >
                SUV
              </Button>
              <Button
                style={{
                  border: carType.includes("Mini SUV") ? "2px solid #41b6ac" : "",
                  color: carType.includes("Mini SUV") ? "#41b6ac" : "",
                }}
                onClick={(e) => handleClick(e)}
              >
                Mini SUV
              </Button>
            </BtnCont2>
            <p>Transmission type</p>
            <BtnCont2>
              <Button
                style={{
                  border: transmissionArr.includes("Manual") ? "2px solid #41b6ac" : "",
                  color: transmissionArr.includes("Manual") ? "#41b6ac" : "",
                }}
                onClick={(e) => handleTransmissionClick(e)}
              >
                Manual
              </Button>
              <Button
                style={{
                  border: transmissionArr.includes("Automatic") ? "2px solid #41b6ac" : "",
                  color: transmissionArr.includes("Automatic") ? "#41b6ac" : "",
                }}
                onClick={(e) => handleTransmissionClick(e)}
              >
                Automatic
              </Button>
            </BtnCont2>
            <p>Fuel type</p>
            <BtnCont2>
              <Button
                style={{
                  border: fuelArr.includes("Diesel") ? "2px solid #41b6ac" : "",
                  color: fuelArr.includes("Diesel") ? "#41b6ac" : "",
                }}
                onClick={(e) => handleFuelClick(e)}
              >
                Diesel
              </Button>
              <Button
                style={{
                  border: fuelArr.includes("Petrol") ? "2px solid #41b6ac" : "",
                  color: fuelArr.includes("Petrol") ? "#41b6ac" : "",
                }}
                onClick={(e) => handleFuelClick(e)}
              >
                Petrol
              </Button>
            </BtnCont2>
            <p>Age Limit</p>
            <BtnCont2>
              <Button
                style={{
                  border: ageLimit.includes("18-21 years") ? "2px solid #41b6ac" : "",
                  color: ageLimit.includes("18-21 years") ? "#41b6ac" : "",
                }}
                onClick={(e) => handleAgeClick(e)}
              >
                18-21 years
              </Button>
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
  border-top: 1px solid #80808083;
  border-bottom: 1px solid #80808083;
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
  p {
    font-size: 14px;
    color: #474747;
  }
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
  border: 1px solid #80808083;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #414141;
  font-size: 14px;
  font-weight: 500;
`;

const BtnCont2 = styled.div`
  height: 30%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 5%;
  justify-content: space-between;
`;
