import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from "../layout/Layout.jsx";
import MovieListPage from "../pages/movieListPage/MovieListPage.jsx";


// Определение маршрутов
const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route path="/movie" element={<MovieListPage/>}/>
                    {/* <Route path="/movie/:id" element={<MovieDetailPage />} />  */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Router;