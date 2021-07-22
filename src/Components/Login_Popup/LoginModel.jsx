
import React from 'react';
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import styles from "./LoginModel.module.css"
const LoginModel = ({openLogin,handleCloseLogin}) => {
    

    return (
 
              <Modal
        open={openLogin}
        onClose={handleCloseLogin}
        className={styles.login_model}
        disablePortal
        disableEnforceFocus
        disableAutoFocus
      >
   <Paper>
       <h1>hi</h1>
   </Paper>

      </Modal>
           
       
    );
};

export default LoginModel;