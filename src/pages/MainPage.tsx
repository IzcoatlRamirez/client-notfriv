import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { getGames } from "../services/GameService";
import { Game } from "../interfaces/Game";
import TopBar from "../components/TopBar";
// import CategorySelector from "../components/CategorySelector";
// import SearchGame from "../components/SearchGame";
// import BasicPagination from "../components/Pagination"
import GameCard from "../components/GameCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

// 12 juegos por pagina
function MainPage() {
  const [games, setGames] = useState<Game[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const juegosPorPagina: number = 8;

  useEffect(() => {
    const obtenerDatos = async () => {
      try {
        const data = await getGames();
        setGames(data.data);
        console.log(data.data);
      } catch (error) {
        console.error("Error al obtener datos:", error);
      }
    };
    obtenerDatos();
  }, []);

  const indexOfLastGame = currentPage * juegosPorPagina;
  const indexOfFirstGame = indexOfLastGame - juegosPorPagina;
  const currentlyGames = games.slice(indexOfFirstGame, indexOfLastGame);

  const renderizarJuegos = () => {
    return currentlyGames.map((game) => (
      <GameCard
        id={game.id}
        key={game.id}
        nombre={game.nombre}
        autor={game.autor}
        descripcion={game.descripcion}
        genero={game.genero}
        link={game.link}
        imagen={game.imagen}
      />
    ));
  };

  const handlePageChange = (_event: unknown, value: number) => {
    setCurrentPage(value);
  };

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
        sx={{ ml: 25, mt: 5, display: "flex", flexDirection: "row", gap: 5 }}
      >
        {/* <CategorySelector></CategorySelector>
        <SearchGame></SearchGame> */}
      </Box>

      <Box
        sx={{
          minHeight: 500,
          maxWidth: 1200,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          ml: 32.5,
        }}
      >
        {renderizarJuegos()}
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          mt: 3,
        }}
      >
        <Stack spacing={5}>
          <Pagination
            count={Math.ceil(games.length / juegosPorPagina)}
            page={currentPage}
            onChange={handlePageChange}
            shape="rounded"
            size="large"
            color="primary"
          />
        </Stack>
      </Box>
    </>
  );
}

export default MainPage;
