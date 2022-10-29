import React from 'react'
import Cocktaillist from '../components/Cocktaillist'            //importing searchbar and cocktailist components
import Searchbar from '../components/Searchbar'



function Home() {
  return (
    <main>
    <Searchbar/>
    <Cocktaillist/>                         //calling the imported components
    
    </main>
  )
}

export default Home
