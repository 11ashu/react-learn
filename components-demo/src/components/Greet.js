import React from 'react'

// Functional Component
// function Greet() {
//   return <h1>Hello Vishwas</h1>
// }

// export const Greet = () => <h1>Hello Vishwas</h1>

const Greet = props => {
  return (
    <div>
      <h1>
        Hello {props.name} a.k.a {props.heroName}
      </h1>
      {props.children}
    </div>
  )
}

export default Greet;
