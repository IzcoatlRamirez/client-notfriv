import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HelpPage from "./pages/HelpPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/help" element={<HelpPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
