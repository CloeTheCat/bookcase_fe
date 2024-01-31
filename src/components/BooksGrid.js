import { useEffect, useState } from 'react';
import { booksByUser } from '../services/booksByUser';
import BookCard from './BookCard';
import classes from './BooksGrid.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


function BooksGrid() {
  const userDetails = useSelector(state => state.login.user);

    const [userBooks, setUserBooks] = useState([]);

    useEffect(() => {
        booksByUser(userDetails.id_user)
            .then((res) => {
                console.log(res.data);
                setUserBooks(res.data)
            });
    }, []);

    return <div className={classes.booksGrid}>
        {userBooks.map((userLibraryBook, index) => <Link 
            to={`/${userLibraryBook.id_book}`}
            className={classes.link}
        >
            <BookCard key={index}
                bookData={userLibraryBook}
            />
        </Link>)}
    </div>
}

export default BooksGrid;