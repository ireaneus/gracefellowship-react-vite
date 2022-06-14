import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './css/App.css';
import { HomePage, Layout, NoPage, Book } from './pages';
import Library from './pages/Library';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path=':bookId' element={<Book />}>
          <Route
              index
              element={
                <div style={{ padding: "1rem" }}>
                  <p>Select a collection</p>
                </div>
              }
            />
            </Route>
            <Route path='library' element={<Library />} />
          </Route>
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}


