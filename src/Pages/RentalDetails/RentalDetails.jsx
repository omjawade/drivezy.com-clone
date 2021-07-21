import React from "react";
import styled from "styled-components";
import { TopBar } from "../../Components/TopBar/TopBar";
import { SideBar } from "../../Components/SideBar/SideBar";
import { VehicleDetails } from "../../Components/VehicleDetails/VehicleDetails";
export const RentalDetails = () => {
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
