import { Snackbar, Alert } from '@mui/material';


const ErrorAlert = (props: {isOpen: boolean,message: string , onClose: (isOpen: boolean)=> void}) => {
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        props.onClose(false);
    };

    return (
        <div>
            <Snackbar
                sx={{ paddingTop: "5vh"}}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }} 
                open= {props.isOpen}
                onClose = {handleClose}
                autoHideDuration={3000}
            >
                <Alert severity="error">
                    {props.message}
                </Alert>
            </Snackbar>
        </div>
    );
};

export default ErrorAlert;
