import { Button, IconButton } from '@mui/material';
import { Remove, Add } from '@mui/icons-material';

import classes from './BookDetails.module.css';


function BookDetails({title, author, isbn, plot, readCount, addedOn, removedOn}) {
  const trama = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea voluptate velit esse, quam nihil molestiae consequatur, vel illum, qui dolorem eum fugiat, quo voluptas nulla pariatur? [33] At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident, similique sunt in culpa, qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio, cumque nihil impedit, quo minus id, quod maxime placeat, facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet, ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.';

  let asideContent = <>
    <Button variant='contained' sx={buttonStyle}>Aggiungi alla libreria</Button>
  </>;

  if (addedOn !== null) {
    asideContent = <>
      <p className={classes.userDetailsText}>Aggiunto alla tua libreria il DATA</p>
      {removedOn ?? <p className={classes.userDetailsText}>Rimosso dalla tua libreria il DATA</p>}
      <p className={classes.userDetailsText}>Hai letto questo libro X volte.</p>
      <IconButton aria-label='meno' sx={iconButtonStyle}><Remove/></IconButton>
      <IconButton aria-label='più' sx={iconButtonStyle}><Add/></IconButton>
      <Button variant='contained' sx={buttonStyle}>Rimuovi dalla libreria</Button>

    </>
  }

  return (
    <div className={classes.detailsWrapper}>
      <article className={classes.bookDetails}>
        <h1 className={classes.bookTitle}>Titolo del libro</h1>
        <h2 className={classes.bookAuthor}>di Autore</h2>
        <h3 className={classes.bookIsbn}>ISBN: 1342543245</h3>
        <h4 className={classes.bookPlotTitle}>Trama:</h4>
        <p className={classes.bookPlotText}>{trama}</p>
      </article>
      <aside className={classes.userDetails}>
        {asideContent}
      </aside>
    </div>
  );
}
  
const buttonStyle = {
  textTransform: 'none',
  backgroundColor: '#eee', 
  color: 'darkolivegreen',
  '&:hover': {
    backgroundColor: '#eee'
  }
}

const iconButtonStyle = {
  marginBottom: '1rem',
}

export default BookDetails;