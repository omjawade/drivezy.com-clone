import React, { useEffect } from "react";
import styled from "styled-components";
import { TopBar } from "../../Components/TopBar/TopBar";
import { SideBar } from "../../Components/SideBar/SideBar";
import { VehicleDetails } from "../../Components/VehicleDetails/VehicleDetails";
import { useDispatch, useSelector } from "react-redux";
import { getVehicleData } from "../../Redux/vehicleDetails/vehicleAction";
export const RentalDetails = () => {
  // const dispatch = useDispatch();
  // const { data: vehicle, isLoading, isError } = useSelector((state) => state.vehicle.vehicle);
  // console.log(vehicle.data);
  // useEffect(() => {
  //   dispatch(getVehicleData());
  // }, [dispatch]);
  return (
    <>
      <Main>
        <TopBar />
        <DetailsSection>
          <SideBar />
          <VehicleDetails />
        </DetailsSection>
      </Main>
    </>
  );
};

//styled-components

const Main = styled.div`
  width: 88vw;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
const DetailsSection = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
