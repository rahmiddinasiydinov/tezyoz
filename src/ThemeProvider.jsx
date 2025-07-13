import React from 'react'

function ThemeProvider({children}) {
  return (
    <div className='dark'>{children}</div>
  )
}

export default ThemeProvider;