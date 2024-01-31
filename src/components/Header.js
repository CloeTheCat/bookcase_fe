import Button from '@mui/material/Button';
import classes from './Header.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../store'


function Header() {
  const userDetails = useSelector(state => state.login.user);
  const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return <header>
        <h1 className={classes.headerTitle}>libreria</h1>
        {userDetails !== null && <div className={classes.user}>
            <span>{userDetails.name} {userDetails.surname}</span>
            <Button 
                variant="text" 
                className={classes.userAuthButton} 
                sx={buttonStyle}
                onClick={handleLogout}
            >
                Logout
            </Button>
        </div>}
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