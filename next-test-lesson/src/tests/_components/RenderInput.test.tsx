import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import RenderInput from '@/app/_components/RenderInput';
import userEvent from '@testing-library/user-event';

//MEMO: 次のテストが前のテストの副作用を受けないようにクリーンアップする
afterEach(() => cleanup());

describe('Rendering', () => {
  it('レンダリング要素をすべて正しく取得する', () => {
    const mockOutputConsole = jest.fn();
    render(<RenderInput outputConsole={mockOutputConsole} />);
    screen.debug();
    expect(screen.getByRole('button')).toBeTruthy();
    expect(screen.getByPlaceholderText('Enter')).toBeTruthy();
  });
});

describe('inputフォームのonChangeイベント', () => {
  it('inputの入力値を正しく取得する', async () => {
    const mockOutputConsole = jest.fn();
    render(<RenderInput outputConsole={mockOutputConsole} />);
    const inputValue = screen.getByPlaceholderText('Enter') as HTMLInputElement;
    //MEMO: userEvent.typeで入力フィールドにtestを入力
    await userEvent.type(inputValue, 'test');
    expect(inputValue.value).toBe('test');
  });
});
