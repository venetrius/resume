import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Icon (props)  {
   if(props.url){
     return <a title={props.url} href={props.url}><FontAwesomeIcon icon={props.icon}/></a>
   }
  return (
    <FontAwesomeIcon icon={props.icon}/>
  )
}
export default Icon