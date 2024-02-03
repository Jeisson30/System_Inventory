import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Grid, Card, CardContent, TextField, Button  } from '@mui/material';
import Swal from 'sweetalert2';

const Login = () => {

    const [user, setUser] = useState('Jeisson');

    const onLogin = () => {
        setUser(user)
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Bienvenido ${user}`,
            showConfirmButton: false,
            timer: 1500
          });
    }

    return (
        <div>
            <h1>INICIAR SESION</h1>
            <Grid container spacing={2} justifyContent="center" alignItems="flex-start" style={{ marginTop: 50 }}>
                <Card elevation={3} style={{ backgroundColor: '#e6f7ff', width: '80%', maxWidth: 400 }}>
                    <CardContent>
                        <TextField id="outlined-email" label="Correo" variant="outlined"  fullWidth style={{ marginBottom: 15 }}/>
                        <TextField id="outlined-pass" type="password" label="Contraseña" variant="outlined" fullWidth />
                        <Link to="/Register">
                            <Button variant="contained" color="primary" style={{ width: '100%', marginTop: 10 }}>
                                Registrarse
                            </Button>
                        </Link>
                        <Link to="/Home">
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