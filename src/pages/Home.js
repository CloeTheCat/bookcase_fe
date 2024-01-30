import { useState } from 'react';
import classes from './Home.module.css'
import { Button } from '@mui/material';
import SearchBar from '../components/SearchBar';
import BooksGrid from '../components/BooksGrid';


// cambio pagina se il login è stato effettuato

function Home() {
    const [ isLoggedIn, setIsLoggedIn ] = useState(true);

    let mainContent = <>
        <h2 className={classes.homeTitle}>Crea la tua <span className={classes.highlightedWord}>libreria</span> personale</h2>
        <Button variant="contained" >Login</Button>
    </>;

    if (isLoggedIn) {
        return <>
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

export default Home;
