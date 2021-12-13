import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";

const Rotas = () => {
  return (
    <Router>
      <Header />
      <Routes>
          <Route path='/' element={<Home />} />
      </Routes>
    </Router>
  );
};

export default Rotas;