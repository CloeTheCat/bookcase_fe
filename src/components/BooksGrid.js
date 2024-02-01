import BookCard from './BookCard';
import classes from './BooksGrid.module.css';


function BooksGrid({ books, searchedTitle, updateBooks }) {

    return <div className={classes.booksGrid}>
        {books.length > 0 && books.map((bookData, index) =>
            <BookCard key={index}
                bookData={bookData}
                searchedTitle={searchedTitle}
                updateBooks={updateBooks}
            />
        )}
    </div>
}

export default BooksGrid;