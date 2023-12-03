import TopBar from "../components/TopBar";
import { Box, Typography } from "@mui/material";
import React from "react";
import Footer from "../components/Footer";

interface Collaborator {
  name: string;
  cvLink: string;
}

const ListItem: React.FC<Collaborator> = ({ name, cvLink }) => (
  <li style={{ marginBottom: '15px', fontSize: '24px', display: 'flex', alignItems: 'center' }}>
    <span style={{ fontWeight: 'bold', color: '#05166C', fontSize: '32px', verticalAlign: 'middle', marginRight: '10px' }}>•</span>
    <div style={{ display: 'flex', alignItems: 'center', flex: '1', justifyContent: 'space-between', paddingRight: '1000px' }}>
      <span style={{ color: 'white'}}>{name}</span>
      <a
        style={{
          color: 'white',
          textDecoration: 'none',
          padding: '5px 10px',
          borderRadius: '5px',
          backgroundColor: '#05166C',
          minWidth: '150px',
          textAlign: 'center',
        }}
        href={cvLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        Consultar CV
      </a>
    </div>
  </li>
);

function AboutPage() {

  const collaboratorsF = [
    { name: 'Izcoatl Ramirez Cortes', cvLink: 'https://izcoatlramirez.github.io/react-curriculum-app/' },
    { name: 'Amanda De la Cruz Martinez', cvLink: 'https://amandanomad.github.io/personalCv/' },
    { name: 'Carlos Martin Garcia Madrigal', cvLink: 'https://carlos-garcia09.github.io/' },
    { name: 'Dafne J Crespo Romo', cvLink: 'https://cvdaf.daffcrespo.repl.co/?authuser=0&hl=es' },
    { name: 'David Felipe Pinto Jimenez', cvLink: 'https://davidpinto02.github.io/curriculum/' },
    { name: 'Diego Israel Luna Curiel', cvLink: 'https://diegolunacuriel.github.io/Maquetado-HTML-CSS/' },
    { name: 'Eloisa Isabela Magos Durán', cvLink: 'https://isabela-magos-maquetado-html-css.netlify.app/' },
    { name: 'Gemma Isela Castañeda Hernández', cvLink: 'https://gemmacastaneda9048.github.io/master/' },
    { name: 'Kenya Sánchez Mercado', cvLink: 'https://kenyamercado.github.io/t01-maquetado-html-css/' },
    { name: 'Kevin Alejandro Aldrete Martinez', cvLink: 'https://astounding-pudding-320da8.netlify.app' },
    { name: 'Luis Armando Luna Hernández', cvLink: 'https://battlesimphony13.github.io/Curriculum-Vitae-LUNA-HERNANDEZ-LUIS-ARMANDO/' },
    { name: 'Oswaldo Javier España Trujillo ', cvLink: 'https://cv-oswaldo-espana.onrender.com/' },
    { name: 'Samuel Israel Medina Rodríguez', cvLink: 'https://samuelimr.github.io/my_CV/' },


  ];

  const collaboratorsB = [

    { name: 'Anthony Esteven Sandoval Marquez', cvLink: 'https://zaikron.github.io/PROGINT_TRAB1_CV/' },
    { name: 'Braulio Fermin Montes Rosales', cvLink: 'https://mbraulio.github.io/cv/' },
    { name: 'Diego Ivan Becerra Gonzalez', cvLink: 'https://github.com/diegoivan1987/ProgInt/blob/tarea1/cv.pdf' },
    { name: 'Emilio Josafat Giacomo Quintero ', cvLink: 'https://adoptsomekids.github.io/Maquetado-en-Html-Css-CV/' },
    { name: 'Jahir Alejandro Rivera Avalos', cvLink: 'https://imjahirrivera.github.io/' },
    { name: 'Manuel Navarro Valadez', cvLink: 'https://molki3.github.io/PPI-RESUME/' },
    { name: 'Saul Alejandro Castañeda Pérez', cvLink: 'https://enpanada.github.io/CV_Template/' },
    { name: 'Uziel Cornejo Olivares', cvLink: 'https://rr-uzi.github.io' },
    { name: 'Pablo Alejandro Hernández Gómez', cvLink: 'https://pablohernandez03.github.io/trabajo01/' }

  ]

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
          <Typography variant="h1" style={{ color: "#05166C" }}>
            Colaboradores
          </Typography>
        </Box>

        <Typography variant="h4" sx={{ color: "#070301", fontWeight: 'bold', fontSize: 30 }}>
          PROJECT MANAGER<br /><br />
        </Typography>
        <Typography variant="h5" sx={{ color: "white", minWidth:500}}>
        <span style={{ color: '#05166C', fontWeight: 'bold', fontSize: '32px', verticalAlign: 'middle', marginRight: '10px' }}>•</span>Angel Ignacio Ortega Vega <a style={{ color: "white", textDecoration: 'none', marginLeft: '10px', padding: '5px 10px', borderRadius: '5px', backgroundColor: '#05166C'}} href="https://angelortega03.github.io/">Consultar CV<br /></a>
        </Typography><br /><br />
        <Typography variant="h4" sx={{ color: "#070301", fontWeight: 'bold', fontSize: 30, mt:5}}>
          EQUIPO FRONTEND<br /><br /><br/>
        </Typography>
        <ul style={{ listStyleType: 'none', padding: 0, width: '100%',marginLeft:'70%', textAlign: 'center' }}>
          {collaboratorsF.map((collaborator, index) => (
            <ListItem key={index} name={collaborator.name} cvLink={collaborator.cvLink} />
          ))}
        </ul>

        <br/><br/><br/>
        <Typography variant="h4" sx={{ color: "#070301", fontWeight: 'bold', fontSize: 30}}>
          EQUIPO BACKEND<br /><br /><br/>
        </Typography>

        <ul style={{ listStyleType: 'none', padding: 0, width: '100%', marginLeft:'70%',textAlign: 'center' }}>
          {collaboratorsB.map((collaborator, index) => (
            <ListItem key={index} name={collaborator.name} cvLink={collaborator.cvLink} />
          ))}
        </ul>

     
      </Box>
      <Footer />
    </>
  );
}

export default AboutPage;