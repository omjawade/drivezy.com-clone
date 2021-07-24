import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { addFilterDetails, addVehicleType } from "../../Redux/vehicleDetails/vehicleAction";

let carType = ["Hatchback", "Sedan", "SUV"];
let distanceArr = ["240km"];
let transmissionArr = ["Manual"];
let fuelArr = ["Petrol"];
let ageLimit = [];
let durationArr = ["7 Days"];
let engineTypeArr = ["Geared", "Gearless"];
let engineCapacityArr = ["110cc"];
export const SideBar = () => {
  const [val, setVal] = useState({});
  const handleClick = (e) => {
    if (carType.includes(e.target.textContent)) {
      const index = carType.indexOf(e.target.textContent);
      if (index > -1) {
        carType.splice(index, 1);
      }
    } else {
      carType.push(e.target.textContent);
    }
    setVal({ ...val, [e.target.textContent]: 1 });
  };
  const handleDistanceClick = (e) => {
    distanceArr.pop();
    distanceArr.push(e.target.textContent);
    setVal({ ...val, [e.target.textContent]: 1 });
  };
  const handleDurationClick = (e) => {
    durationArr.pop();
    durationArr.push(e.target.textContent);
    setVal({ ...val, [e.target.textContent]: 1 });
  };
  const handleTransmissionClick = (e) => {
    transmissionArr.pop();
    transmissionArr.push(e.target.textContent);
    setVal({ ...val, [e.target.textContent]: 1 });
  };
  const handleEngineClick = (e) => {
    if (engineTypeArr.includes(e.target.textContent)) {
      const index = engineTypeArr.indexOf(e.target.textContent);
      if (index > -1) {
        engineTypeArr.splice(index, 1);
      }
    } else {
      engineTypeArr.push(e.target.textContent);
    }
    setVal({ ...val, [e.target.textContent]: 1 });
  };
  const handleEngineCapClick = (e) => {
    engineCapacityArr.pop();
    engineCapacityArr.push(e.target.textContent);
    setVal({ ...val, [e.target.textContent]: 1 });
  };
  const handleFuelClick = (e) => {
    fuelArr.pop();
    fuelArr.push(e.target.textContent);
    setVal({ ...val, [e.target.textContent]: 1 });
  };
  const handleAgeClick = (e) => {
    if (ageLimit.length > 0) {
      ageLimit.pop();
      setVal({ ...val, [e.target.textContent]: 0 });
    } else {
      ageLimit.push(e.target.textContent);
      setVal({ ...val, [e.target.textContent]: 1 });
    }
  };

  const dispatch = useDispatch();
  let filterArray = [...carType, ...transmissionArr, ...fuelArr, ...distanceArr, ...ageLimit];
  let bikeFilterArr = [...durationArr, ...engineCapacityArr, ...engineTypeArr];
  useEffect(() => {
    const successAction = addFilterDetails(filterArray);
    dispatch(successAction);
    dispatch(addVehicleType(bikeFilterArr));
  }, [dispatch, val]);
  const { data: detail } = useSelector((state) => state.vehicle.vehicleDetails);
  let currentPackage = [{ title: "240km" }, { title: "480km" }, { title: "700km" }];
  let carTypeList = [{ title: "Hatchback" }, { title: "Sedan" }, { title: "SUV" }, { title: "Mini SUV" }];
  let transmissionList = [{ title: "Manual" }, { title: "Automatic" }];
  let fuelList = [{ title: "Diesel" }, { title: "Petrol" }];
  let durationList = [{ title: "7 Days" }, { title: "15 Days" }, { title: "30 Days" }];
  let gearList = [{ title: "Geared" }, { title: "Gearless" }];
  let capacityList = [{ title: "110cc" }, { title: "111-150cc" }, { title: "150cc" }];

  return (
    <>
      <SideBarCont>
        {detail === "cars" ? (
          <>
            <BookingDetails>
              <h4>Select your fuel package</h4>
              <FuelCont>
                <div>Without Fuel</div>
                <div>With Fuel</div>
              </FuelCont>
              <Package>
                <p>Current Package</p>
                <BtnCont>
                  {currentPackage.map((item, i) => (
                    <Button
                      style={{
                        border: distanceArr.includes(item.title) ? "2px solid #41b6ac" : "",
                        color: distanceArr.includes(item.title) ? "#41b6ac" : "",
                      }}
                      onClick={(e) => handleDistanceClick(e)}
                      key={i + 1}
                    >
                      {item.title}
                    </Button>
                  ))}
                </BtnCont>
              </Package>
            </BookingDetails>
            <Filter>
              <h4>Filter</h4>
              <Package>
                <p>Car type</p>
                <BtnCont2>
                  {carTypeList.map((item, i) => (
                    <Button
                      style={{
                        border: carType.includes(item.title) ? "2px solid #41b6ac" : "",
                        color: carType.includes(item.title) ? "#41b6ac" : "",
                      }}
                      onClick={(e) => handleClick(e)}
                      key={i + 1}
                    >
                      {item.title}
                    </Button>
                  ))}
                </BtnCont2>
                <p>Transmission type</p>
                <BtnCont2>
                  {transmissionList.map((item, i) => (
                    <Button
                      style={{
                        border: transmissionArr.includes(item.title) ? "2px solid #41b6ac" : "",
                        color: transmissionArr.includes(item.title) ? "#41b6ac" : "",
                      }}
                      onClick={(e) => handleTransmissionClick(e)}
                      key={i + 1}
                    >
                      {item.title}
                    </Button>
                  ))}
                </BtnCont2>
                <p>Fuel type</p>
                <BtnCont2>
                  {fuelList.map((item, i) => (
                    <Button
                      style={{
                        border: fuelArr.includes(item.title) ? "2px solid #41b6ac" : "",
                        color: fuelArr.includes(item.title) ? "#41b6ac" : "",
                      }}
                      onClick={(e) => handleFuelClick(e)}
                      key={i + 1}
                    >
                      {item.title}
                    </Button>
                  ))}
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
          </>
        ) : (
          <>
            <BookingDetails>
              <h4>Booking Duration</h4>
              <Package>
                <p>Current Booking Duration</p>
                <BtnCont>
                  {durationList.map((item, i) => (
                    <Button
                      style={{
                        border: durationArr.includes(item.title) ? "2px solid #41b6ac" : "",
                        color: durationArr.includes(item.title) ? "#41b6ac" : "",
                      }}
                      onClick={(e) => handleDurationClick(e)}
                      key={i + 1}
                    >
                      {item.title}
                    </Button>
                  ))}
                </BtnCont>
              </Package>
            </BookingDetails>
            <Filter>
              <h4>Filter</h4>
              <Package2>
                <p>Transmission type</p>
                <BtnCont2>
                  {gearList.map((item, i) => (
                    <Button
                      style={{
                        border: engineTypeArr.includes(item.title) ? "2px solid #41b6ac" : "",
                        color: engineTypeArr.includes(item.title) ? "#41b6ac" : "",
                      }}
                      onClick={(e) => handleEngineClick(e)}
                      key={i + 1}
                    >
                      {item.title}
                    </Button>
                  ))}
                </BtnCont2>
                <p>Engine capacity</p>
                <BtnCont2>
                  {capacityList.map((item, i) => (
                    <Button
                      style={{
                        border: engineCapacityArr.includes(item.title) ? "2px solid #41b6ac" : "",
                        color: engineCapacityArr.includes(item.title) ? "#41b6ac" : "",
                      }}
                      onClick={(e) => handleEngineCapClick(e)}
                      key={i + 1}
                    >
                      {item.title}
                    </Button>
                  ))}
                </BtnCont2>
              </Package2>
            </Filter>
          </>
        )}
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
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 10px #00000037;
  align-items: left;
  border-radius: 10px;
  padding-bottom: 4%;
  h4 {
    font-weight: 500;
    padding: 5% 5%;
  }
`;

const FuelCont = styled.div`
  width: 100%;
  height: 30px;
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
  div:nth-child(2) {
    background-color: #daf7f4;
  }
`;

const Package = styled.div`
  width: 89%;
  height: 50%;
  padding: 0 5%;
  p {
    font-size: 14px;
    color: #474747;
  }
  p:nth-child(1) {
    margin-top: 3%;
    margin-bottom: 3%;
  }
  p:nth-child(3) {
    margin-top: 10%;
    margin-bottom: 2%;
  }
`;

const BtnCont = styled.div`
  width: 90%;
  height: 80px;
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
    margin-bottom: 3%;
    font-size: 18px;
  }
  p {
    margin-bottom: 5%;
  }
`;

const Button = styled.div`
  width: 45%;
  height: 45%;
  color: #000000;
  font-size: 12px;
  margin-bottom: 5%;
  border-radius: 7px;
  border: 1px solid #80808083;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #414141;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
`;

const BtnCont2 = styled.div`
  height: 30%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 0 5%;
  justify-content: space-between;
`;

const Package2 = styled.div`
  width: 89%;
  height: 50%;
  padding: 0 5%;
  p {
    font-size: 14px;
    color: #474747;
  }
  p:nth-child(1) {
    margin-bottom: 0%;
  }
  p:nth-child(3) {
    margin-top: 0%;
    margin-bottom: 5%;
  }
`;
