import React, { useState, useEffect } from 'react'
import axios from 'axios'

const UseEffectRender = () => {
  const [user, setUser] = useState(null)
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
  console.log(fetchJSON, 'ユーザ情報')

  return (
    <div>
      {user ? (
        <p>
          I am {user.username} : {user.email}
        </p>
      ) : null}
    </div>
  )
}

export default UseEffectRender
