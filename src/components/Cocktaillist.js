import React from 'react'
import Loading from './Loading'
import Cocktail from './Cocktail'
import {useGlobalContext} from '../Context'


function Cocktaillist() {
  const {loading,cocktails}= useGlobalContext()

  if(loading)
 { return <Loading/>
 }
if(cocktails.length<1)
{return(
  <h1 className='section-title'>No cocktails matched your description</h1>
)}

return(
  <h1>cocc</h1>
)

}

export default Cocktaillist