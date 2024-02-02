import classes from './Home.module.css'
import { Button } from '@mui/material';
import SearchBar from '../components/SearchBar';
import BooksGrid from '../components/BooksGrid';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { booksByUser } from '../services/booksByUser';
import { searchBookByTitle } from '../services/searchBookByTitle';

function Home() {
    const userDetails = useSelector(state => state.login.user)

    const [userBooks, setUserBooks] = useState([]);
    const [searchedBooks, setSearchedBooks] = useState([]);
    const [searchedTitle, setSearchedTitle] = useState('');
    const [updateBooks, setUpdateBooks] = useState(true);


    useEffect(() => {
        userDetails && booksByUser(userDetails.id_user)
            .then((res) => {
                setUserBooks(res.data)
            });
    }, [updateBooks]);

    useEffect(() => {
        userDetails
            && searchedTitle !== ''
            && searchBookByTitle({ id_user: userDetails.id_user, typedString: searchedTitle, offset: 0, limit: 100 })
                .then((res) => {
                    setSearchedBooks(res.data)
                });
    }, [searchedTitle, updateBooks]);

    let mainContent = <>
        <h2 className={classes.homeTitle}>
            Crea la tua <span className={classes.highlightedWord}>libreria</span> personale
        </h2>
        <Link to={'/auth'}>
            <Button variant="contained" sx={buttonStyle}>Accedi</Button>
        </Link>
    </>;

    if (userDetails !== null) {
        mainContent = <>
            <SearchBar setSearchText={text => setSearchedTitle(text)} />
            {userBooks.length > 0
                && searchedTitle === ''
                && <h2 className={classes.gridTitle}>Libreria di {userDetails.name}</h2>
            }
            {searchedBooks.length > 0
                && searchedTitle !== ''
                && <h2 className={classes.gridTitle}>Ricerca di "{searchedTitle}"</h2>
            }
            {(userBooks.length > 0
                || searchedBooks.length > 0)
                && <BooksGrid
                    books={searchedTitle ? searchedBooks : userBooks}
                    searchedTitle={searchedTitle}
                    updateBooks={() => setUpdateBooks(!updateBooks)}
                />
            }
            {userBooks.length === 0
                && searchedTitle === ''
                && <p className={classes.noBooksError}>Nessun libro inserito nella tua libreria.</p>
            }
            {searchedBooks.length === 0
                && searchedTitle !== ''
                && <p className={classes.noBooksError}>Nessun libro trovato con il titolo "{searchedTitle}".</p>
            }
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
