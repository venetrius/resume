import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faHome, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon.jsx';


 function Project (props)  {
  const {phone, adress, email} = props.data;
  return (
    <div>
           <FontAwesomeIcon icon={faMobile}/><span>  {phone}</span>
          <FontAwesomeIcon icon={faHome}/><span>  {adress} </span>
          <FontAwesomeIcon icon={faMailBulk}/><span>  {email}</span>
    </div>
  )
}
export default Project