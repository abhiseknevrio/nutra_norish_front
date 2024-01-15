import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/atom/Header';
import Home from './components/organism/Home';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<h1>Page is Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
