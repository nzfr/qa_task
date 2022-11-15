import React from 'react'
import { render, screen } from '@testing-library/react'
import Appbar from './components/app-bar/Appbar'

test('renders learn react link', () => {
  render(<Appbar />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
