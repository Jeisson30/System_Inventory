import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { Grid, Card, CardContent, TextField, Button  } from '@mui/material';
import Swal from 'sweetalert2';

const Login = () => {

    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('')

    const onLogin = async () => {

        if (!email || !password) {
            Swal.fire({
                icon: 'warning',
                text: 'Por favor, complete todos los campos.',
                confirmButtonColor: '#3498db'
            });
            return;
        }
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: `Bienvenido ${userCredential.user.displayName}`,
                showConfirmButton: false,
                timer: 2000
            }); 
            navigate('/Home');  
            } catch (error) {
                if (error.code === 'auth/invalid-credential') {
                    Swal.fire({
                        icon: 'error',
                        text: 'Correo electrónico o contraseña incorrectos.',
                        confirmButtonColor: '#3498db'
                    });        
                } 
            console.log('Error en el inicio de sesión:', error);
        }    
    }

    return (
        <div>
            <h1>INICIAR SESION</h1>
            <Grid container spacing={2} justifyContent="center" alignItems="flex-start" style={{ marginTop: 50 }}>
                <Card elevation={3} style={{ backgroundColor: '#e6f7ff', width: '80%', maxWidth: 400 }}>
                    <CardContent>
                        <TextField id="outlined-email" label="Correo" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value) } fullWidth style={{ marginBottom: 15 }}/>
                        <TextField id="outlined-pass" type="password" label="Contraseña" value={password}  onChange={(e) => setPassword(e.target.value)} variant="outlined" fullWidth />
                        <Link to="/Register">
                            <Button variant="contained" color="primary" style={{ width: '100%', marginTop: 10 }}>
                                Registrarse
                            </Button>
                        </Link>
                        <Link>
                            <Button variant="contained" color="primary"  onClick={onLogin} style={{ width: '100%', marginTop: 10 }}>
                                Iniciar Sesión
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}
export default Login;