import React from 'react';

function Address(props) {

    var currentDate= new Date()


    
    
    var month = currentDate.getMonth() 
    
    var years =  currentDate.getFullYear()
    return (
        <div style={{display:"flex"}}>

            <div style={{width: "360px"}}>
                <h3>Pick Up & Drop</h3>
                <p>{month} Jan 2022</p>

                <div style={{display:"flex"}}>
                <img src="https://drivezy.com/static/media/location_icon.a7c35c82.svg" alt="" />
                <p>Pune</p>
                </div>
             

                <h6 style={{color:"gray"}}>Opposite New India School ,Gali Number 4, Right Bhusari Colony, Kothrud, Pune 411038 - "Home Delivery Service Available - "Free Home Delivery for Long Term Bookings"
                    - 9923786464</h6>

            </div>

            <div>
            <div style={{ borderBottom:"0.2px solid gray",marginTop: "-10px",marginLeft:"45px"}}></div>
                <p style={{border:"1px solid gray",padding:"15px",borderRadius:"25px",marginLeft:"40px"}}>Duration 8h</p>
                <div style={{ borderBottom:"0.2px solid gray",marginTop: "-10px",marginLeft:"40px"}}></div>
            </div>

            <div style={{width: "360px",marginLeft:"20px",textAlign:"right"}}>
                <h3>Pick Up & Drop</h3>
                <p>{month} Jan 2022</p>
                <div style={{display:"flex",marginLeft:"300px"}}>
                <img src="https://drivezy.com/static/media/location_icon.a7c35c82.svg" alt="" />
                <p>Pune</p>
                </div>

                <h6 style={{color:"gray"}}>Opposite New India School ,Gali Number 4, Right Bhusari Colony, Kothrud, Pune 411038 - "Home Delivery Service Available - "Free Home Delivery for Long Term Bookings"
                    - 9923786464</h6>

            </div>
           
            
        </div>
    );
}

export default Address;