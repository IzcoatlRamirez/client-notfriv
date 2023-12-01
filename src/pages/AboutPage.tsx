import TopBar from "../components/TopBar";
import CollaboratorCard from "../components/CollaboratorCard";
import { Box,Typography } from "@mui/material";

function AboutPage(){
    return(
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
              <Typography variant="h3" style={{ color: "white" }}>
                Colaboradores
              </Typography>
            </Box>
    
            <CollaboratorCard/>
            </Box>
      </>
    );
}

export default AboutPage;