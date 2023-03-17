import React, { useState } from 'react'

function AddMovie({setMovies,movies}) {
    const [inputValue,setInputValue]=useState("")
    function handleChange(e){
    setInputValue(e.target.value)

    }
    function addMovie(){
        setMovies([...movies,{title:inputValue,image:"/logo192.png"}])
    }
  return (
    <div className='mt-6 mb-6'>
  <input type="text" id="success" class="bg-blue-50 border border-blue-500 text-blue-900  placeholder-blue-700  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2.5 mr-3" placeholder="add your movie here" onChange={handleChange}/>
        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={addMovie}>ADD MOVIE</button>
    </div>  
  )
}

export default AddMovie