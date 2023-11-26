import TopBar from "../components/TopBar";
import { Box, Paper, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

//images
import fondo1 from "../assets/fondo1.png";
import fondo2 from "../assets/fondo2.jpg";
import fondo3 from "../assets/fondo3.jpg";
import fondo4 from "../assets/fondo4.png";
//juego de la semana 1

import crazytaxi from "../assets/CrazyTaxi/CrazyTaxi.jpg";
import crazytaxi1 from "../assets/CrazyTaxi/CrazyTaxi1.jpg";
import crazytaxi2 from "../assets/CrazyTaxi/CrazyTaxi2.jpg";
import crazytaxi3 from "../assets/CrazyTaxi/CrazyTaxi3.jpg";

//juego de la semana 2
import hod from "../assets/HOD/hod.jpg";
import hod1 from "../assets/HOD/hod1.jpg";
import hod2 from "../assets/HOD/hod2.jpg";
import hod3 from "../assets/HOD/hod3.jpg";

//juego de la semana 3
import kof from "../assets/KOF/kof.jpg";
import kof1 from "../assets/KOF/kof1.jpg";
import kof2 from "../assets/KOF/kof2.jpg";
import kof3 from "../assets/KOF/kof3.jpg";

//juego de la semana 4
import roblox from "../assets/Roblox/Roblox.jpg";
import roblox1 from "../assets/Roblox/Roblox1.jpg";
import roblox2 from "../assets/Roblox/Roblox2.jpg";
import roblox3 from "../assets/Roblox/Roblox3.jpg";

function HomePage() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeGame, setActiveGame] = useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  // const handleGameChange = (game: number) => {
  //   setActiveGame(game);
  // };

  const images = [fondo1, fondo2, fondo3, fondo4];

  const games = [
    {
      title: "Juego de la semana_1",
      images: [crazytaxi, crazytaxi1, crazytaxi2, crazytaxi3],
      playUrl: "https://diep.io/",
    },
    {
      title: "Juego de la semana_2",
      images: [hod, hod1, hod2, hod3],
      playUrl: "https://diep.io/",
    },
    {
      title: "Juego de la semana_3",
      images: [kof, kof1, kof2, kof3],
      playUrl: "https://diep.io/",
    },
    {
      title: "Juego de la semana_4",
      images: [roblox, roblox1, roblox2, roblox3],
      playUrl: "https://diep.io/",
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
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#1B1B1C",
        }}
      >
        <TopBar />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          mt: 2,
          px: 4,
        }}
      >
        <Box
          sx={{
            maxWidth: "60%",
            textAlign: "center",
            mb: 2,
            marginTop: "20px",
          }}
        >
          <Typography variant="h4" style={{ color: "white" }}>
            Disfruta jugando nuestros juegos de shooter, online, peleas y demás.
          </Typography>
        </Box>

        <Box sx={{ mb: 2, marginBottom: "40px" }}>
          <Link to="/main" style={{ textDecoration: "none" }}>
            <Button variant="contained" color="primary">
              Explorar juegos
            </Button>
          </Link>
        </Box>

        <Paper>
          <img
            src={images[activeStep]}
            alt={`Imagen ${activeStep + 1}`}
            style={{ width: "500px", height: "300px", objectFit: "cover" }}
          />
        </Paper>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
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
        <Box sx={{ mt: 4, textAlign: "center" }}>
          <Typography variant="h5" sx={{ mb: 2, color: "white" }}>
            Juegos de la Semana
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "32px",
            }}
          >
            {games.map((game, index) => (
              <Paper
                key={index}
                sx={{
                  width: "200px",
                  padding: 2,
                  textAlign: "center",
                  marginBottom: "32px",
                  backgroundColor: "#001F3F",
                  borderRadius: "8px",
                  color: "white",
                }}
              >
                <img
                  src={game.images[activeGame]}
                  alt={`Imagen ${activeGame + 1}`}
                  style={{
                    width: "100%",
                    height: "150px",
                    objectFit: "cover",
                    borderRadius: "8px",
                  }}
                />
                <Typography variant="subtitle1">{game.title}</Typography>
                {/* Botón "Play" */}
                <Button
                  variant="contained"
                  color="primary"
                  href={game.playUrl}
                  target="_blank"
                  sx={{ marginTop: "8px" }}
                >
                  Play
                </Button>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;