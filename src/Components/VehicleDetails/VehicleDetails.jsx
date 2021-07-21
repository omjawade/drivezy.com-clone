import React from "react";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import Switch from "@material-ui/core/Switch";
import NativeSelect from "@material-ui/core/NativeSelect";

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
export const VehicleDetails = () => {
  const classes = useStyles();

  return (
    <>
      <CarDetails>
        <Banner></Banner>
        <LocationBar></LocationBar>
        <FilterBar>
          <FilterBoxes>
            <FilterBoxes2>240 kms</FilterBoxes2>
          </FilterBoxes>
          <DropDown>
            <div>Sort By</div>
            <FormControl className={classes.select} variant="outlined">
              <NativeSelect className={classes.select} variant="outlined">
                <option value={"distance"}>Distance</option>
                <option value={"low"}>Price - Low to High</option>
                <option value={"high"}>Price - High to Low</option>
              </NativeSelect>
            </FormControl>
          </DropDown>
          <MapBox>
            Map View
            <Switch color="default" />
          </MapBox>
        </FilterBar>
      </CarDetails>
    </>
  );
};

//styled-components

const CarDetails = styled.div`
  width: 75%;
  height: 100%;
  border: 1px solid black;
  padding-left: 1%;
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

const Banner = styled.div`
  width: 100%;
  height: 15%;
  border-radius: 7px;
  border: 1px solid black;
`;
const LocationBar = styled.div`
  width: 100%;
  height: 5%;
  border: 1px solid black;
  margin: 0.5% 0;
  border-radius: 7px;
`;
const FilterBar = styled.div`
  width: 100%;
  height: 8%;
  border: 1px solid black;
  margin: 1% 0;
  border-radius: 7px;
  display: flex;
  align-items: center;
`;

const FilterBoxes = styled.div`
  width: 55%;
  height: 100%;
  border: 1px solid black;
  display: flex;
  align-items: center;
`;

const DropDown = styled.div`
  width: 29%;
  height: 75%;
  border-radius: 7px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  div {
    width: 30%;
    height: 100%;
    border-right: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ffffff2f;
    font-size: 14px;
    color: #646464;
  }
  div:nth-child(2) {
    border: none;

    div {
      border: none;
      padding: 0 20px;
    }
  }
`;

const MapBox = styled.div`
  width: 15%;
  height: 75%;
  border-radius: 7px;
  border: 1px solid gray;
  margin-left: 1%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 14px;
  color: #646464;
`;

const FilterBoxes2 = styled.div`
  width: 12%;
  height: 75%;
  border-radius: 7px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: gray;
  font-weight: 500;
`;
