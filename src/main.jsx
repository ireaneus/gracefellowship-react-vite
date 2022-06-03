import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import './index.css'
import NumbersPage from './routes/NumbersPage';
import SermonsPage from './routes/SermonsPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />} />
    <Route path='/sermons' element={<SermonsPage />} />    
    <Route path='/numbers' element={<NumbersPage />} />
    </Routes>
  </BrowserRouter>
)
