import Home from "./pages/Home";
import SongDataDetails from "./pages/SongPageDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:index" element={<SongDataDetails />} />
        </Routes>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
