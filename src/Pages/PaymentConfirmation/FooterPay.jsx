import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Atm from "../AtmCard/Atm";
import ErrorModal from "../ErrorModal/ErrorModal";
import "./CarDetail.css";

function FooterPay({ setEditModalIsOpen, filterData ,fuelInfo}) {
  const [atm, setatm] = useState(false);
  const [error, setError] = useState(false);

  const user = useSelector((state) => state.auth.user);

  const [check, setCheck] = useState(false);

  const handleclose = () => {
    setatm(false);
    setError(false);
  };
  const handleCheck = () => {
    if (user) {
      setatm(true);
    } else {
      setError(true);
    }
  };
  return (
    <div className="footerpaypage">
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid whitesmoke",
          height: "100px",
          display: "flex",
          boxShadow: " 0 2px 8px -2px rgb(31 45 61 / 40%)",
        }}
      >
        <div
          style={{
            width: "25%",
            marginLeft: "2%",
            marginTop: "40px",
            display: "flex",
          }}
        >
          <div>
            <input
              value={check}
              name="married"
              type="checkbox"
              placeholder="write married"
              onChange={() => setCheck(!check)}
              style={{
                padding: "10px",
                height: "20px",
                width: "20px",
                marginRight: "60px",
              }}
            />
          </div>
          <p
            style={{ marginTop: "-10px", marginRight: "10px", width: "1700px" }}
          >
            Rider, You are just one step away from confirming your booking.
            Confirm that you are above 18 and you agree to all the terms
            mentioned in{" "}
            <a href="" style={{ color: "orange" }}>
              Terms & Conditions
            </a>
          </p>
        </div>

        <div style={{ display: "flex", marginLeft: "4px", marginTop: "13px" }}>
          <p>
            To Pay 700 <br />
            <a style={{ color: "gray" }}>Show Breakup</a>
          </p>

          {check ? (
            <div
              style={{ marginTop: "20px", marginLeft: "60px", display: "flex" }}
            >
              <button
                style={{
                  borderRadius: "6px",
                  height: "40px",
                  width: "240px",
                  color: "gray",
                  backgroundColor: " white",
                  border: "1px solid gray",
                }}
              >
                Add To Cart
              </button>

              <button
                style={{
                  marginLeft: "20px",
                  borderRadius: "6px",
                  height: "40px",
                  width: "240px",
                  color: "gray",
                  backgroundColor: "#dde2e8",
                  border: "1px solid gray",
                }}
                onClick={handleCheck}
              >
                Quick Book
              </button>
            </div>
          ) : (
            <div
              style={{ marginTop: "20px", marginLeft: "60px", display: "flex" }}
            >
              <button
                disabled={!check}
                style={{
                  borderRadius: "6px",
                  height: "40px",
                  width: "240px",
                  color: "gray",
                  backgroundColor: " white",
                  border: "1px solid gray",
                }}
              >
                Add To Cart
              </button>

              <button
                disabled
                style={{
                  marginLeft: "20px",
                  borderRadius: "6px",
                  height: "40px",
                  width: "240px",
                  color: "blue",
                  backgroundColor: "#a0a2a5",
                  border: "1px solid gray",
                }}
              >
                Quick Book
              </button>
            </div>
          )}
          {atm && (
            <Atm handleclose={handleclose} atm={atm} filterData={filterData} fuelInfo={fuelInfo} />
          )}
          {error && <ErrorModal handleclose={handleclose} error={error} />}
        </div>
      </div>
    </div>
  );
}

export default FooterPay;
