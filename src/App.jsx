import { useState,useEffect } from 'react'
import Card from './Card'


function App() {

  const [userApi, setuserApi] = useState([])
  const ApiURL = "https://rickandmortyapi.com/api/character";

  const usersTwitter= async()=>{ 
    const response= await fetch(ApiURL)
    const resposeJSON= await response.json();

    setuserApi(resposeJSON.results)
    console.log(resposeJSON.results);
  }

  useEffect(() => {
    usersTwitter()
  }, [])
  

 

  return (
    <section className='App'>
     <div className='title'>
         <h1>TWITTER FOLLOW CARDS <i class="bi bi-twitter"></i></h1>
    </div>
       
       <Card userApi={userApi} />
    </section>
  )
}

export default App

