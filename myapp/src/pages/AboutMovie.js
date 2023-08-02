import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Rating from '../components/Rating'
const defImg= require('../img/def.jpg')

export default function AboutMovie({subMovies}) {
    const {id} = useParams()
    const [targetMovie, setTargetMovie]= useState(subMovies)
    useEffect(()=>{
        setTargetMovie(targetMovie.find(movie=> movie.id === +id))
    },[])
    
    
  return (
    
    <div className='row'>
            <h1>{targetMovie.title}</h1>
        <div className='col-4'>
            <img style={{width:'80%',height:400,objectFit:'cover'}} src={targetMovie.posterURL || defImg} alt={targetMovie.title} />
        </div>
        <div className='col-4'>
            <p >{targetMovie.description}</p>
        </div>
        <div className='col-4 border-start border-1 border-secondary'>
            <div className=' pb-4'>
            <p className='text-primary fs-5'>Rating :</p>
            <Rating movie={targetMovie} />
            </div>
            <div className='col-4 border-top border-2'>
                <p className='text-primary fs-5'>Genre :</p>
                <h5>{targetMovie.genres}</h5>
            </div>
            {targetMovie.trailer ?
                <a target='blanc' className='btn btn-success mt-4' href={targetMovie.trailer}>Movie trailer</a>:
                <button className='btn btn-danger' disabled>No movie trailer</button>
            }
            </div>
            <Link to='/' className='btn btn-outline-primary mt-2 m-auto' style={{width:150}} >Back to Home</Link>
    </div>
)
}
