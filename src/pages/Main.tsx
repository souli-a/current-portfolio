import ReactDOM from 'react-dom/client';
import Portfolio from './Portfolio';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import '../styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
