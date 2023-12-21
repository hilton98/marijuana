'use client'

import { 
    TextField,
    Button,
    Box,
    Typography, 
    FormControl
} from '@mui/material';
import { 
    boxFormItems,
    containerFormLogin,
    itemsFormLogin 
} from './styles';
import { signIn } from 'next-auth/react';
import { SyntheticEvent, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
    const [email, setEmail] = useState<String>('')
    const [password, setPassword] = useState<String>('')
    const router = useRouter()

    async function onSubmit(event: SyntheticEvent) {
        event.preventDefault();
        const result = await signIn('credentials', {
            email,
            password,
            redirect: false
        });
        if (result?.error) {
            console.log(result);
            return;
        }
        console.log("tudo certo", result)
        router.replace('/profile');
    }

    return (
        <>
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