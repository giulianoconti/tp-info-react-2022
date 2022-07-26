import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SearchContext } from "./SearchContext";
import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { SearchResult } from "./pages/SearchResult";
import { Error } from "./pages/Error";
import { Footer } from "./components/Footer";

export const App = () => {
  const [darkMode, setDarkMode] = useState(localStorage.getItem("darkMode") === "true" ? true : false);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    if (darkMode) {
      document.body.style.backgroundColor = "rgb(17, 24, 39)";
    } else {
      document.body.style.backgroundColor = "rgb(229, 231, 235)";
    }
  }, [darkMode]);

  return (
    <SearchContext.Provider value={{ searchInput, setSearchInput }}>
      <div className={`app ${darkMode && "dark"}`}>
        <BrowserRouter>
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:resultId/:sortById/:pageId" element={<SearchResult />} />
            <Route path="*" element={<Error message="Error 404" />} />
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </SearchContext.Provider>
  );
};
