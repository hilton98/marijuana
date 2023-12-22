'use client'

import { 
    Alert,
    AlertProps,
    Snackbar,
} from '@mui/material';


interface NofiticationData {
    message: string;
    severity: AlertProps['severity'];
    open: boolean;
    handleClose: () => void;
}

export default function NotificationForm(props: NofiticationData) {

    return (
    <Snackbar 
        open={props.open}
        autoHideDuration={1500}
        onClose={props.handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        <Alert onClose={props.handleClose} severity={props.severity} sx={{ width: '100%' }}>
            {props.message}
        </Alert>
    </Snackbar>
    )
}