import { useState } from 'react'
import './App.css'
import Layout from './layout/Layout';
import { Routes, Route } from 'react-router-dom';
import MovieListPage from './pages/movieListPage/MovieListPage';

function App() {
  return (
    <div>
      {/* Определение маршрутов */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/movie" element={<MovieListPage />} />
          {/* <Route path="/movie/:id" element={<MovieDetailPage />} />  */}
        </Route>
      </Routes>
    </div>
  );
}

export default App