import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div>
      {/* Определение маршрутов */}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/movie" element={<MovieListPage />} />
          <Route path="/movie/:id" element={<MovieDetailPage />} /> 
        </Route>
      </Routes>
    </div>
  );
}

export default App