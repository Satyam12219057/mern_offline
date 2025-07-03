import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage';
import ViuePage from './pages/ViuePage';

const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePage/>} />
      <Route path="/search" element={<SearchPage/>} />
      <Route path="/view" element={<ViuePage/>} />
      <Route path="*" element={<NotFoundPage/>} />//

    </Routes>
  </BrowserRouter>
  )
}

export default App