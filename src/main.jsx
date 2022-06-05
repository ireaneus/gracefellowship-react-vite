import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import './css/index.css'
import NumbersPage from './Pages/NumbersPage';
import SermonsPage from './Pages/SermonsPage';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />}>
        <Route path='/numbers' element={<NumbersPage />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
      <Route path='/sermons' element={<SermonsPage />} />
    </Routes>
  </BrowserRouter>
)
