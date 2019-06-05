import React, { Component } from 'react';

class Experience extends Component {
  render() {
    const workExperience = {
      institution : {name : 'Loxon Solutions', url : 'https://www.loxon.eu/' , location : 'Budapest, Hungary'},
      position : 'Junior Software Developer',
      timeInterval : ['Feb. 2017', 'Feb. 2018'] // 'Feb. 2017 - Feb. 2018'

    }
    const {organization, topic, timeInterval, details} = this.props.experience;
    const showDetails =  Array.isArray(details) ? (<ul>{details.map(item => <li> {item} </li>)}</ul>) 
      : (details.data.map(item => <span className="skill">  {item}  </span>)) 
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