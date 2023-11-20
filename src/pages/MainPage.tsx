import { Box} from "@mui/material"
import TopBar from "../components/TopBar"
import CategorySelector from "../components/CategorySelector"
import SearchGame from "../components/SearchGame"
import BasicPagination from "../components/Pagination"
import GameCard from "../components/GameCard"
import sliterIo from "../assets/sliterio.jpg"

// 12 juegos por pagina
function MainPage() {

  return (
    <>
    <Box sx={{display:'flex',alignItems:'center', justifyContent:'center'}} >
      <TopBar/>
    </Box>
    <Box sx={{ml:25,mt:5, display:'flex',flexDirection:'row',gap:5}}>
    <CategorySelector></CategorySelector>
    <SearchGame></SearchGame>
    </Box>
      
    <Box sx={{minHeight:500,maxWidth:1200, display:'flex',flexDirection:'row',flexWrap:'wrap',ml:25}}>
      <GameCard gameName="sliter IO" imageUrl={sliterIo} gameUrl="http://slither.io/"></GameCard>
      {/* <GameCard gameName="sliter IO" imageUrl={sliterIo} gameUrl="http://slither.io/"></GameCard>
      <GameCard gameName="sliter IO" imageUrl={sliterIo} gameUrl="http://slither.io/"></GameCard>
      <GameCard gameName="sliter IO" imageUrl={sliterIo} gameUrl="http://slither.io/"></GameCard>
      <GameCard gameName="sliter IO" imageUrl={sliterIo} gameUrl="http://slither.io/"></GameCard>
      <GameCard gameName="sliter IO" imageUrl={sliterIo} gameUrl="http://slither.io/"></GameCard>
      <GameCard gameName="sliter IO" imageUrl={sliterIo} gameUrl="http://slither.io/"></GameCard>
      <GameCard gameName="sliter IO" imageUrl={sliterIo} gameUrl="http://slither.io/"></GameCard>
      <GameCard gameName="sliter IO" imageUrl={sliterIo} gameUrl="http://slither.io/"></GameCard>
      <GameCard gameName="sliter IO" imageUrl={sliterIo} gameUrl="http://slither.io/"></GameCard>
      <GameCard gameName="sliter IO" imageUrl={sliterIo} gameUrl="http://slither.io/"></GameCard>
      <GameCard gameName="sliter IO" imageUrl={sliterIo} gameUrl="http://slither.io/"></GameCard> */}
    </Box>
    <Box sx={{display:'flex',alignItems:'center',justifyContent:'center', mt:3}}>
      <BasicPagination count={5}></BasicPagination>
    </Box>

    </>

  )
}

export default MainPage