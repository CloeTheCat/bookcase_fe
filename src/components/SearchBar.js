import * as React from 'react';
import { Search } from '@mui/icons-material';
import { TextField, InputAdornment } from '@mui/material';

import classes from './SearchBar.module.css';
import AddNewBook from './AddNewBook';


function SearchBar({ setSearchText }) {
  return <div className={classes.searchBar}>
    <TextField
      id="outlined-basic"
      label="Cerca libro dal titolo"
      variant="outlined"
      InputProps={{
        startAdornment: (
          <InputAdornment position='start'>
            <Search />
          </InputAdornment>)
      }}
      sx={textField}
      onChange={e => setSearchText(e.target.value)}
    />
    <AddNewBook />
  </div>
}

const textField = {
  marginRight: '2rem',
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

export default SearchBar;