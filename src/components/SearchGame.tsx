import Paper from "@mui/material/Paper";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { useState } from "react";

function SearchGame() {
  const [searchText, setSearchText] = useState<string>("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
    console.log(searchText)
  };

  const handleSearch = () => {
    console.log("Texto de búsqueda:", searchText);
  };

  return (
    <>
      <Paper sx={{ display: "flex", flexDirection: "row", borderRadius: 6, width:400 }}>
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="Search game"
          value={searchText} // Asigna el valor del estado al input
          onChange={handleInputChange} // Maneja los cambios en el input
        />
        <IconButton type="button" sx={{ p: "7px" }} aria-label="search" onClick={handleSearch}>
          <SearchIcon />
        </IconButton>
      </Paper>
    </>
  );
}

export default SearchGame;
