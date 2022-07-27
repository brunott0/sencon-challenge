import { useState, useEffect } from 'react'
import fetchUsers from '../queries/fetchUsers'

function useUsersList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    if(users.length === 0) fetchUsers(setUsers)
  }, [users])

  return users
}

export default useUsersList