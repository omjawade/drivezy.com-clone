import React from "react";
import Address from "./Address";
import FuelInfo from "./FuelInfo";
import Templete from "./Templete";

function CarDetailsI({ data, setVall,setFuelInfo }) {
  return (
    <div>
      <div className="Car-detail-maindiv">
        <div>
          <br />
          <div style={{ display: "flex" }}>
            <div style={{ padding: "10px" }}>
              <h2 className="car-name1">{data?.Title}</h2>

              <div className="features-block1">
                <img
                  src="https://drivezy.com/static/media/Manual.da2da54d.svg"
                  alt=""
                  className="car-features1"
                />
                <p style={{ marginLeft: "5px" }}>{data?.Transmission_type}</p>
                <img
                  src="https://drivezy.com/static/media/seats.b777050d.svg"
                  alt=""
                  className="car-features1"
                />

                <p style={{ marginLeft: "5px" }}>{data?.Seats} seater </p>
                <img
                  src="https://drivezy.com/static/media/fuel.5001188a.svg"
                  alt=""
                  className="car-features1"
                />
                <p style={{ marginLeft: "5px" }}>{data?.Fuel_type}</p>
              </div>
              <p
                style={{
                  marginTop: "-2px",
                  fontFamily: "font-family: 'Open Sans', sans-serif",
                  color: "gray",
                  fontSize: "12px",
                  fontweight: "bold",
                }}
              >
                Note: This image is for representation purpose only. The colour
                of the actual vehicle may differ.
              </p>
              <br />
            </div>

            <div
              style={{ padding: "10px", height: "50px", marginLeft: "120px" }}
            >
              <img src={data?.Image} alt="" style={{ height: "150px" }} />
            </div>
          </div>
          <div
            style={{ borderBottom: "0.2px solid gray", marginTop: "-10px" }}
          ></div>
          <FuelInfo data={data} setVall={setVall} setFuelInfo={setFuelInfo}/>
          <br />
          <p
            style={{
              marginTop: "-2px",
              fontFamily: "font-family: 'Open Sans', sans-serif",
              color: "gray",
              fontSize: "12px",
              fontweight: "bold",
            }}
          >
       
            <p
              style={{
                marginTop: "-2px",
                fontFamily: "font-family: 'Open Sans', sans-serif",
                color: "gray",
                fontSize: "12px",
                fontweight: "bold",
              }}
            >
              {" "}
              There is no travel limit. ₹2/km distance charge will be applied
              over the booking amount. Fuel bills are not reimbursed in this
              package.
            </p>
          </p>
          <br />
          <div
            style={{ borderBottom: "0.2px solid gray", marginTop: "-10px" }}
          ></div>
          <br />
          <Address data={data} />
          <br /> <br />
          <div
            style={{ borderBottom: "0.2px solid gray", marginTop: "-10px" }}
          ></div>
          <Templete />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default CarDetailsI;
