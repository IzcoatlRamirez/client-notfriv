import TopBar from "../components/TopBar";
import { Box, Paper, Button, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import fondo1 from "../assets/fondo1.png"
import fondo2 from "../assets/fondo2.jpg"
import fondo3 from "../assets/fondo3.jpg"
import fondo4 from "../assets/fondo4.png"

function HomePage() {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };
  const images = [
    fondo1,fondo2,fondo3,fondo4
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      // Cambiar a la siguiente imagen
      setActiveStep((prevStep) => (prevStep + 1) % images.length);
    }, 4000); // Cambiar cada 4 segundos

    return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
  }, [images.length]);

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
          <Typography variant="h4">
            Disfruta jugando nuestros juegos de shooter, online, peleas y demás.
          </Typography>
        </Box>

        <Box sx={{ mb: 2, marginBottom: "40px" }}>
          <Link to="/" style={{ textDecoration: "none" }}>
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
      </Box>
    </>
  );
}

export default HomePage;
