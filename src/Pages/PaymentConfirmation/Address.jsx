import React from 'react';

function Address({data}) {

    var currentDate= new Date()
    
    var month = currentDate.getMonth() 
    
    var years =  currentDate.getFullYear()
    return (
        <div style={{display:"flex"}}>

            <div style={{width: "360px"}}>
                <h4>Pick Up & Drop</h4>
                <div style={{display:"flex"}}>
                <a style={{fontSize:"30px"}}> {month}  </a>
                <p style={{marginLeft:"10px"}}> Jan {years}</p>
                </div>
             

                <div style={{display:"flex"}}>
                <img src="https://drivezy.com/static/media/location_icon.a7c35c82.svg" alt="" />
            
                </div>
             


            </div>

            <div>
            <div style={{ borderBottom:"0.2px solid gray",marginTop: "-10px",marginLeft:"45px"}}></div>
                <p style={{border:"1px solid gray",padding:"15px",borderRadius:"25px",marginLeft:"40px"}}>Duration 8h</p>
                <div style={{ borderBottom:"0.2px solid gray",marginTop: "-10px",marginLeft:"40px"}}></div>
            </div>

            <div style={{width: "360px",marginLeft:"20px",textAlign:"right"}}>
            <h4>Pick Up & Drop</h4>
               
                <div style={{display:"flex",marginLeft:"270px"}}>
                <a style={{fontSize:"30px"}}> {month}  </a>
                <p style={{marginLeft:"10px"}}> Jan {years}</p>
                </div>
                <div style={{display:"flex",marginLeft:"230px"}}>
                <img src="https://drivezy.com/static/media/location_icon.a7c35c82.svg" alt="" />
           
                </div>

       

            </div>
           
            
        </div>
    );
}

export default Address;