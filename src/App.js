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
          <Route path='*' element={<div><h1>404 Error NO Page Found</h1></div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
