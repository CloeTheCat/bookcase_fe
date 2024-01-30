import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import classes from './Auth.module.css';

import { login } from '../services/login.js';

function Auth() {
    const [email, setEmail] = React.useState('');
    const [isLogin, setIsLogin] = React.useState(true);

    const handleLogin = async () => {
        const res = await login()
        // console.log('res:',res)
    }

    let changeAuthMode = 'Registra un nuovo account.';
    let authMode = 'Login';
    const registerMode = <>
        <TextField 
          label="Nome" 
          variant="outlined" 
          onChange={event => setEmail(event.target.value)}
          sx={textField}
        />
        <TextField 
          label="Cognome" 
          variant="outlined" 
          onChange={event => setEmail(event.target.value)}
          sx={textField}

        />
      </>;

    if (!isLogin) {
      authMode = 'Iscriviti'
      changeAuthMode = 'Ho già un account.';
    }

    return (
      <div className={classes.authPage}>
        <h1 className={classes.authPageTitle}>Accedi alla tua libreria</h1>
        <h1>{email}</h1>

        {!isLogin && registerMode}

        <TextField 
          label="Email" 
          variant="outlined" 
          onChange={event => setEmail(event.target.value)}
          sx={textField}

        />

        <Button variant="contained" onClick={handleLogin} sx={containedButtonStyle}>{authMode}</Button>

        <Button variant="text" onClick={() => setIsLogin(!isLogin)} sx={textButtonStyle}>{changeAuthMode}</Button>

      </div>
    );
  }
  
  const containedButtonStyle = {
    backgroundColor: 'darkolivegreen', 
    marginLeft: '0.5rem',
    display: 'block',
    margin: 'auto',
    '&:hover': {
      backgroundColor: 'darkolivegreen'
    }
  }

  const textButtonStyle = {
    color: 'darkolivegreen', 
    fontWeight: 700,
    marginLeft: '0.5rem',
    display: 'block',
    margin: '0.5rem auto',
    '&:hover': {
      backgroundColor: 'rgba(85, 107, 47, 0.1)'
    }
  }

  const textField = {
    width: '70%',
    maxWidth: '400px',
    margin: '1rem 15%',
    '& label.Mui-focused': {
      color: 'darkolivegreen',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'darkolivegreen',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'darkolivegreen',
      },
      '&:hover fieldset': {
        borderColor: 'darkolivegreen',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'darkolivegreen',
      },
    }
};

  export default Auth;