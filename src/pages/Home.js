import classes from './Home.module.css'
import { Button } from '@mui/material';
import SearchBar from '../components/SearchBar';
import BooksGrid from '../components/BooksGrid';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

// cambio pagina se il login è stato effettuato

function Home() {
    const isLoggedIn = useSelector(state => state.login.user)

    let mainContent = <>
        <h2 className={classes.homeTitle}>Crea la tua <span className={classes.highlightedWord}>libreria</span> personale</h2>
        <Link to={'/auth'}>
            <Button variant="contained" sx={buttonStyle}>Accedi</Button>
        </Link>
    </>;

    if (isLoggedIn !== null) {
        mainContent = <>
            <SearchBar />
            <BooksGrid />
        </>
    }
    
    return (
        <main>
            {mainContent}
        </main>
    );
}

const buttonStyle = {
    backgroundColor: 'darkolivegreen', 
    '&:hover': {
        backgroundColor: 'darkolivegreen',
    }
}

export default Home;
