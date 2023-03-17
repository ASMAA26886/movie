import React from 'react'
import { useState } from 'react'
import Fuse from 'fuse.js'


function FilterMovie({movies,setMovies}) {
    const [inputValue,setInputValue]=useState("")
    function handleChange(e){
    setInputValue(e.target.value)

    }
    function handleClick(){
        const fuse = new Fuse(movies, {
            keys: ['title'],
            threshold:0.4
          })
// let result= movies.filter(movie=>movie.title==inputValue)
let result= fuse.search(inputValue)
let stock=[]
for(let x of result){
stock.push({title:x.item.title,image:x.item.image})
}

setMovies(stock)
    }
  return (
    <div>
        <input type="text" onChange={handleChange}/>
        <button onClick={handleClick}>filter </button>
    </div>
  )
}

export default FilterMovie