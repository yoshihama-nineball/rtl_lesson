'use client'
import React from 'react'
import RenderInput from './_components/RenderInput'

const page = () => {
  const handleOutputConsole = (value: string) => {
    console.log(value)
  }
  return (
    <>
      <h2>React Test App</h2>
      <RenderInput outputConsole={handleOutputConsole} />
    </>
  )
}

export default page
