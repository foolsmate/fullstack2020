import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render, fireEvent } from '@testing-library/react'
import Blog from '../components/blog'

test('blog is rendered correctly after button click', () => {
  const blog = {
    title: 'A test blog',
    author: 'Tester',
    url: 'test.io',
    likes: 0,
  }

  
  const component = render(
    <Blog blog={blog} />
  )

  const button = component.getByText('view')
  fireEvent.click(button)

  expect(component.container).toHaveTextContent('A test blog Testertest.iolikes 0 like cancel')
  
})