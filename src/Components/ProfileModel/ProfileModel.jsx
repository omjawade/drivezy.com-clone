import React from "react";
import Popper from "@material-ui/core/Popper";
import Card from "@material-ui/core/Card";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import MeetingRoomOutlinedIcon from "@material-ui/icons/MeetingRoomOutlined";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import AssignmentIndOutlinedIcon from "@material-ui/icons/AssignmentIndOutlined";
import AccountBalanceOutlinedIcon from "@material-ui/icons/AccountBalanceOutlined";
import AccountBalanceWalletOutlinedIcon from "@material-ui/icons/AccountBalanceWalletOutlined";
import styles from "./ProfileModel.module.css"
import { makeStyles } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authUserLogOut } from "../../Redux/AuthReducer/AuthAction";

const useStyle= makeStyles({
    profile:{

    }
})

function Profile() {
  const [anchorE4, setAnchorE4] = React.useState(null);

  const handleClick4 = (event) => {
    setAnchorE4(anchorE4 ? null : event.currentTarget);
  };

  const history= useHistory()
  const dispatch= useDispatch()

  const handleLogout=()=>{
      dispatch(authUserLogOut())
  }

  const handleRedirect=(url)=>{
  history.push(`/account/${url}`)
  }
  const open4 = Boolean(anchorE4);
  const id4 = open4 ? "simple-popper" : undefined;

  return (
    <>
   <div className={styles.profile_div}>
     
        <Card>
          <List component="nav" aria-label="main mailbox folders">
            <ListItem button>
              <ListItemIcon>
                <AccountCircleOutlinedIcon style={{ fontSize: "175%" }} />
              </ListItemIcon>
              <ListItemText onClick={()=> handleRedirect("profile")} primary="My Profile" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MapOutlinedIcon style={{ fontSize: "175%" }} />
              </ListItemIcon>
              <ListItemText onClick={()=> handleRedirect("mybooking")} primary="My Bookings" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AssignmentIndOutlinedIcon style={{ fontSize: "175%" }} />
              </ListItemIcon>
              <ListItemText primary="My Co-Drivers" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AccountBalanceWalletOutlinedIcon
                  style={{ fontSize: "175%" }}
                />
              </ListItemIcon>
              <ListItemText primary="My Wallet" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AccountBalanceOutlinedIcon style={{ fontSize: "175%" }} />
              </ListItemIcon>
              <ListItemText primary="My Bank Details" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <LockOutlinedIcon style={{ fontSize: "175%" }} />
              </ListItemIcon>
              <ListItemText primary="Change Password" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <MeetingRoomOutlinedIcon style={{ fontSize: "175%" }} />
              </ListItemIcon>
              <ListItemText onClick={handleLogout} primary="Log out" />
            </ListItem>
          </List>
        </Card>
    
      </div>
    </>
  );
}

export { Profile };
