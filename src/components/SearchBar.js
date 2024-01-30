import { Search, Add } from '@mui/icons-material';
import { IconButton, TextField, Button } from '@mui/material';

import classes from './SearchBar.module.css';


function SearchBar() {
    return <div className={classes.searchBar}>
    <TextField 
        id="outlined-basic" 
        label="Cerca libro" 
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
    >
        Nuovo libro
    </Button>
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



export default SearchBar;