import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Booklist from './components/Booklist';
import Categories from './components/Categories';

const App = () => (
  <div>
    <Header />
    <Routes>
      <Route path="/" element={<Booklist />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
