
import React, { useState } from 'react';
import "./CarDetail.css";
function FooterPay(props) {


    var initialobj = {
        married: false
      };
    const [checkn,notCheckn] = useState(initialobj)

    const { married} = checkn

    const handlechange = (e) => {
        const { name, value, type, checked } = e.target;
    
        let val = type === "checkbox" ? checked : value;
    
        notCheckn({
          ...checkn,
          [name]: val
        });
      };

    
    console.log(checkn,{married})
 
      
    
    return (
        <div className="footerpaypage">
            <div style={{backgroundColor:"white",border:"1px solid whitesmoke",height:"100px",display:"flex", boxShadow:" 0 2px 8px -2px rgb(31 45 61 / 40%)",}}>

                <div style={{
                width:"790px",marginLeft:"100px",marginTop:"40px",display:"flex"}}>
                    <div>
                    <input 
                  value={married}
                  name="married"
                  type="checkbox"
                  placeholder="write married"
                  onChange={handlechange}
                   style={{padding:"10px",height:"20px",width:"20px",marginRight:"60px"}}
                   />
                    </div>
                   <p style={{marginTop:"-10px",marginRight:"10px",width:"1700px"}}>Rider, You are just one step away from confirming your booking. Confirm that you are above 18 and you agree to all the terms mentioned 
                       in <a href="" style={{color:"orange"}}>Terms & Conditions</a></p>
                </div>


                <div style={{display:"flex",marginLeft:"4px",marginTop:"13px"}}>
                    <p>To Pay 700 <br/>
                    <a style={{color:"gray"}}>Show Breakup</a></p>


                    {married ?  <div style={{marginTop:"20px",marginLeft:"5px"}}>
                    <button style={{borderRadius:"6px",height:"40px",width:"240px",color:"gray",backgroundColor:" white",border:"1px solid gray"}}>
                        Add To Cart
                    </button>

                    <button  style={{marginLeft:"20px",borderRadius:"6px",height:"40px",width:"240px",color:"gray",backgroundColor:"#dde2e8",border:"1px solid gray"}} >
                        Quick Book
                    </button>
                    
                    </div>: <div style={{marginTop:"20px",marginLeft:"5px",display:"flex"}}>
                    <button style={{borderRadius:"6px",height:"40px",width:"240px",color:"gray",backgroundColor:" white",border:"1px solid gray"}}>
                        Add To Cart
                    </button>

                    <button disabled style={{marginLeft:"20px",borderRadius:"6px",height:"40px",width:"240px",color:"gray",backgroundColor:"whitesmoke",border:"1px solid gray"}} >
                        Quick Book
                    </button>
                   
                    </div> }
                   
                </div>
            
             
            
            </div>
            
        </div>
    );
}

export default FooterPay;