import React from 'react'
import './card.css'
import { useState } from 'react'
 
export const Card=({userApi})=> {

const [isFollowed, setIsFollowed] = useState(false)
const txt= isFollowed ? 'Siguiendo': "Seguir"
const btnClass= isFollowed? 'tw-card-button tw-card-button-unfollowed un-followed':'tw-card-button'

const handleClick=()=>{
setIsFollowed(!isFollowed)
}

return (
  <>
    
      {
        userApi.map(user=>(
          
      <article key={user.id} className='tw-card-article twitter-follow-card'>
      <header key={user.id} className='tw-card-header'>
      <img className='tw-card-img' src={user.image} />
      <div className='tw-card-username'>
      <strong>{user.name}</strong>
      <span>@{user.name}</span>
      </div>
      </header>
      <aside className='tw-card-aside'> 
      <button onClick={handleClick} className={btnClass}>
      
      <span className='follow-txt'>{txt}</span>
      <span className='unfollow-txt'>Dejar de seguir </span>
      </button> 
      </aside>
      </article>
        ))
      }
     
      
   
    </>
  )
}
 
export default Card  