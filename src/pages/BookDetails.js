import { Button, IconButton, Card } from '@mui/material';
import { Remove, Add, ArrowBack } from '@mui/icons-material';

import classes from './BookDetails.module.css';
import { Link, useParams } from 'react-router-dom';


function BookDetails({title, author, isbn, plot, readCount, addedOn}) {
  // const params = useParams();

  // params.id_book;

  let asideContent = <>
    <Button variant='contained' sx={buttonStyle}>Aggiungi alla libreria</Button>
  </>;

  if (addedOn !== null) {
    asideContent = <>
      <Card sx={cardStyle}>
        <p className={classes.userDetailsText}>Aggiunto alla tua libreria il {addedOn}</p>
        <p className={classes.userDetailsText}>Hai letto questo libro {readCount} volte.</p>
        <IconButton aria-label='meno'><Remove/></IconButton>
        <IconButton aria-label='più'><Add/></IconButton>
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
      <div className={classes.detailsWrapper}>
      <article className={classes.bookDetails}>
        <h1 className={classes.bookTitle}>{title}</h1>
        <h2 className={classes.bookAuthor}>di {author}</h2>
        <h3 className={classes.bookIsbn}>ISBN: {isbn}</h3>
        <h4 className={classes.bookPlotTitle}>Trama:</h4>
        <p className={classes.bookPlotText}>{plot}</p>
      </article>
      <aside className={classes.userDetails}>
        {asideContent}
      </aside>
    </div>
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