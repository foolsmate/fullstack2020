import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import Blog from '../components/blog'

test('renders content', () => {
  const blog = {
    title: 'A test blog',
    author: 'Tester'
  }

  const component = render(
    <Blog blog={blog} />
  )

  expect(component.container).toHaveTextContent(
    'A test blog Tester'
  )
})