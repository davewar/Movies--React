import React, {useEffect, useState} from 'react'
import Movies from './components/Movies';



const APIURL =
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";



const SEARCHAPI =
    "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";



const App = () => {

    const [movies,setMovies] = useState([])
    const [searchTerm,setSearchTerm] = useState("")

    // getData(APIURL) // init

    const getData = async (url)=>{
          
        const res =  await fetch(url)

        if(res.status >=200 && res.status <=299){
            const resData = await res.json()
            // console.log(resData);
            if(resData.results.length === 0){
                   getData(APIURL)
                alert("No items found")
            }

             setMovies(resData.results)
            

        } else{
           //404
              getData(APIURL)
        }
        
        if(setSearchTerm){
             setSearchTerm("")
        }



        // console.log(resData);
       
    }
   
    useEffect(() => {
             getData(APIURL);
  }, []);

    const handleSubmit = (e)=>{
        e.preventDefault()

        if(searchTerm){
            getData(SEARCHAPI + searchTerm)

        }
        setSearchTerm("")
 

        
    }

    const handleOnChange = (e)=>{
          
            setSearchTerm(e.target.value)
            // console.log(searchTerm);
    }

    return ( 
         <>  
            <header>
                <form action="" onSubmit={handleSubmit}>
                    <input type="text" value={searchTerm} onChange={handleOnChange}className="search" placeholder="Search movie."/>
                </form>
                
            </header>

            <div className="movie-container">
           
            {movies.map((movies)=>{
                // console.log(movies)
               return  <Movies key={movies.id} {...movies} />
            })

            }
            </div>
        </>
    )
}



export default App
