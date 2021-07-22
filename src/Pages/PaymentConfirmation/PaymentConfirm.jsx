import React from 'react';
import CarDetailsI from './CarDetailsI';
import CarPriceD from './CarPriceD';
import "./CarDetail.css"
import FooterPay from './FooterPay';

function PaymentConfirm(props) {
    return (
       <div>
        <div className="Header-Parent">
            <CarDetailsI/>
            <CarPriceD/>
        </div>
       
        <div style={{position: 'fixed'}}>
        <FooterPay />
        </div>

     
       </div>
    );
}

export default PaymentConfirm;