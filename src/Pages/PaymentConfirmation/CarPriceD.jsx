import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCar } from "../../Redux/SingleHotel/action";
import "./CarDetail.css";
function CarPriceD({ dataa, vall }) {
  const [carinfo, setCarInfo] = useState([]);
  const { id } = useParams();

  const dispatch = useDispatch();
  const data = useSelector((state) => state.singleCars.data);

  var valmultiply = vall / 10 / 5;

  var pricesend = data.Price * valmultiply;


  useEffect(() => {
    dispatch(getCar(id));
  }, [dispatch, id]);
  return (
    <div>
      <div className="CarPrice-maindiv">
        <div>Fare Details</div>
        <br />
        <div className="fare-block" style={{ marginTop: "-10px" }}>
          <h4 className="fare-name">Weekday Charges</h4>
          <p className="fare-amout">{data?.Price}</p>
        </div>

        <div className="fare-block" style={{ marginTop: "-30px" }}>
          <h4 className="fare-name">Security Deposit</h4>
          <p className="fare-amout">₹0</p>
        </div>

        <div
          style={{ borderBottom: "0.2px solid gray", marginTop: "-10px" }}
        ></div>

        <div className="fare-block">
          <h4 className="fare-name">Total Fare</h4>

          {vall === "No Fuel" || vall == undefined ? (
            <h4 className="fare-amout">{1013.36}</h4>
          ) : (
            <h4 className="fare-amout">{1013.36 * valmultiply}</h4>
          )}
        </div>

        <div className="fare-block">
          <li
            style={{
              marginTop: "-10px",
              fontFamily: "font-family: 'Open Sans', sans-serif",
              color: "gray",
              fontSize: "12px",
              fontweight: "bold",
            }}
          >
            This price is rounded off and is inclusive of GST
          </li>
        </div>

        <div className="fare-block">
          <span className="fare-name">
            <a style={{ color: "black" }}>Have a Coupon ?</a> LOGIN
          </span>
        </div>
      </div>
    </div>
  );
}

export default CarPriceD;
