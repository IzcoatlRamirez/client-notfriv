import { Button, Paper, Typography } from "@mui/material";

interface GameCardProps {
  gameName: string;
  imageUrl: string;
  gameUrl: string;
}

function GameCard({ gameName, imageUrl, gameUrl }: GameCardProps) {
  const gotoGame = () => {
    window.open(gameUrl, "_blank");
  };

  return (
    <Button
      onClick={gotoGame}
      component={Paper}
      sx={{
        minWidth:200,
        maxHeight:200,
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        color: "white",
        mt:5,
        mr:10,
        "&:hover": {
          justifyContent: "center", // Cambiamos la alineación al centro en hover
          cursor: "pointer", // Cambiamos el cursor para indicar que es interactivo
        }
      }}
    >
      <Typography variant="h6">{gameName}</Typography>
    </Button>
  );
}

export default GameCard;
