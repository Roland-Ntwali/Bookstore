import './styles.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Renderbooks from './components/Render';
import Categories from './components/Categories';

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Renderbooks />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
