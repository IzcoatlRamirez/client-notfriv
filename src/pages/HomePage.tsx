import TopBar from "../components/TopBar";
import { Box, Paper, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeGame, setActiveGame] = useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const handleGameChange = (game: number) => {
    setActiveGame(game);
  };

  const images = [
    "src/assets/fondo1.png",
    "src/assets/fondo2.jpg",
    "src/assets/fondo3.jpg",
    "src/assets/fondo4.png",
  ];

  const games = [
    {
      title: "Juego de la semana_1",
      images: [
        "src/assets/CrazyTaxi/CrazyTaxi.jpg",
        "src/assets/CrazyTaxi/CrazyTaxi1.jpg",
        "src/assets/CrazyTaxi/CrazyTaxi2.jpg",
        "src/assets/CrazyTaxi/CrazyTaxi3.jpg",
      ],
    },
    {
      title: "Juego de la semana_2",
      images: [
        "src/assets/HOD/hod.jpg",
        "src/assets/HOD/hod1.jpg",
        "src/assets/HOD/hod2.jpg",
        "src/assets/HOD/hod3.jpg",
      ],
    },
    {
      title: "Juego de la semana_3",
      images: [
        "src/assets/KOF/kof.jpg",
        "src/assets/KOF/kof1.jpg",
        "src/assets/KOF/kof2.jpg",
        "src/assets/KOF/kof3.jpg",
      ],
    },
    {
      title: "Juego de la semana_4",
      images: [
        "src/assets/Roblox/Roblox.jpg",
        "src/assets/Roblox/Roblox1.jpg",
        "src/assets/Roblox/Roblox2.jpg",
        "src/assets/Roblox/Roblox3.jpg",
      ],
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prevStep) => (prevStep + 1) % images.length);
    }, 4000);

    const gameInterval = setInterval(() => {
      setActiveGame((prevGame) => (prevGame + 1) % games.length);
    }, 4000);

    return () => {
      clearInterval(interval);
      clearInterval(gameInterval);
    };
  }, [images.length, games.length]);

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#1B1B1C' }}>
        <TopBar />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 2, px: 4 }}>
        <Box sx={{ maxWidth: '60%', textAlign: 'center', mb: 2, marginTop: "20px" }}>
          <Typography variant="h4" style={{ color: 'white' }}>
            Disfruta jugando nuestros juegos de shooter, online, peleas y demás.
          </Typography>
        </Box>

        <Box sx={{ mb: 2, marginBottom: "40px" }}>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Button variant="contained" color="primary">
              Explorar juegos
            </Button>
          </Link>
        </Box>

        <Paper>
          <img
            src={images[activeStep]}
            alt={`Imagen ${activeStep + 1}`}
            style={{ width: '500px', height: '300px', objectFit: 'cover' }}
          />
        </Paper>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          {images.map((_, index) => (
            <Button
              key={index}
              onClick={() => handleStepChange(index)}
              sx={{ mx: 1 }}
              variant={index === activeStep ? "contained" : "outlined"}
            >
              {index + 1}
            </Button>
          ))}
        </Box>

        {/* Sección de "Juegos de la Semana" */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography variant="h5" sx={{ mb: 2, color: 'white' }}>
            Juegos de la Semana
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '32px' }}>
            {games.map((game, index) => (
              <Paper
                key={index}
                sx={{
                  width: '200px',
                  padding: 2,
                  textAlign: 'center',
                  marginBottom: '32px',
                  backgroundColor: '#001F3F', // Fondo azul galaxia
                  borderRadius: '8px', // Bordes redondeados
                  color: 'white', // Texto blanco
                }}
              >
                <img
                  src={game.images[activeStep]}
                  alt={`Imagen ${activeStep + 1}`}
                  style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
                />
                <Typography variant="subtitle1">{game.title}</Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;
