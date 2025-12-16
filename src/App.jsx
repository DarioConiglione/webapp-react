import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Movies from "./pages/Movies";
import MovieDetails from "./pages/MovieDetails";
import DefaultLayout from "./layouts/defaultLayout";



function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path='/' element={<HomePage />}></Route>
            <Route path='/movies' element={<Movies />}></Route>
            <Route path='/movies/:id' element={<MovieDetails />}></Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
