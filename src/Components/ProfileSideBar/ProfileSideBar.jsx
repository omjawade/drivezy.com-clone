import React from "react";
import Card from '@material-ui/core/Card';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import MeetingRoomOutlinedIcon from '@material-ui/icons/MeetingRoomOutlined';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import AccountBalanceOutlinedIcon from '@material-ui/icons/AccountBalanceOutlined';
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import styles from "./ProfileSideBar.module.css"
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { authUserLogOut } from "../../Redux/AuthReducer/AuthAction";

function ProfileSideBar() {

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const user=useSelector((state)=>state.auth.user)
    const {tab}=useParams()

    const history=useHistory()
    const dispatch= useDispatch()

    const handleTab=(tab)=>{
        history.replace(`/account/${tab}`)
    }

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    const handleLogout=()=>{
       dispatch(authUserLogOut())
      history.replace("/")
    }


    return (
        <Card className={styles.container1}>
            <h2>Hi {user?.name}</h2>
            <Divider />
            <div className={styles.list}>
                <List component="nav" aria-label="main mailbox folders">
                    <ListItem
                        button
                        selected={selectedIndex === 0}
                        onClick={(event) => handleListItemClick(event, 0)}
                    >
                        <ListItemIcon>
                            <AccountCircleOutlinedIcon style={{ fontSize: "175%"}} />
                        </ListItemIcon>
                        <ListItemText onClick={()=>handleTab("profile")} primary="My Profile" />
                    </ListItem>
                    <ListItem
                        button
                        selected={selectedIndex === 1}
                        onClick={(event) => handleListItemClick(event, 1)}
                    >
                        <ListItemIcon>
                            <MapOutlinedIcon style={{ fontSize: "175%" }} />
                        </ListItemIcon>
                        <ListItemText onClick={()=>handleTab("mybooking")}  primary="My Bookings" />
                    </ListItem>
                    <ListItem
                        button
                        selected={selectedIndex === 2}
                        onClick={(event) => handleListItemClick(event, 2)}
                    >
                        <ListItemIcon>
                            <AssignmentIndOutlinedIcon style={{ fontSize: "175%" }} />
                        </ListItemIcon>
                        <ListItemText primary="My Co-Drivers" />
                    </ListItem>
                    <ListItem
                        button
                        selected={selectedIndex === 3}
                        onClick={(event) => handleListItemClick(event, 3)}
                    >
                        <ListItemIcon>
                            <AccountBalanceWalletOutlinedIcon style={{ fontSize: "175%" }} />
                        </ListItemIcon>
                        <ListItemText primary="My Wallet" />
                    </ListItem>
                    <ListItem
                        button
                        selected={selectedIndex === 4}
                        onClick={(event) => handleListItemClick(event, 4)}
                    >
                        <ListItemIcon>
                            <AccountBalanceOutlinedIcon style={{ fontSize: "175%" }} />
                        </ListItemIcon>
                        <ListItemText primary="My Bank Details" />
                    </ListItem>
                    <ListItem
                        button
                        selected={selectedIndex === 5}
                        onClick={(event) => handleListItemClick(event, 5)}
                    >
                        <ListItemIcon>
                            <LockOutlinedIcon style={{ fontSize: "175%" }} />
                        </ListItemIcon>
                        <ListItemText primary="Change Password" />
                    </ListItem>
                    <ListItem
                        button
                        selected={selectedIndex === 6}
                        onClick={(event) => handleListItemClick(event, 6)}
                    >
                        <ListItemIcon>
                            <MeetingRoomOutlinedIcon style={{ fontSize: "175%" }} />
                        </ListItemIcon>
                        <ListItemText onClick={handleLogout} primary="Log out" />
                    </ListItem>
                </List>
            </div>
        </Card>
    )
}

export { ProfileSideBar }