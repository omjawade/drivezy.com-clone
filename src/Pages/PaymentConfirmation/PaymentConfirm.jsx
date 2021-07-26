import React, { useState } from "react";
import CarDetailsI from "./CarDetailsI";
import CarPriceD from "./CarPriceD";
import "./CarDetail.css";
import FooterPay from "./FooterPay";
import { NavBar } from "../../Components/NavBar/NavBar";
import "./CarDetail.css";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCar } from "../../Redux/SingleHotel/action";
import Confetti from "react-confetti";

const PaymentConfirm = () => {
  const [editModalIsOpen, setEditModalIsOpen] = useState(false);
  const[fuelInfo,setFuelInfo] = useState("")
  const [vall, setVall] = useState(5);
  let params = new URLSearchParams(document.location.search.substring(1));
  let vehicle = params.get("vehicle");

  const { id } = useParams();

  const data = useSelector((state) => state.singleCars.data);

  const { data: filter } = useSelector((state) => state.vehicle.dates);
  let filterData = filter;

  console.log(filterData, "lucifer");

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCar(vehicle, id));
  }, [vehicle, id]);

  return (
    <div>
      {editModalIsOpen ? (
        <Confetti
          recycle="false"
          numberOfPieces={180}
          width="1200px"
          height="2000px"
        />
      ) : null}
      <div
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "white",
        }}
      >
 
      </div>
      <div className="Header-Parent">
        <CarDetailsI setVall={setVall} data={data} setFuelInfo={setFuelInfo} />
        <CarPriceD data={data} vall={vall} />
      </div>

      <div>
        <FooterPay
          data={data}
          setEditModalIsOpen={setEditModalIsOpen}
          filterData={filterData}
          fuelInfo={fuelInfo}
        />
      </div>
    </div>
  );
};

export { PaymentConfirm };
