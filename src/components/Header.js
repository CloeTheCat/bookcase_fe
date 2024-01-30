import Button from '@mui/material/Button';
import classes from './Header.module.css';

// aggiungere funzioni e variabili del login e logout

function Header() {
    return <header>
        <h1 className={classes.headerTitle}>libreria</h1>
        <div className={classes.user}>
            <span>Nome utente</span>
            <Button variant="text" className={classes.userAuthButton} sx={buttonStyle}>Logout</Button>
        </div>
        <div className={classes.headerImg}></div>
    </header>
}

const buttonStyle = {
    color: 'darkolivegreen', 
    fontWeight: 700,
    marginLeft: '0.5rem',
    '&:hover': {
        backgroundColor: 'rgba(85, 107, 47, 0.1)'
    }
}

export default Header;