import { Box, Button } from "@mui/material";
import React from 'react';
import { Typography } from '@mui/material';
import { useNavigate } from "react-router-dom";

function Footer(){

    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
      };
    
      const goToHelp = () => {
        navigate('/help');
      };
    
      const goToAbout = () => {
        navigate('/about');
      };

    return (
        <Box sx={{ backgroundColor: '#000000', color: 'white', textAlign: 'center', padding: '20px', mt: '50px' }}>
            <Typography variant="body1">
                Todos los derechos reservados. Programación para Internet 2023B
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' }}>
                <Button sx={{ color: 'white', fontSize: 24, width:150, marginRight: '10px' }} onClick={goToHome}>
                Home
                </Button>
                <Button sx={{ color: 'white', fontSize: 24, width:150, marginRight: '10px' }} onClick={goToAbout}>
                About
                </Button>
                <Button sx={{ color: 'white', fontSize: 24, width:150 }} onClick={goToHelp}>
                Help
                </Button>
            </Box>
        </Box>
        
      );
}

export default Footer;