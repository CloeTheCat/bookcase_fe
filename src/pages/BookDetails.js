import { Button, IconButton, Card } from '@mui/material';
import { Remove, Add, ArrowBack } from '@mui/icons-material';

import classes from './BookDetails.module.css';
import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getBookData } from '../services/getBookData';
import { useSelector } from 'react-redux';
import moment from 'moment';

let dummyBook = {
  "id_book": 0,
  "title": "Titolo",
  "author": "Autore",
  "isbn": 0,
  "plot": "Trama",
  "id_userlibrary": null,
  "id_user": null,
  "added_on": null,
  "removed_on": null,
  "read_count": 0
}

function BookDetails() {
  const userDetails = useSelector(state => state.login.user);
  const [bookData, setBookData] = useState(dummyBook);

  let { id_book } = useParams();

  useEffect(() => {
    const id_user = userDetails.id_user;
    const bookId = parseInt(id_book)
    userDetails && getBookData({ id_book: bookId, id_user: id_user })
      .then((res) => {
        setBookData(res.data)
        console.log('res', res)
      })
  }, [])

  let asideContent = <>
    <Button variant='contained' sx={buttonStyle}>Aggiungi alla libreria</Button>
  </>;

  if (bookData.added_on !== null && bookData.added_on !== undefined) {
    let added_on = moment(bookData.added_on).format('D MM YYYY');

    asideContent = <>
      <Card sx={cardStyle}>
        <p className={classes.userDetailsText}>Aggiunto alla tua libreria il {added_on}</p>
        <p className={classes.userDetailsText}>Hai letto questo libro {bookData.read_count} volte.</p>
        <IconButton aria-label='meno'><Remove /></IconButton>
        <IconButton aria-label='più'><Add /></IconButton>
      </Card>
      <Button variant='contained' sx={buttonStyle}>Rimuovi dalla libreria</Button>
    </>
  }

  return (<>
    <Link to='/'>
      <Button
        variant='text'
        startIcon={<ArrowBack />}
        sx={textButtonStyle}
      >
        Torna alla tua libreria
      </Button>
    </Link>
    {bookData !== null && <div className={classes.detailsWrapper}>
      <article className={classes.bookDetails}>
        <h1 className={classes.bookTitle}>{bookData.title}</h1>
        <h2 className={classes.bookAuthor}>di {bookData.author}</h2>
        <h3 className={classes.bookIsbn}>ISBN: {bookData.isbn}</h3>
        <h4 className={classes.bookPlotTitle}>Trama:</h4>
        <p className={classes.bookPlotText}>{bookData.plot}</p>
      </article>
      <aside className={classes.userDetails}>
        {asideContent}
      </aside>
    </div>}
  </>

  );
}

const buttonStyle = {
  textTransform: 'none',
  backgroundColor: 'darkolivegreen',
  color: '#eee',
  display: 'block',
  margin: 'auto',
  '&:hover': {
    backgroundColor: 'darkolivegreen'
  }
}

const textButtonStyle = {
  textTransform: 'none',
  color: 'darkolivegreen',
  height: 'max-content',
  marginLeft: '1rem',
  marginBottom: '1rem',
  float: 'left',
  '&:hover': {
    color: 'darkolivegreen',
    backgroundColor: 'rgba(85, 107, 47, 0.1)',
  }
}

const cardStyle = {
  backgroundColor: 'darkolivegreen',
  padding: '1rem 2rem',
  marginBottom: '1rem',
}

export default BookDetails;