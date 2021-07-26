import React from "react";

function Templete(props) {
  return (
    <div>
      <p className="car-name1">Guidelines & Policies</p>

      <ul>
        <li style={{ fontSize: "14px", color: "gray" }}>
          Please carry your original driving license along with an additional ID
          proof when you come to pick up your vehicle
        </li>

        <li style={{ fontSize: "14px", color: "gray" }}>
          Your license must be verified by our system before you start your trip
          or else your trip will be cancelled. To check your license status,
          click here
        </li>

        <li style={{ fontSize: "14px", color: "gray" }}>
          Our vehicles have a maximum speed limit of 120 km/hr. Over-speeding
          will attract fines. To check our over-speeding policy, click here
        </li>

        <li style={{ fontSize: "14px", color: "gray" }}>
          If you plan to travel out-of-state, please ensure that you take the
          required state permits
        </li>
      </ul>
    </div>
  );
}

export default Templete;
