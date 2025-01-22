import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { setupServer } from 'msw/node'
import MockServer from '../app/MockServer'
import { rest } from 'msw'
import { ResponseResolver, RestContext, RestRequest } from 'msw'

// モックAPIサーバーの設定
const server = setupServer(
  rest.get(
    'https://jsonplaceholder.typicode.com/users/1',
    (req: RestRequest, res: ResponseResolver, ctx: RestContext) => {
      return res(ctx.status(200), ctx.json({ username: 'Bred dummy' }))
    },
  ),
)

// テストのライフサイクル
beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
})
afterAll(() => server.close())

describe('Mocking API', () => {
  it('[Fetch success]Should display fetched data correctly and button disable', async () => {
    render(<MockServer />)
    await userEvent.click(screen.getByRole('button'))

    // 型アサーションを追加して、`heading` の内容を確認
    const heading = await screen.findByRole('heading')
    expect(heading).toHaveTextContent('Bred dummy')

    // ボタンが disabled になっていることを確認
    expect(screen.getByRole('button')).toHaveAttribute('disabled')
  })

  it('[Fetch failure]Should display error msg, no render heading and button abled', async () => {
    server.use(
      rest.get(
        'https://jsonplaceholder.typicode.com/users/1',
        (req, res, ctx) => {
          return res(ctx.status(404))
        },
      ),
    )
    render(<MockServer />)
    await userEvent.click(screen.getByRole('button'))

    // エラーメッセージが表示されることを確認
    const errorMessage = await screen.findByTestId('error')
    expect(errorMessage).toHaveTextContent('Fetching Failed !')

    // 見出しが表示されないことを確認
    expect(screen.queryByRole('heading')).toBeNull()

    // ボタンが再び有効であることを確認
    expect(screen.getByRole('button')).not.toHaveAttribute('disabled')
  })
})
