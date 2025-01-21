import axios from 'axios'
import React, { useState } from 'react'

const MockServer = () => {
  const [clicked, setClicked] = useState<boolean>(false)
  const [userName, setUserName] = useState<any>(null) // userName をオブジェクトとして保存
  const [error, setError] = useState<string | null>('')

  const fetchUser = async () => {
    axios
      .get('https://jsonplaceholder.typicode.com/users/1')
      .then((response) => {
        setUserName(response.data) // ユーザーのデータを格納
        setClicked(true)
      })
      .catch(() => {
        setError('Failed to fetch user data')
      })
  }

  const buttonText = clicked ? 'Loaded' : 'Start'

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <button
        onClick={fetchUser}
        disabled={clicked}
        className={`px-6 py-2 font-semibold text-white rounded-md transition-all duration-200
          ${clicked ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'} 
          ${error ? 'border-red-500 border-2' : ''}`}
      >
        {buttonText}
      </button>
      {userName && <h3 className="text-xl">{userName.name}</h3>}{' '}
      {error && (
        <p data-testid="error" className="text-red-500">
          {error}
        </p>
      )}
    </div>
  )
}

export default MockServer
