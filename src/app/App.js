import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../pages/home';
import Archiv from '../pages/archiv';
import Projekte from '../pages/projekte';
import Eintrag from '../pages/Eintraege';
import Header from '../components/header/header';
import Footer from '../components/footer/footer';


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/archiv' element={<Archiv />} />
          <Route path='/archiv/eintrag:id' element={<Eintrag />} />
        <Route path='/sinnloses' element={<Projekte />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
