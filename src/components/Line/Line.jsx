import React from 'react'

function Line(props) {
  return (
    <div className='line'>
      <h1 className='stays'>Stays in Finland</h1>
      {props.stays>=12?
      <span className='nStays'>12+ stays</span>:
      <span className='nStays'>{`${props.stays} stays`}</span>
      }

    </div>
  )
}

export default Line
  