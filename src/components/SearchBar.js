import * as React from 'react';
import { Search, Add } from '@mui/icons-material';
import { IconButton, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useSelector } from 'react-redux';

import classes from './SearchBar.module.css';
import { newBook } from '../services/newBook';
import { addBookToLibrary } from '../services/addBookToLibrary';


function SearchBar() {
  const userDetails = useSelector(state => state.login.user);

  const [open, setOpen] = React.useState(false);
  const [title, setTitle] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [isbn, setIsbn] = React.useState();
  const [plot, setPlot] = React.useState('');


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

    return <div className={classes.searchBar}>
    <TextField 
        id="outlined-basic" 
        label="Cerca libro dal titolo" 
        variant="outlined" 
        sx={textField}
    />
    <IconButton aria-label='search' sx={{margin: '0 0.5rem'}}>
        <Search/>
    </IconButton>
    <Button 
        variant="contained" 
        startIcon={<Add />} 
        sx={buttonStyle}
        onClick={handleClickOpen}
    >
        Nuovo libro
    </Button>
    <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const bookData = {title: title, author: author, isbn: isbn, plot: plot}
            newBook(bookData).then(
              (res) => {
                addBookToLibrary({id_user: userDetails.id_user, id_book: res.data.id_book})
              }
            ).then(handleClose())
          },
        }}
      >
        <DialogTitle>Aggiungi un nuovo libro</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Compila tutti i campi e aggiungi il libro alla tua libreria.
          </DialogContentText>
          <TextField
            required
            margin="dense"
            label="Titolo"
            fullWidth
            variant="outlined"
            onChange={event => setTitle(event.target.value)}
            sx={textField}
          />
          <TextField
            required
            margin="dense"
            label="Autore"
            fullWidth
            variant="outlined"
            onChange={event => setAuthor(event.target.value)}
            sx={textField}
          />
          <TextField
            required
            margin="dense"
            label="ISBN"
            fullWidth
            variant="outlined"
            onChange={event => setIsbn(event.target.value)}
            sx={textField}
          />
          <TextField
            margin="dense"
            label="Trama"
            fullWidth
            variant="outlined"
            onChange={event => setPlot(event.target.value)}
            sx={textField}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={textButtonStyle}>Annulla</Button>
          <Button type="submit" sx={textButtonStyle}>Aggiungi</Button>
        </DialogActions>
      </Dialog>
</div>
}

const textField = {
    '& label.Mui-focused': {
      color: 'darkolivegreen',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'darkolivegreen',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'darkolivegreen',
      },
      '&:hover fieldset': {
        borderColor: 'darkolivegreen',
      },
      '&.Mui-focused fieldset': {
        borderColor: 'darkolivegreen',
      },
    }
};

const buttonStyle = {
    backgroundColor: 'darkolivegreen', 
    fontWeight: 700,
    '&:hover': {
        backgroundColor: 'darkolivegreen',
    }
}

const textButtonStyle = {
  color: 'darkolivegreen', 
  fontWeight: 700,
  '&:hover': {
    backgroundColor: 'rgba(85, 107, 47, 0.1)'
  }
}

export default SearchBar;