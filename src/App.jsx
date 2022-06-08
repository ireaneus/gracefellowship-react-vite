import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import { HomePage, Layout, NoPage, Book, SermonsPage } from './pages';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="books" element={<SermonsPage />}>
          <Route
              index
              element={
                <div style={{ padding: "1rem" }}>
                  <p>Select a collection</p>
                </div>
              }
            />
            <Route path=':bookId' element={<Book />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


