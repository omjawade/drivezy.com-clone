import React from 'react';
import CarDetailsI from './CarDetailsI';
import CarPriceD from './CarPriceD';
import "./CarDetail.css"
import FooterPay from './FooterPay';
import { NavBar } from '../../Components/NavBar/NavBar';
import "./CarDetail.css";
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCar } from '../../Redux/SingleHotel/action';

const PaymentConfirm = ()=> {

    let params = new URLSearchParams(document.location.search.substring(1));
    let vehicle = params.get("vehicle");


    const {id} = useParams()

    const data = useSelector((state) => state.singleCars.data);
    console.log(data,"anil")

    const dispatch = useDispatch()

    useEffect(()=>{

        dispatch(getCar(vehicle,id))

    },[vehicle,id])

    return (
       <div>
        <div style={{position: 'fixed',top:0,width:"100%",backgroundColor:"white"}}>
        {/* <NavBar /> */}
        {/* <TopBar/> */}
        </div>
        <div className="Header-Parent">
      
            <CarDetailsI   data={data}/>
            <CarPriceD data={data}/>
        </div>
       
        <div >
        <FooterPay data={data} />
        </div>

       </div>
    );
}

export  {PaymentConfirm}