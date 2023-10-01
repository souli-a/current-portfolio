import ReactDOM from 'react-dom/client';
import Portfolio from './Portfolio';
import '../styles/index.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Portfolio />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  </BrowserRouter>
);
