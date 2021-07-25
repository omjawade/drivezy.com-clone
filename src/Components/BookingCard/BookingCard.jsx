import React from "react";
import styles from "./BookingCard.module.css"
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Card, Divider } from "@material-ui/core";
import { useSelector } from "react-redux";
import { Bookmark } from "@material-ui/icons";
import BookedCard from "../BookedCard/BookedCard";

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function BookingCard() {

    const [value, setValue] = React.useState(0);
    const booked= useSelector((state)=>state.singleCars.booked)

    // const vehicle= booked?.carID!==null? booked.carID:booked.bikeID

   const upcomming= booked?.filter((card)=> card.status===true)
   const cancelled= booked?.filter((card)=> card.status===false)
    console.log(booked,"book");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={styles.message}>
            <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                <Tab label="Upcoming" {...a11yProps(0)} />
                <Tab label="Active" {...a11yProps(1)} />
                <Tab label="Completed" {...a11yProps(2)} />
                <Tab label="Cancelled" {...a11yProps(3)} />
            </Tabs>
            <Divider />
            <TabPanel value={value} index={0}>
              {
                  upcomming?.map((card)=>
                    <BookedCard  Card={card} />
                   
                  )
              }
              {
                  !upcomming&&<h4>No active bookings!</h4>
                
              }
              {
                    upcomming.length==0&&<h4>No active bookings!</h4>
              }
            </TabPanel>
            <TabPanel value={value} index={1}>
            <h4>No active bookings!</h4>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <h4>No active bookings!</h4>
            </TabPanel>
            <TabPanel value={value} index={3}>
            {
                  cancelled?.map((card)=>
                    <BookedCard  Card={card} />
                   
                  )
              }
                  {
                  !cancelled&&<h4>No active bookings!</h4>
                
              }
              {
                    cancelled.length==0&&<h4>No active bookings!</h4>
              }
            </TabPanel>
        </div>
    )
}

export { BookingCard }