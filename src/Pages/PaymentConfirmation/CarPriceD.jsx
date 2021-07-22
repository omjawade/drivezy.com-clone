import React from 'react';
import "./CarDetail.css"
function CarPriceD(props) {
    return (
        <div>
            
            <div className="CarPrice-maindiv">
                <div>Fare Details</div>
                <br/>
                <div className="fare-block" style={{marginTop: "-10px"}} >
                    <h4 className="fare-name">Weekday Charges</h4>
                    <p className="fare-amout">₹466.40</p>
                </div>
               
                 <div className="fare-block" style={{marginTop: "-30px"}}>
                    <h4 className="fare-name">Security Deposit</h4>
                    <p className="fare-amout">₹0</p>
                </div>
                
                <div style={{ borderBottom:"1px solid gray",marginTop: "-10px"}}></div>

                <div className="fare-block">
                    <h4 className="fare-name">Total Fare</h4>
                    <h4 className="fare-amout">₹466.40</h4>
                </div>


                <div className="fare-block">
                   
                    <li style={{ marginTop: "-10px",fontFamily:"font-family: 'Open Sans', sans-serif" ,color:"gray",fontSize:"12px",fontweight:"bold"}}>This price is rounded off and is inclusive of GST</li>
                  
                </div>
               
                <div className="fare-block">
                    <span className="fare-name"><a style={{color:"black"}}>Have a Coupon ?</a> LOGIN</span>
                  
                </div>
            </div>
            
        </div>
    );
}

export default CarPriceD;