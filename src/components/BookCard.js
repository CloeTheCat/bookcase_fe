import {Card, CardContent} from '@mui/material';
import classes from './BookCard.module.css';

function BookCard({bookData}) {

    console.log('bookData',bookData)

    let readCountText = 'Non hai ancora letto questo libro.'

    if (bookData.readCount === 1) {
        readCountText = 'Hai letto questo libro una volta.';
    } else if (bookData.readCount > 1) {
        readCountText = `Hai letto questo libro ${bookData.readCount} volte.`
    }

    return <Card className={classes.cardWrapper}>
        <CardContent>
            <h3 className={classes.title}>{bookData.title}</h3>
            <h4 className={classes.author}>{bookData.author}</h4>
            <p className={classes.readCount}>{readCountText}</p> 
        </CardContent>
    </Card>
}

export default BookCard;