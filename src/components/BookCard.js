import { Card, CardContent, IconButton } from '@mui/material';
import classes from './BookCard.module.css';
import { Add, Delete } from '@mui/icons-material';
import { removeBookFromLibrary } from '../services/removeBookFromLibrary';
import { addBookToLibrary } from '../services/addBookToLibrary';
import { useSelector } from 'react-redux';
import { addBookAgain } from '../services/addBookAgain';
import { Link } from 'react-router-dom';


function BookCard({ bookData, searchedTitle, updateBooks }) {

    const userDetails = useSelector(state => state.login.user)

    let readCountText = 'Non hai ancora letto questo libro.'

    if (bookData.read_count === 1) {
        readCountText = 'Hai letto questo libro una volta.';
    } else if (bookData.read_count > 1) {
        readCountText = `Hai letto questo libro ${bookData.read_count} volte.`
    }

    const handleRemoveBook = () => {
        removeBookFromLibrary(bookData.id_userlibrary);
        updateBooks()
    }
    const handleAddBook = () => {
        if (bookData.removed_on === null) {
            addBookToLibrary({ id_user: userDetails.id_user, id_book: bookData.id_book })
            updateBooks()
        } else {
            addBookAgain(bookData.id_userlibrary)
            updateBooks()
        }
    }

    let iconButton = null;

    if (searchedTitle !== '' && bookData.added_on !== null && bookData.removed_on === null) {
        iconButton = <IconButton onClick={handleRemoveBook} sx={iconButtonStyle}><Delete /></IconButton>
    } else if (searchedTitle !== '' && (bookData.removed_on !== null || bookData.added_on === null)) {
        iconButton = <IconButton onClick={handleAddBook} sx={iconButtonStyle}><Add /></IconButton>
    }

    return <Card className={classes.cardWrapper}>
        <Link to={`/${bookData.id_book}`} className={classes.link}>
            <CardContent>
                <h3 className={classes.title}>{bookData.title}</h3>
                <h4 className={classes.author}>{bookData.author}</h4>
                <p className={classes.readCount}>{readCountText}</p>
            </CardContent>
        </Link>

        {iconButton}

    </Card>
}

const iconButtonStyle = {
    marginBottom: '1rem'
}

export default BookCard;