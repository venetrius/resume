import React, { Fragment } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faHome, faMailBulk } from '@fortawesome/free-solid-svg-icons'
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';

function last(arr){
  return arr[arr.length - 1];
}

 function Project (props)  {
  const {phone, adress, email, gitrepo, linkdin} = props.data;
  return (
    <div>
          <FontAwesomeIcon icon={faMobile}/><span>  {phone}</span>
          <FontAwesomeIcon icon={faHome}/><span>  {adress} </span>
          <FontAwesomeIcon icon={faMailBulk}/><span>  {email}</span>
          <a href={gitrepo}><FontAwesomeIcon icon={faGithub}/><span>  {last(gitrepo.split('/'))}</span></a>
          <a href={linkdin}><FontAwesomeIcon icon={faLinkedin}/><span>  {last(linkdin.split('/'))}</span></a>
    </div>
  )
}
export default Project