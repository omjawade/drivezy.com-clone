import { Button, Card } from '@material-ui/core';
import React from 'react';
import { useDispatch } from 'react-redux';
import { cancelBokking } from '../../Redux/SingleHotel/action';
import styles from "./BookedCard.module.css"
const BookedCard = ({Card}) => {
    
    const vehicle= Card?.bikeID!==null?Card?.bikeID:Card?.carID


    const dispatch=useDispatch()

    const handleCancel=()=>{
        const id=Card._id
        const userid=Card.user
        const payload={
            status:false
        }
        dispatch(cancelBokking(payload,id,userid))
    }

    return (
        <div className={styles.container}>
         <div className={styles.image}>
             <img src={vehicle?.Image} alt="" />
         </div>
         <div className={styles.info}>
             <h3>{vehicle?.Title}</h3>
             <div>
                 <p>Pickup Date: <br /> <span>{Card.pickup}</span></p>
                 <p> Drop Date: <br /> <span>{Card.drop}</span></p>
             </div>
             <p>Price: <span>{Card.price}</span></p>
         </div>
         <div className={styles.buttons} >
             <Button variant="outlined"  className={styles.view}>View</Button>
             <Button onClick={handleCancel} variant="contained" className={styles.cancel} disabled={!Card?.status}>{Card?.status?"Cancel":"Cancelled"}</Button>
             </div>    
        </div>
    );
};

export default BookedCard;