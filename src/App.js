import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Addbook from './components/Addbook';
import Categories from './components/Categories';

const App = () => (
  <div className="App">

    <Header />
    <Routes>
      <Route path="/" element={<Addbook />} />
      <Route path="/categories" element={<Categories />} />
    </Routes>
  </div>
);

export default App;
