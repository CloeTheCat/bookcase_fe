import { useEffect, useState } from 'react';
import { booksByUser } from '../services/booksByUser';
import { newBook } from '../services/newBook';
import BookCard from './BookCard';
import classes from './BooksGrid.module.css';

const libro = {
    title: 'Topolino',
    author: 'Walt Disney',
    isbn: 34253,
    plot: 'cose'
}

function BooksGrid() {
    const [userBooks, setUserBooks] = useState([]);
    const [addBook, setAddBook] = useState({});
    console.log(addBook);

    useEffect(() => {
        booksByUser().then((res) => {setUserBooks(res.data)});
        // newBook(libro).then((res) => setAddBook(res.data));
    }, []);

    return <div className={classes.booksGrid}>
        {userBooks.map(({title, author}, index) => <BookCard key={index} title={title} author={author} readCount={1}/>)}
    </div>
}

export default BooksGrid;