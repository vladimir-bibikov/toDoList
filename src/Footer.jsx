import React from 'react'

const Footer = ({length}) => {
  const date = new Date();
  console.log(date);
  return (
    <footer>
      <p className='length'>
        List has {length} {length == 1 ? 'item' : 'items'}
      </p>
      <p className='year'>
        {date.getFullYear()}
      </p>
      <p>
        {date.getDate()}/{date.getMonth() + 1}
      </p>
    </footer>
  )
}

export default Footer