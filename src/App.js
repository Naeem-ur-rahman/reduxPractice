import './App.css';
import FetchPage from './pages/FetchPage';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/fetch' element={<FetchPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
