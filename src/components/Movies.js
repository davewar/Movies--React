import React from 'react'

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

const defaultImage = "https://images.unsplash.com/photo-1460881680858-30d872d5b530?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8bW92aWVzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"

const Movies = ( props ) => {
    // console.log("props", props);

    // const {id, title, poster_path,overview,vote_average } = props.data
const { title, poster_path,overview,vote_average } = props
    // console.log(title, id);

    return (
        <div className="movie">
            <img src={ poster_path ?
                IMGPATH + poster_path : defaultImage } alt={title}/>
            <div className="movie-info">
                <h3>{title}</h3>
                <span>{vote_average}</span>
            </div>
           <div className="movie-over">
               <h2>overview:</h2>
                <p>{overview}</p>
           </div>
        </div>
        
    )
}

export default Movies
