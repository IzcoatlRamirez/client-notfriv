import {useState} from 'react'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Paper from "@mui/material/Paper";

function CategorySelector() {
    const [category, setCategory] = useState('');

    const handleChange = (event : SelectChangeEvent) => {
      setCategory(event.target.value as string);
    };
  
    return (
      <Paper sx={{ minWidth:250}}>
        <FormControl fullWidth >
          <InputLabel id="demo-simple-select-label" sx={{'&.Mui-focused': {
              color: 'gray',
            }}}>Category</InputLabel>
          <Select
            value={category}
            label="category"
            onChange={handleChange}
          >
            <MenuItem value={'Peleas'}>Peleas</MenuItem>
            <MenuItem value={'Plataformas'}>Plataformas</MenuItem>
            <MenuItem value={'Shooter'}>Shooter</MenuItem>
            <MenuItem value={'Online'}>Online</MenuItem>
          </Select>
        </FormControl>
      </Paper>
    );
}

export default CategorySelector