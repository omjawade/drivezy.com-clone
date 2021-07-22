import React from 'react';
import CarDetailsI from './CarDetailsI';
import CarPriceD from './CarPriceD';
import "./CarDetail.css"
function PaymentConfirm(props) {
    return (
        <div className="Header-Parent">
            <CarDetailsI/>
            <CarPriceD/>
        </div>
    );
}

export default PaymentConfirm;