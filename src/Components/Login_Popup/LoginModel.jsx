
import React from 'react';
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import styles from "./LoginModel.module.css";
import CloseIcon from '@material-ui/icons/Close';
const LoginModel = ({ openLogin, handleCloseLogin }) => {


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
                <div className={styles.title}>
                    <h4>Login/SignUp</h4>
                    <CloseIcon className={styles.close_icon} />
                </div>
            </Paper>

        </Modal>


    );
};

export default LoginModel;