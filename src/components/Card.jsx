import React, { useContext } from 'react'
import { UserContext } from '../context/UserContextProvider'


const Card = () => {

  const {users, changeWidth} = useContext(UserContext)
  

  return (
    <div>
        {users.map((user) => {
        return (<div key = {user.id}>
           <h3>{user.login}</h3>
           <img src={user.avatar_url} alt="" width={user.width} />
           <input 
           value={user.width}
           type="number" 
           onChange={(e) => changeWidth(id, e.target.value)
              
           } />
        </div>)
      })}
    </div>
  )
}

export default Card