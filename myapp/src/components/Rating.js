import React from 'react'

export default function Rating({movie}) {
  return (
    <div className='rating'>
        {/*------------------- first star */}
        {movie.rating < 1 ? 
            <i className="fa-regular fa-star"></i>: // empty star
         movie.rating < 2 ?   
            <i className="fa-sharp fa-regular fa-star-half-stroke"></i>:  // half star
            <i className="fa-solid fa-star"></i>   // full star
        }
        {/*------------------- second star */}
        {movie.rating < 3 ? 
            <i className="fa-regular fa-star"></i>:
         movie.rating < 4 ?   
            <i className="fa-sharp fa-regular fa-star-half-stroke"></i>:  
            <i className="fa-solid fa-star"></i>   
        }
        {movie.rating < 5 ? 
            <i className="fa-regular fa-star"></i>:
         movie.rating < 6 ?   
            <i className="fa-sharp fa-regular fa-star-half-stroke"></i>:  
            <i className="fa-solid fa-star"></i>   
        }
        {movie.rating < 7 ? 
            <i className="fa-regular fa-star"></i>:
         movie.rating < 8 ?   
            <i className="fa-sharp fa-regular fa-star-half-stroke"></i>:  
            <i
             className="fa-solid fa-star"></i>   
        }
        {movie.rating < 9 ? 
            <i className="fa-regular fa-star"></i>:
         movie.rating < 10 ?   
            <i className="fa-sharp fa-regular fa-star-half-stroke"></i>:  
            <i className="fa-solid fa-star"></i>   
        }
        <span className='mx-3'>{movie.rating}/10</span>
      
    </div>
  )
}
