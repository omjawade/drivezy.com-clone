import React from 'react';
import CarDetailsI from './CarDetailsI';
import CarPriceD from './CarPriceD';

function PaymentConfirm(props) {
    return (
        <div style={{display: 'flex'}}>
            <CarDetailsI/>

            <CarPriceD/>
        </div>
    );
}

export default PaymentConfirm;