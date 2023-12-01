import { Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function TopBar() {
  const navigate = useNavigate();
  

  const goToHome = () =>{
      navigate('/');
  };

  const goToHelp = () =>{
    navigate('/help')
  };

  const goToAbout = () =>{
    navigate('/about')
  }

  return (
    <>
      <Box sx={{ display: "flex", flexDirection: "row",mt:5 }}>
        <Button sx={{ color: "white",fontSize:24, width:150}} onClick={goToHome}>Home</Button>
        <Button sx={{ color: "white",fontSize:24,width:150}} onClick={goToAbout}>About</Button>
        <Button sx={{ color: "white" ,fontSize:24,width:150}} onClick={goToHelp}>Help</Button>
      </Box>
    </>
  );
}

export default TopBar;
