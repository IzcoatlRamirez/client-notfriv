import TopBar from "../components/TopBar";
import { Box, Typography } from "@mui/material";
import HelpForm from "../components/HelpForm";


function HelpPage() {
  
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
                ¿Tienes alguna duda?
              </Typography>
            </Box>
    
            <HelpForm />
            </Box>
        </>
      );

} export default HelpPage;