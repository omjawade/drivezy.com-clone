

import React from "react";
import "./CarDetail.css";

function FuelInfo({data, setVall}) {
  
  const [age, setAge] = React.useState();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  setVall(age)

  return (
    <div>
      <p className="car-name1">Fuel Package</p>

      <div style={{ display: "flex" }}>
        <div
          style={{
            border: "1px solid #77899b",
            height: "20px",
            marginTop: "30px",
            padding: "10px",
            backgroundColor: "#ecf0f5",
          }}
        >
          <a style={{ color: "#77899b" }}>Selected Package</a>
        </div>
        <div>
          <div>
            <select className="inp-fuel" onChange={handleChange}>
       
              <option value="60">60 km</option>
              <option value="120">120 km</option>
              <option value="180">180 km</option>
              <option value="No Fuel">No Fuel</option>
            </select>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default FuelInfo;
