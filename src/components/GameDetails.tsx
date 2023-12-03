import { pink } from "@mui/material/colors";
import { Typography, Box, Divider,Grid,Button,Stack, Chip} from "@mui/material";
import { Game} from "../interfaces/Game";

function GameDetails({nombre,autor,descripcion,genero,link,imagen}: Game) {
    const gotoGame = () => {
        window.open(link, "_blank");
      };
  return (
    <Box sx={{display:'flex',flexDirection:'row'}}>
        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
    <Box sx={{ my: 3, mx: 2 }}>
      <Grid container alignItems="center">
        <Grid item xs>
          <Typography gutterBottom variant="h4" component="div">
            {nombre}
          </Typography>
        </Grid>
        <Grid item>
          <Typography gutterBottom variant="h6" component="div">
            {autor}
          </Typography>
        </Grid>
      </Grid>
      <Typography color="text.secondary" variant="body2">
       {descripcion}
      </Typography>
    </Box>
    <Divider variant="middle" />
    <Box sx={{ m: 2 }}>
      <Typography gutterBottom variant="body1">
        Genero
      </Typography>
      <Stack direction="row" spacing={1}>
      {genero.map((genre, index) => (
            <Chip key={index} color="primary" label={genre} />
          ))}
      </Stack>
    </Box>
    <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
        <Button sx={{backgroundColor:pink['A400'],color:'white',ml:1}} onClick={gotoGame}>Play</Button>
      </Box>
  </Box>
  <img src={imagen} style={{ width: '200px', height: '350px', objectFit: 'cover' }}></img>

    </Box>
  )
}

export default GameDetails