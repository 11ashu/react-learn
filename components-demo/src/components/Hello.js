import React from 'react'

const Hello = () => {
  // JSX syntax ----- Function Based Component
  return (
    <div className='dummyClass' id='test'>
      <h1>Hello Vishwas</h1>
    </div>
  )
  // without JSX syntax
  // return React.createElement(
  //   'div',
  //   {id: 'hello', className: 'dummyClass'},
  //   React.createElement('h1', {id: 'heading'}, 'Hello Vishwas')
  // )
}

export default Hello
