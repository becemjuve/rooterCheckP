import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Home from './pages/Home'

import { useState } from 'react';
import { movies } from './data';

import { Routes, Route } from "react-router-dom";
import AboutMovie from './pages/AboutMovie';

function App() {
  const [allMovies, setAllMovies] = useState(movies)  // let us assume that this state (allMovies) is our database
  const [subMovies, setSubMovies] = useState(allMovies) 
  return (
    <div className="App">
      <Navbar />
      <div className='container-fluid mt-3'>
        <Routes>
          <Route path='/' element={<Home allMovies={allMovies} setAllMovies={setAllMovies} 
                                          subMovies={subMovies} setSubMovies={setSubMovies}/>} />
          <Route path='/:id' element={<AboutMovie subMovies={subMovies} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
