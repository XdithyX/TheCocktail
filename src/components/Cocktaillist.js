import React from 'react'
import Loading from './Loading'
import Cocktail from './Cocktail'
import {useGlobalContext} from '../Context'


function Cocktaillist() {
  const {loading,cocktails}= useGlobalContext()
 console.log(cocktails)
  if(loading)
 { return <Loading/>
 }
if(cocktails.length<1)
{return(
  <h1 className='section-title'>No cocktails matched your description</h1>
)}

return(
  <section className='section'>
  <h2 className='section-title'>Cocktails</h2>
  <div className='cocktails-center'>
  {cocktails.map((item)=>{
   return <Cocktail key={item.id} {...item} />
   } )}
  </div>
  </section>
)

}

export default Cocktaillist