import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import HomePage from "./pages/HomePage";
import HelpPage from "./pages/HelpPage";
import AboutPage from "./pages/AboutPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/main" element={<MainPage/>}/>
          <Route path="/help" element={<HelpPage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
