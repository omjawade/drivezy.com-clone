import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';
import { FormControl, InputLabel, makeStyles, withStyles } from '@material-ui/core';
import React from "react"
const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));
function FuelInfo(props) {

    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
      setAge(event.target.value);
    };
    return (
        <div>
            <p className="car-name1">Fuel Package</p>


            <div style={{display:"flex"}}>

            <div style={{border:"1px solid #77899b",height:"20px",marginTop:"30px",padding:"10px",backgroundColor:"#ecf0f5"}}>
                <a style={{color: "#77899b"}}>Selected Package</a>
            </div>
            <div>
            <FormControl className={classes.margin} >
              <InputLabel  >Fuel</InputLabel>
             <NativeSelect
            id="demo-customized-select-native"
            value={age}
            onChange={handleChange}
            input={<BootstrapInput />}
            style={{width:"200px"}}
          
        >
          <option aria-label="None" value="" />
          <option value={10}>60 km</option>
          <option value={20}>120 km</option>
          <option value={30}>180 km</option>
          <option value={40}>No Fuel</option>
        </NativeSelect>
      </FormControl>
      <br/>
    
     
            </div>
        
            </div>
        </div>
    );
}

export default FuelInfo;