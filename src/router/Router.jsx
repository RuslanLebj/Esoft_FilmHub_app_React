import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Layout from "../layout/Layout.jsx";
import MovieListPage from "../pages/movieListPage/MovieListPage.jsx";
import MovieDetailPage from "../pages/movieDetailPage/MovieDetailPage.jsx";


// Определение маршрутов
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to="/movies" />} />
                <Route path="/movies" element={<Layout/>}>
                    <Route index path="/movies" element={<MovieListPage/>}/>
                    <Route path="/movies/:id" element={<MovieDetailPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;