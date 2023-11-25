import {
  Box,
  Button,
  Typography,
  Dialog,
  DialogContent,
} from "@mui/material";
import { useState } from "react";
import { GameCardProps } from "../interfaces/Game";
import GameDetails from "./GameDetails";
import WidgetsIcon from '@mui/icons-material/Widgets';

function GameCard({
  id,
  nombre,
  autor,
  descripcion,
  genero,
  link,
  imageUrl,
}: GameCardProps) {
  const gotoGame = () => {
    window.open(link, "_blank");
  };
  const [open, setOpen] = useState(false);

  const handleOpen = async () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minWidth: 200,
        maxHeight: 200,
        maxWidth: 200,
        minHeight: 200,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        justifyContent: "flex-end",
        color: "white",
        marginTop: 30,
        marginRight: 75,
      }}
    >
      <Button onClick={gotoGame}>
        <Typography variant="h6" sx={{ color: "white" }}>
          {nombre}
        </Typography>
      </Button>
      <Box sx={{ mt: 1}}>
        <Button onClick={handleOpen}>
          <WidgetsIcon sx={{color:'white'}}/>
        </Button>
      </Box>
    
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <GameDetails
            id={id}
            nombre={nombre}
            autor={autor}
            genero={genero}
            descripcion={descripcion}
            link={link}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default GameCard;
