import React, { useContext } from 'react'
import { UserContext } from '../context/UserContextProvider'


const ShowUsers = () => {
  
    const {users} = useContext(UserContext)
  return (
    <div>
      <h2>User List</h2>
      
       
    </div>
  )
}

export default ShowUsers