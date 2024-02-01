import * as React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { ArrowBack } from '@mui/icons-material';

import classes from './Auth.module.css';

import { useDispatch } from 'react-redux';
import { login } from '../services/login';
import { signin } from '../services/signin';

import { setUser } from '../store';


function Auth() {
  // const userDetails = useSelector(state => state.login.user);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [isLoginMode, setIsLoginMode] = React.useState(false);
  const [name, setName] = React.useState('');
  const [surname, setSurname] = React.useState('');
  const [email, setEmail] = React.useState('claudia@email.com');


  const handleLogin = async () => {
    const res = await login(email);
    console.log('res:', res)
    if (res.status === 200) {
      dispatch(setUser(res.data));
      navigate('/');
    }
  }

  const handleSignin = async () => {
    const res = await signin({ name, surname, email });
    console.log('res:', res)
    if (res.status === 201) {
      dispatch(setUser(res.data));
      navigate('/');
    }
  }

  let changeAuthMode = 'Registra un nuovo account.';
  let authMode = 'Accedi';

  const registerModeContents = <>
    <TextField
      label="Nome"
      variant="outlined"
      onChange={event => setName(event.target.value)}
      sx={textField}
    />
    <TextField
      label="Cognome"
      variant="outlined"
      onChange={event => setSurname(event.target.value)}
      sx={textField}

    />
  </>;

  if (!isLoginMode) {
    authMode = 'Iscriviti'
    changeAuthMode = 'Ho già un account.';
  }

  return (
    <div className={classes.authPage}>
      <Link to='/' className={classes.link}>
        <Button
          variant='text'
          startIcon={<ArrowBack />}
          sx={textButtonStyle}
        >
          Torna alla Home
        </Button>
      </Link>
      <h1 className={classes.authPageTitle}>Accedi alla tua libreria</h1>

      {!isLoginMode && registerModeContents}

      <TextField
        label="Email"
        type="email"
        variant="outlined"
        onChange={event => setEmail(event.target.value)}
        sx={textField}

      />

      <Button
        variant="contained"
        onClick={isLoginMode ? handleLogin : handleSignin}
        sx={containedButtonStyle}
      >
        {authMode}
      </Button>

      <Button variant="text" onClick={() => setIsLoginMode(!isLoginMode)} sx={textButtonStyle}>{changeAuthMode}</Button>

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