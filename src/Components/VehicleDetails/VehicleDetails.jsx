import React from "react";
import styled from "styled-components";
import FormControl from "@material-ui/core/FormControl";
import Switch from "@material-ui/core/Switch";
import NativeSelect from "@material-ui/core/NativeSelect";
import { useSelector } from "react-redux";
import { useParams, useHistory } from "react-router-dom";

export const VehicleDetails = () => {
  const [sortBy, setSortBy] = React.useState("");
  const [checked, setChecked] = React.useState(false);
  const handleChange = (event) => {
    setSortBy(event.target.value);
  };

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };
  const { data: vehicle, isLoading, isError } = useSelector((state) => state.vehicle.vehicle);
  // console.log(vehicle?.data);
  const carDetails = vehicle?.data;
  let params = new URLSearchParams(document.location.search.substring(1));
  let searchName = params.get("name");
  const { data: filter } = useSelector((state) => state.vehicle.filters);
  let filterData = filter;

  return (
    <>
      <CarDetails>
        <Banner>
          <img
            src="https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1589900796_long-booking-banner-3.png"
            alt=""
          />
        </Banner>
        <LocationBar>
          <p>Vehicles are available at the following location {searchName}.</p>
        </LocationBar>
        <FilterBar>
          <FilterBoxes>
            {filterData.map((item, i) => (
              <FilterBoxes2 key={i}>
                <p> {item}</p>
              </FilterBoxes2>
            ))}
          </FilterBoxes>
          <DropDown>
            <div>Sort By</div>
            <FormControl variant="outlined">
              <NativeSelect variant="outlined" value={sortBy} onChange={handleChange}>
                <option value={"distance"}>Distance</option>
                <option value={"low"}>Price - Low to High</option>
                <option value={"high"}>Price - High to Low</option>
              </NativeSelect>
            </FormControl>
          </DropDown>
          <MapBox>
            Map View
            <Switch color="default" checked={checked} onChange={toggleChecked} />
          </MapBox>
        </FilterBar>
        <CarsCont>
          {carDetails
            ?.filter((el) => el.Location.Area == searchName)
            .map((item) => (
              <CarCard key={item.id}>
                <PriceCont>
                  <p>{item.Price}</p>
                </PriceCont>
                <ImgCont>
                  <img src={item.Image} alt="vehicleImage" />
                </ImgCont>
                <TextCont>
                  <h5>{item.Title}</h5>
                  <p>
                    {item.Transmission_type},{item.Seats},{item.Fuel_type}
                  </p>
                  <p>{item.Location.Area}</p>
                  {/* <p>{item.Sub_area[0].distance}</p> */}

                  {/* {item.Sub_area?.map((el) => (
                  <p>{el.distance}</p>
                ))} */}
                </TextCont>
                <BtnCont>
                  <p>QUICK VIEW</p>
                </BtnCont>
              </CarCard>
            ))}
        </CarsCont>
      </CarDetails>
    </>
  );
};

//styled-components

const CarDetails = styled.div`
  width: 75%;
  height: 100%;

  padding-left: 1%;
  p,
  h5 {
    margin: 0;
    padding: 0;
  }
`;

const Banner = styled.div`
  width: 100%;
  height: 15%;
  border-radius: 7px;

  img {
    width: 100%;
    border-radius: 7px;
  }
`;
const LocationBar = styled.div`
  width: 100%;
  height: 5%;

  margin: 0.5% 0;
  border-radius: 7px;
  background-color: #dde2e8;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: left;
  p {
    margin-left: 3%;
  }
`;
const FilterBar = styled.div`
  width: 100%;
  height: 8%;

  margin: 1% 0;
  border-radius: 7px;
  display: flex;
  align-items: center;
`;

const FilterBoxes = styled.div`
  width: 55%;
  height: 100%;

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
    width: 80%;
    border: none;
    div {
      border: none;
      width: 100%;
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
  height: 75%;
  border-radius: 7px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  p {
    font-size: 14px;
    color: gray;
    font-weight: 500;
    padding: 0 5px;
  }
`;

const CarsCont = styled.div`
  width: 100%;
  height: 67%;
  margin: 1% 0;
  border-radius: 7px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const CarCard = styled.div`
  width: 32%;
  height: 90%;
  border-radius: 7px;
  border: 1px solid gray;
  margin-bottom: 2%;
`;

const ImgCont = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid gray;
  img {
    width: 60%;
  }
`;
const TextCont = styled.div`
  width: 100%;
  height: 30%;
  display: flex;
  align-items: left;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid gray;
  h5,
  p {
    margin: 0.5% 0;
    margin-left: 5%;
  }
  h5 {
    font-size: 16px;
    font-weight: 500;
  }
  p {
    font-size: 14px;
    color: gray;
  }
`;
const BtnCont = styled.div`
  width: 100%;
  height: 18%;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    font-size: 15px;
    margin-bottom: 8%;
    font-weight: bold;
    color: #41b6ac;
  }
`;

const PriceCont = styled.div`
  border: 1px solid gray;
  width: 30%;
  height: 8%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  background-color: white;
  position: relative;
  top: 54%;
  right: -60%;
`;
