import React from 'react'

type FrameworkListProps = {
  frameworks: { id: number; item: string }[]
}

const FrameworkList: React.FC<FrameworkListProps> = ({ frameworks }) => {
  console.log('FrameworkList Component Loaded') // デバッグ用のログ
  console.log('FrameworkList Props:', frameworks) // デバッグ用のログ

  if (!frameworks || !frameworks.length) {
    return <h1>No Data</h1>
  }

  return (
    <div>
      <ul>
        {frameworks.map(({ id, item }) => (
          <li key={id}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

export default FrameworkList
