import React from 'react'

 function Summary (props)  {
   console.log(props.data.Summary)
  return (
    <ul>
          {props.data.Summary.map(item => <li>{item}</li>)}
    </ul>
  )
}
export default Summary;