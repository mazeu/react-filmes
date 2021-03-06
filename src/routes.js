import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import Filme from "./pages/Filme";
import Favoritos from './pages/Favoritos/favoritos';
import Error from "./pages/Error/error";

const Rotas = () => {
  return (
    <Router>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/filme/:id" element={<Filme />}/>
          <Route path="/favoritos" element={<Favoritos />}/>
          <Route path="/*" element={<Error />}/>
      </Routes>
    </Router>
  );
};

export default Rotas;