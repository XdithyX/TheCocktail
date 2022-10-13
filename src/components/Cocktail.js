import React, { useEffect } from 'react'
import {Link } from 'react-router-dom'
import Aos from 'aos'
function Cocktail({image , name, id , info, glass}) {
  useEffect(()=>{
    Aos.init({duration:1100})
  },[])
  return (
    <article className='cocktail'>
    <div className='img-container'>
    
    <img src={image}></img>

    </div>
    <div className="cocktail-footer">
    <h3>{name}</h3>
    <h4>{glass}</h4>
    <p>{info}</p>
    <Link to={`cocktail/${id}`} className='btn btn-primary btn-details'>Details</Link>
    </div>
    </article>
  )
}

export default Cocktail