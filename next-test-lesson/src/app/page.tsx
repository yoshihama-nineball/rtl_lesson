'use client'
import React from 'react'
import RenderInput from './_components/RenderInput'
import FrameworkList from './_components/FrameworkList'

const Page = () => {
  const data = [
    {
      id: 1,
      item: 'React',
    },
    {
      id: 2,
      item: 'Next.js',
    },
    {
      id: 3,
      item: 'Testing Library',
    },
  ]

  const handleOutputConsole = (value: string) => {
    console.log(value)
  }

  console.log('Page Data:', data) // デバッグ用のログ

  return (
    <>
      <h2>React Test App</h2>
      <RenderInput outputConsole={handleOutputConsole} />
      <FrameworkList frameworks={data} />
    </>
  )
}

export default Page
