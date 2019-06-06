import React, { Component } from 'react';
import Skill from './Skill.jsx';

class Experience extends Component {
  render() {
    const {organization, topic, timeInterval, details} = this.props.experience;
    const showDetails =  Array.isArray(details) ? (<ul>{details.map(item => <li> {item} </li>)}</ul>) 
      : (details.data.map(item => <Skill className="skill" data={item}/>)) 
    return (
      <div className="experience">
        <h5 className="title"> {topic} <span className="dateInterval"> {timeInterval}</span></h5>
        <h6><a href={organization.url}> {organization.name}</a>, {organization.location}</h6>
        {showDetails}     
      </div>
    )
  }
}

export default Experience;