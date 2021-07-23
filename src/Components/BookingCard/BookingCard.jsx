import React from "react";
import styles from "./BookingCard.module.css"
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Divider } from "@material-ui/core";

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
                No upcoming bookings!
            </TabPanel>
            <TabPanel value={value} index={1}>
                No active bookings!
            </TabPanel>
            <TabPanel value={value} index={2}>
                No completed bookings!
            </TabPanel>
            <TabPanel value={value} index={3}>
                No cancelled bookings!
            </TabPanel>
        </div>
    )
}

export { BookingCard }