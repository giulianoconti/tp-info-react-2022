import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
import { SearchResult } from "./pages/SearchResult";

export const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode && "dark"}`}>
      <BrowserRouter>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result/:resultId/:pageId" element={<SearchResult />} />
          <Route path="*" element={<Error message="Error 404" />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
};
