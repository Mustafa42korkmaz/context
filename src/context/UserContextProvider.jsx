import React, { createContext, useEffect, useState } from 'react'

  export const UserContext = createContext()

const UserContextProvider = ({children}) => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("https://api.github.com/users")
    .then((res) => res.json() )
    .then((data) => setUsers(data) )
  }, [])

  const changeWidth = (id, width) => {
    setUsers(
      users.map((item) => item.id ===id ? {...item, width: width} : item)
    )
  }

  return (
    <UserContext.Provider value={changeWidth}> {children} </UserContext.Provider>
  )
}

export default UserContextProvider