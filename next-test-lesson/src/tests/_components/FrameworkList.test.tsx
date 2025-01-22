import React from 'react'
import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FrameworkList from '@/app/_components/FrameworkList'

afterEach(() => cleanup())

describe('propsを用いたリストをレンダリングする', () => {
  it('データをpropしないとき、No Dataをレンダリングする場合のテストケース', () => {
    render(<FrameworkList />)
    expect(screen.getByText('No Data')).toBeInTheDocument()
  })
  it('listのアイテムを正しくレンダリングするテストケース', () => {
    const dummyData = [
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
    render(<FrameworkList frameworks={dummyData} />)
    const frameworkItems = screen
      .getAllByRole('listitem')
      .map((ele) => ele.textContent)
    const dummyItems = dummyData.map((ele) => ele.item)
    expect(frameworkItems).toEqual(dummyItems)
    expect(screen.queryByText('No Data')).toBeNull()
    // expect(screen.getAllByRole('listitem')).toHaveLength(2)
  })
})
