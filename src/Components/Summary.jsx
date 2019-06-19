import React from 'react'

 function Summary (props)  {
   console.log(props.data.Summary)
   if(props.data.Summary.length === 1 ){
    return <label> &nbsp; &nbsp; &nbsp; { props.data.Summary[0]}</label>
   }
  return (
    <ul>
          {props.data.Summary.map(item => <li>{item}</li>)}
    </ul>
  )
}
export default Summary;