import React from 'react'
import "./home.css"
const Home = () => {
  return (
    <div className='home'>
     <div className='image'> 
     <img src='image.png'/>
     </div>
     <div className='rep'>
    <h2>I'm a Fullstack Js</h2>  
    <h2>Web Developer</h2>
    <p>Motivated junior web developer looking for a role as full-stack web developer .
       Passionate about building first-class web applications.</p>
       <div className='btn'><button>Read more</button></div>
     </div>
    </div>
  )
}

export default Home
