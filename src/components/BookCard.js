import {Card, CardContent} from '@mui/material';
import classes from './BookCard.module.css';

function BookCard({title, author, readCount}) {
    let times = 'volte';

    if (readCount === 1) {
        times = 'volta';
    }

    return <Card className={classes.cardWrapper}>
        <CardContent>
            <h3 className={classes.title}>{title}</h3>
            <h4 className={classes.author}>{author}</h4>
            <p className={classes.readCount}>Hai letto questo libro <strong>{readCount}</strong> {times}.</p> 
        </CardContent>
    </Card>
}

export default BookCard;