import React, { useState, useEffect } from 'react'
import axios from 'axios'

interface User {
  username: string
  email: string
}

const UseEffectRender = () => {
  const [user, setUser] = useState<User | null>(null) // user の型を User | null と指定

  const fetchJSON = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users/1')
    return res.data
  }

  useEffect(() => {
    const fetchUser = async () => {
      const user = await fetchJSON()
      setUser(user)
    }
    fetchUser()
  }, [])

  return (
    <div>
      {user ? (
        <p>
          I am {user.username} : {user.email}
        </p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default UseEffectRender
