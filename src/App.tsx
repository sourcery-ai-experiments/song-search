import Home from './pages/Home'
import SongDataDetails from './pages/SongPageDetails';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/details/:index" element={<SongDataDetails />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
