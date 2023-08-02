import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'


export default function MovieList({allMovies, setAllMovies,subMovies,setSubMovies}) {
    const [filtByGenres, setFiltByGenres]= useState('All')
    const [filtByRating, setFiltByRating]= useState(0)
    const [filtByTitle, setFiltByTitle]= useState('')

    // whenever you change one of the three states (filtByGenres,filtByRating,filtByTitle) ,
    // you need to rechange the value of subMovies state directy at the same moment(without clicking any button), 
    // (you can check it out), that's why i used useEffect Hook
    useEffect(()=>{
      setSubMovies(allMovies.filter(movie => 
        filtByGenres=== 'All'  ? 
          movie.rating >= filtByRating && movie.title.toLowerCase().includes(filtByTitle.toLowerCase()) :
          movie.genres === filtByGenres && movie.rating >= filtByRating && 
          movie.title.toLowerCase().includes(filtByTitle.toLowerCase())
        )) 
    },[filtByGenres,filtByRating,filtByTitle])
    
    useEffect(()=>{
      setFiltByGenres('All')
      setFiltByRating(0)
      setFiltByTitle('')
    },[allMovies])
  return (
    <>
        <div className='row d-flex align-items-center'>
          {/*------------------------------------------------- filter by Genres dropdown */}
          <div className='mt-3 col-3'>
            <select value={filtByGenres} onChange={(e)=>setFiltByGenres(e.target.value)} className="form-select" >
                <option value='All' >filter by Genres</option>
                <option value="Horror">Horror</option>
                <option value="Comedy">Comedy</option>
                <option value="Romantic">Romantic</option>
                <option value="Adventure">Adventure</option>
                <option value="Action">Action</option>
            </select>
          </div>
          {/* ------------------------------------------------- filter by rating dropdown */}
          <div className='mt-3 col-3'>
            <select value={filtByRating} onChange={(e)=> setFiltByRating(+e.target.value)} className="form-select" >
                <option value={0} >filter by rating</option>
                <option value="3">{'> 3'}</option>
                <option value="5">{'> 5'}</option>
                <option value="7">{'> 7'}</option>
            </select>
          </div>
          {/* ------------------------------------------------- search */}
          <form className="d-flex col-6 search-m" style={{marginTop:'15px'}} role="search">
            <input className="form-control me-2 " type="search" value={filtByTitle} 
                  onChange={(e)=>setFiltByTitle(e.target.value)} placeholder='serach by title'/>
          </form>
        </div>
        <div className='row d-flex justify-content-center mt-3'>
          {/* ------------------------------------------------ show all movies button */}
        <div>
          {allMovies.length !== subMovies.length ? 
            <button className='btn btn-dark' onClick={()=>{
            // setSubMovies(allMovies)
            setFiltByGenres('All')
            setFiltByRating(0)
            setFiltByTitle('')
            }}>Show all movies</button>: null}
        </div>
        {/* ---------------------------------------------------- movies list */}
        {subMovies.map(movie => (
            <MovieCard key={movie.id} movie ={movie} />
        ))}
        {/* ------------------------------------------------------ movies not found msg */}
      {subMovies.length===0 ? <div className='text-center mt-4'>
                                  <h1>Sorry ! Movies not found</h1>
                              </div> : null}
        </div>
    </>   
  )
}
