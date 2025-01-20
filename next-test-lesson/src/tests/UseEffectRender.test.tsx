import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import UserEffectRender from '../app/UseEffectRender'

describe('useEffectのレンダリング', () => {
  afterEach(() => cleanup())

  it('非同期関数が解決された後にのみレンダリングされる', async () => {
    render(<UserEffectRender />)
    expect(screen.queryByText(/I am/)).toBeNull()
    expect(await screen.findByText(/I am/)).toBeInTheDocument()
  })
})
