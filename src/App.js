import './App.css';
import { useState } from 'react';
import AddMovie from './AddMovie';
import MovieCard from './MovieCard';
import FilterMovie from './FilterMovie';

function App() {
  const [movies,setMovies]=useState([
    {title:"first movie",
    image:"/logo192.png"
  },
  {title:"second movie",
  image:"/logo192.png"
},
{title:"third movie",
image:"/logo192.png"
}
  ])
  return (
    <div className="flex items-center flex-col">
      <AddMovie setMovies={setMovies} movies={movies}/>
    <FilterMovie movies={movies} setMovies={setMovies}/>
      <div className='grid grid-cols-3' >
      {movies.map((value)=><MovieCard value={value}/>)
      }
      </div>
      

    </div>
  );
}

export default App;
