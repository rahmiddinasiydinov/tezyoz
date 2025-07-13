import React from 'react'
import PropTypes from 'prop-types'
import Button from '../UI/Button'

function Header(props) {

  return (
    <header className='py-8 px-16 text-primary border-text flex items-center justify-between' >
      <h1 className='text-lg md:text-5xl font-bold'>Tez<span className='text-text'>Yoz</span></h1>
      <nav>
        <Button>Reyting</Button>
        <Button>Natijalar</Button>
        <Button>Sozlamalar</Button>
        <Button filled>Kirish</Button>
      </nav>
    </header>
  )
}

Header.propTypes = {

}

export default Header
