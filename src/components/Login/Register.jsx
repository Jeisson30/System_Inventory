import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../../firebaseConfig';
import { Grid, Card, CardContent, TextField, Button  } from '@mui/material';
import Swal from 'sweetalert2';

const Register = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const onRegister = async () => {
        console.log('auth: ', JSON.stringify(auth));    
        try {
            const userCredential = await createUserWithEmailAndPassword( auth, email, password)

            await updateProfile(userCredential.user, { displayName: name })
            Swal.fire({
                icon: 'success',
                title: '¡Registro exitoso!',
                text: 'Ahora puedes iniciar sesión con tu cuenta.',
                confirmButtonColor: '#3498db'
              });
            console.log('Usuario registrado:', JSON.stringify(userCredential));
            navigate('/');
        } catch (error) {
            if (error.code === 'auth/email-already-in-use') {
                Swal.fire({
                  icon: 'warning',
                  text: 'El correo electrónico ya está en uso',
                  confirmButtonColor: '#3498db'
                });
              } else if (error.code === 'auth/weak-password'){
                    Swal.fire({
                        icon: 'warning',
                        text: 'La contraseña debe ser de minimo 6 caracteres',
                        confirmButtonColor: '#3498db'
                    });
            }
            else {
                Swal.fire({
                  icon: 'error',
                  title: 'Error en el registro',
                  confirmButtonColor: '#3498db'
                });
            } 
            console.error('Error al registrar el usuario:', error.message);
        }
    }

    return(
        <div>
            <h1>Registro</h1>
            <Grid container spacing={2} justifyContent="center" alignItems="flex-start" style={{ marginTop: 50 }}>
                <Card elevation={3} style={{ backgroundColor: '#e6f7ff', width: '80%', maxWidth: 400 }}>
                    <CardContent>                        
                        <TextField id="outlined-name" label="Nombre" variant="outlined"  value={name}  onChange={(e) => setName(e.target.value)} fullWidth style={{ marginBottom: 15 }}/>
                        <TextField id="outlined-email" label="Correo" variant="outlined"  value={email}  onChange={(e) => setEmail(e.target.value)} fullWidth style={{ marginBottom: 15 }}/>
                        <TextField id="outlined-pass" type="password" label="Contraseña" variant="outlined" value={password}  onChange={(e) => setPassword(e.target.value)} fullWidth />
                        <Link to="/Register">
                            <Button onClick={onRegister} variant="contained" color="primary" style={{ width: '100%', marginTop: 10 }}>
                                Registrarse
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </Grid>
        </div>
    )
}
export default Register;