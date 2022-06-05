import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App'
import './css/index.css'
import { Book, Books, SermonsPage } from './Pages';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App />} />
      <Route path='/sermons' element={<SermonsPage />}>
         <Route path='books' element={<Books />}>
         <Route
              index
              element={
                <main style={{ padding: "1rem" }}>
                  <p>Select a collection</p>
                </main>
              }
            />
            <Route path=':bookId' element={<Book />} />
         </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>
);
