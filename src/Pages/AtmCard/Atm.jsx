
import React ,{useState}from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import "./Atm.css"
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        width: '100%',
        '& > * + *': {
            marginTop: theme.spacing(2),
        },
    },
}));

export default function Atm({ toogle,setEditModalIsOpen }) {


    var obj1 = {
        name: "",
 
        card: "",
        month: "",
        cvv: "",
    };

    const [query, setQuery] = useState(obj1);

    const { name,  card, month, cvv } = query;


 

  const handleChange = (e) => {
      e.preventDefault()
    const { name, value } = e.target;

    setQuery({
      ...query,
      [name]: value,
    });
  };
    console.log(toogle)
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleOpen = () => {
        if (toogle) {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };


    
  const handleAdd = () => {
    console.log(query);
    if(
      query.name !== "" &&
      query.card !== "" &&
      query.cvv !== "" &&
     
      query.month !== ""
    ) {



       setEditModalIsOpen(true);
        alert("Payment Successful")
        


    } else {
      if (query.name === "") {
        alert("Please Enter Name");
      } else if (query.card === "") {
        console.log(query);
        alert("Please Enter Card Number");
      } else if (query.card === "") {
        alert("Please Enter Valid Card Digit");
      } else if (query.cvv === "") {
        alert("Please Enter CVV");
      }else if (query.month === "") {
        alert("Please Enter Month details properly");
      } 
    }
  };

    return (
      <div>
        <div>
          <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
              timeout: 500,
            }}
          >
            <div className="atmHead-1">
              <div className="atmHead-2">
                <div>
                  <img
                    src="https://razorpay.com/assets/upi-autopay/logo-mobile.png"
                    alt=""
                    style={{ height: "72px", width: "240px" }}
                  />
                </div>
              </div>

              <div className="container234">
                
                <div className="fontuser321">
                  <input
                    type="text"
                    onChange={handleChange}
                    value={name}
                    name="name"
                    placeholder="Your Name"
                    className="Atm-inputonee"
                  />
                  <i className="fa fa-user fa-lg"></i>
                </div>
                <br />
                <div className="fontuser321">
                  <input
                    type="number"
                    onChange={handleChange}
                    value={card}
                    name="card"
                    placeholder="Card Number"
                    className="Atm-inputonee"
                  />
                  <i className="fa fa-credit-card"></i>
                </div>
            
                <br />
                <div className="fontpassword321">
                  <input 
                  type="password"
                  onChange={handleChange}
                  value={cvv}
                  name="cvv"
                  placeholder="CVV" className="Atm-inputonee" />
                  <i className="fa fa-lock"></i>
                </div>
                <br />
                <div className="fontpassword321">
                  <input
                    type="number"
                    onChange={handleChange}
                    value={month}
                    name="month"
                    placeholder="Exp Date"
                    className="Atm-inputonee"
                  />
                  <i className="fa fa-calendar"></i>
                </div>
                <br /> <br />
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  style={{ marginLeft: "140px", backgroundColor: "#528FF0" }}
                  
                  onClick={handleAdd}
                >
                  CONFIRM TO PAY
                </Button>
                <br /> <br />
              </div>
            </div>
          </Modal>
      
        </div>

      
      </div>
    );
}
