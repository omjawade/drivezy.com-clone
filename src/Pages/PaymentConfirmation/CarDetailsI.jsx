import React from 'react';
import Address from './Address';
import FuelInfo from './FuelInfo';
import Templete from './Templete';

function CarDetailsI(props) {
    return (
        <div >

          <div className="Car-detail-maindiv">
              <div>
              <br/>         
                  <div style={{display:"flex"}}>
                      <div style={{padding:"10px"}}>
                           <h2 className="car-name1">Maruti Suzuki Wagon R VXi (Manual)</h2>

                           <div className="features-block1">
                               <img src="https://drivezy.com/static/media/Manual.da2da54d.svg" alt="" className="car-features1"/>
                               <p style={{marginLeft:"5px"}}>Manual</p>
                               <img src="https://drivezy.com/static/media/seats.b777050d.svg" alt="" className="car-features1"/>

                               <p style={{marginLeft:"5px"}}>seat5 Seater </p>
                               <img src="https://drivezy.com/static/media/fuel.5001188a.svg" alt="" className="car-features1"/>
                               <p style={{marginLeft:"5px"}}>fuelPetrol</p>
                           </div>
                           <p style={{ marginTop:"-2px",fontFamily:"font-family: 'Open Sans', sans-serif" ,color:"gray",fontSize:"12px",fontweight:"bold"}}>Note: This image is for representation purpose only. The colour of the actual vehicle may differ.</p>
                           <br/>
                      </div>
                  

                      <div style={{padding:"10px",height:"50px",marginLeft:"120px"}}>
                          <img src="https://jtride-data.s3.ap-south-1.amazonaws.com/uploads/1558701323_wagon-r.png" alt=""  style={{height:"150px"}}/>
                      </div>

                      
                  </div>
                  <div style={{ borderBottom:"0.2px solid gray",marginTop: "-10px"}}></div>
                  <FuelInfo />

                  <br/>

                  <p style={{ marginTop:"-2px",fontFamily:"font-family: 'Open Sans', sans-serif" ,color:"gray",fontSize:"12px",fontweight:"bold"}}>  <p style={{ marginTop:"-2px",fontFamily:"font-family: 'Open Sans', sans-serif" ,color:"gray",fontSize:"12px",fontweight:"bold"}}>            There is no travel limit. ₹2/km distance charge will be applied over the booking amount. Fuel bills are not reimbursed in this package.</p></p>

                  <br/>
                  <div style={{ borderBottom:"0.2px solid gray",marginTop: "-10px"}}></div>
                  <br/>
                  <Address />
                  <hr/>
                  <Templete />
                  <br/><br/><br/><br/><br/><br/><br/><br/>
              </div>
             
          </div>
        
        </div>
    );
}

export default CarDetailsI;