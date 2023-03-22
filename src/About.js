import React from 'react'
import {  useLocation } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
function About() {

    const navigate = useNavigate()
function homepage(){
    navigate("/")
}
    
      return (
    <div>
        <p>about</p>
        <button onClick={homepage}>naviagte to home page</button>git init
    
    
    </div>

  )
  
  
}

export default About