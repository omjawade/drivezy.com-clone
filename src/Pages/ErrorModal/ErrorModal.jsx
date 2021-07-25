
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

import { Alert, AlertTitle } from '@material-ui/lab';
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

export default function ErrorModal({ toogle }) {

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
                    <Fade in={open}>
                        <div className={classes.paper}>
                            <br/>     <br/>     <br/>
                            <Alert severity="error">
                                <AlertTitle>Alert</AlertTitle>
                                Sorry Your are not Sign in — <strong>Sign in too Continue Booking!</strong>
                            </Alert>
                            <br/>     <br/>     <br/>
                        </div>
                    </Fade>
                </Modal>
            </div>
        </div>
    )
}
