import React, { Fragment } from 'react'
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faLaptop} from '@fortawesome/free-solid-svg-icons'
import Icon from './Icon.jsx';

function createAuthors (authors){
  const viewAuthors = (authors && authors.length > 1) ? 
    authors.map(author => 
      <span><a key={author.name} href={author.gitProfile}>{author.name}</a></span>) 
    : '';
 const label = viewAuthors ? <label>Authors </label> : '';
 // {label} {authors}
  return (
    <div>
      {label} {viewAuthors}
    </div>
  )
}

 function Project (props)  {
  const {topic, timeInterval, authors, stack, description, gitrepo, url} = props.project;
  const viewAuthors = createAuthors(authors);
  const gitRef =  <Icon url={gitrepo} icon={faGithub}/>;
  const appRef = url ? <Icon url={url} icon={faLaptop}/> : '';
  return (
    <div className="experience">
      <h5 className="title"> {topic} <span className="dateInterval"> {timeInterval}</span>{gitRef} {appRef}</h5>  
      {viewAuthors}
      Description : {description}  <br/>
      Stack : {stack.join(', ')}
    </div>
  )
}
export default Project