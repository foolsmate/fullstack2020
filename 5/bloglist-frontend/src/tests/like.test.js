import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from '../components/blog'

test('clicking the button calls event handler twice', async () => {
  const blog = {
    title: 'A test blog',
    author: 'Tester',
    url: 'test.io',
    likes: 0,
  }
  
  const mockHandler = jest.fn()

  const component = render(
    <Blog blog={blog} onClick={mockHandler} />
  )

  const button = component.getByText('view');
  fireEvent.click(button);
  
  const button1 = component.getByText('like');
  fireEvent.click(button1);
  fireEvent.click(button1);
  
  expect(mockHandler.mock.calls).toHaveLength(2)
})