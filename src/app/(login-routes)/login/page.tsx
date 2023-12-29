'use client'


import { boxFormItems, containerFormLogin, itemsFormLogin } from './styles';
import { SyntheticEvent, useState } from 'react';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import NotificationForm from '@/app/components/notificationForm';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { AlertProps } from '@mui/material/Alert';

export default function Login() {
    const [severity, setSeverity] = useState<AlertProps['severity']>('warning')
    const [open, setOpen] = useState<boolean>(false);
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const router = useRouter()

    const callNotification = (message: string, typeSeverity: AlertProps['severity']) => {
        setMessage(message)
        setSeverity(typeSeverity);
        setOpen(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
          return;
        }
        setOpen(false);
    };

    async function onSubmit(event: SyntheticEvent) {
        event.preventDefault();
        const result = await signIn('credentials', {
            email,
            password,
            redirect: false
        });

        if (result?.error) {
            callNotification(
                "Invalid credentials!",
                "warning"
            );
            return;
        }
        router.replace('/profile');
    }

    return (
        <>
        <NotificationForm 
            message={message}
            severity={severity}
            open={open}
            handleClose={handleClose}
        />
        <Box style={containerFormLogin}>
            <form onSubmit={onSubmit}>
                <Box style={boxFormItems}>
                    <Typography style={itemsFormLogin} variant="h4">Login</Typography>
                    <TextField 
                        style={itemsFormLogin}
                        onChange={(e) => setEmail(e.target.value)}
                        label="Email"
                        name="email"
                    />
                    <TextField 
                        style={itemsFormLogin}
                        onChange={(e) => setPassword(e.target.value)}
                        label="Password"
                        name="password"
                        type="password" />
                    <Box style={itemsFormLogin} sx={{gap:"10px"}}>
                        <Button sx={{ width:"100px", backgroundColor: "black"}} variant="contained" type='submit'>Entrar</Button>
                    </Box>
                </Box>
            </form>
        </Box>
        </>
    )
}