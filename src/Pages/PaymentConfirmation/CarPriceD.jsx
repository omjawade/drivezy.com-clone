import React from 'react';
import "./CarDetail.css"
function CarPriceD(props) {
    return (
        <div>
            
            <div className="CarPrice-maindiv">
                <div>Fare Details</div>
                <br/>
                <div className="fare-block">
                    <span className="fare-name">Weekday Charges</span>
                    <span className="fare-amout">₹466.40</span>
                </div>
              
                 <div className="fare-block">
                    <span className="fare-name">Security Deposit</span>
                    <span className="fare-amout">₹0</span>
                </div>
                <hr/>

                <div className="fare-block">
                    <span className="fare-name">Total Fare</span>
                    <span className="fare-amout">₹0</span>
                </div>


                <div className="fare-block">
                   
                    <li>This price is rounded off and is inclusive of GST</li>
                  
                </div>
               
                <div className="fare-block">
                    <span className="fare-name">Have a Coupon? LOGIN</span>
                  
                </div>
            </div>
            
        </div>
    );
}

export default CarPriceD;