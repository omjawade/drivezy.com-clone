import React from 'react';
import CarDetailsI from './CarDetailsI';
import CarPriceD from './CarPriceD';
import "./CarDetail.css"
import FooterPay from './FooterPay';
import { NavBar } from '../../Components/NavBar/NavBar';


function PaymentConfirm(props) {
    return (
       <div>
        <div style={{position: 'fixed',top:0,width:"100%",backgroundColor:"white"}}>
        <NavBar />
        {/* <TopBar/> */}
        </div>
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