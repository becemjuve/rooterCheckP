import React, { useEffect, useState } from 'react'

export default function MovieForm({allMovies,setAllMovies,subMovies,setSubMovies}) {
    const [isShowForm, setIsShowForm] = useState(false)
    const [isInputNotFilled, setIsInputNotFilled] = useState(false)
    const [ismovieExist,setIsMovieExist] = useState(false)
    const [title, setTitle]= useState('')
    const [desc, setDesc]= useState('')
    const [trailer, setTrailer]= useState('')
    const [pURL, setPURL]= useState('')
    const [rating, setRating]= useState(0)
    const [genres, setGenres]= useState('')

    useEffect(()=>{ 
      setSubMovies(allMovies)
    },[allMovies])

  return (
    // ------------------------------------------------------- add new movie button
    <div className='mb-3'>
      {!isShowForm && <button type="button" className="btn btn-success mb-3" 
                        onClick={()=>setIsShowForm(true)}> 
                          Add new movie
                      </button>}
    {/* ------------------------------------------------------- new movie form */}
      {isShowForm && <form>
        {/* -------------------------- title input */}
        <div className="mb-3 ">
            <input onChange={(e)=> setTitle(e.target.value)} type="text" placeholder='title...' 
                  className={`form-control ${isInputNotFilled && title.trim() === '' ? 'border border-danger' 
                  : null}`}  />
            {ismovieExist && <p className='text-danger'>this movie is already exist</p>}
        </div>
        {/* ------------------------- description input */}
        <div className="mb-3">
            <input onChange={(e)=> setDesc(e.target.value)} type="text" placeholder='description...' 
                  className={`form-control ${isInputNotFilled && desc.trim() === '' ? 'border border-danger' 
                  : null}`} />
        </div>
        {/* ------------------------- trailer input */}
        <div className="mb-3">
            <input onChange={(e)=> setTrailer(e.target.value)} type="text" placeholder='Trailer link...(optionnal)' 
                  className={'form-control' } />
        </div>
        {/* ------------------------- poster url input */}
        <div className='row'>
        <div className="mb-3 col-4">
            <input onChange={(e)=> setPURL(e.target.value)} type="text" 
            placeholder='Enter your poster URL...(optionnal)' 
            className="form-control" />
        </div>
        {/* ------------------------- rating input */}
        <div className="mb-3 col-4">
            <input onChange={(e)=> setRating(+e.target.value > 10 ? 10 : 
                  e.target.value.trim() ==='' ? 0 : +e.target.value)} 
                  type="number" placeholder='Rating between 0.5 and 10' 
                  className={`form-control ${isInputNotFilled && rating === 0 ? 'border border-danger' : null}`} />
        </div>
        {/* ------------------------- genres dropdown */}
        <div className="mb-3 col-4">
        <select value={genres} onChange={(e)=> setGenres(e.target.value)} 
                className={`form-select ${isInputNotFilled && genres.trim() === '' ? 'border border-danger' : null}`} >
            <option value='' >Choose genres</option>
            <option value="Horror">Horror</option>
            <option value="Comedy">Comedy</option>
            <option value="Romantic">Romantic</option>
            <option value="Action">Action</option>
        </select>
        </div>
        </div>
        <div>
          {/* if an input is  Not Filled out a new error message will display*/}
          {isInputNotFilled && <p className='alert alert-danger'>Please fill out all required fields !!!</p>}  
        </div>
        {/* -------------------------------------------------------------------add button */}
        <button type="button" className="btn btn-primary" onClick={()=>{
          // check all required fields
          if(!(title.trim() === '' || desc.trim() === '' ||  rating ===0 || genres === '') ){ 
            if (allMovies.find(movie => movie.title.toLowerCase()===title.toLowerCase())) setIsMovieExist(true)
            else{
                  setAllMovies([...allMovies,{ //
                    id: allMovies.length + 1,  //
                    title,             //
                    description: desc,
                    trailer,
                    posterURL: pURL,
                    rating ,
                    genres
                  }]) 
                  setTitle('') 
                  setDesc('') 
                  setTrailer('')
                  setRating(0) 
                  setGenres('') 
                  setIsShowForm(false)
                  setIsMovieExist(false)
                  setIsInputNotFilled(false)}}
          else setIsInputNotFilled(true)
        }}>Add</button>
        {/* ---------------------------------------------------------------- cancel button */}
        <button type="button" className="btn btn-light mx-2" onClick={()=>{
          setIsInputNotFilled(false)
          setIsShowForm(false)
          setIsMovieExist(false)
          setTitle('') 
          setDesc('') 
          setRating(0) 
          setGenres('') 
          }}>Cancel</button>
      </form> }
    </div>
  )
}
