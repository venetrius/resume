import React, { Component } from 'react';

class Experience extends Component {
  render() {
    const workExperience = {
      institution : {name : 'Loxon Solutions', url : 'https://www.loxon.eu/' , location : 'Budapest, Hungary'},
      position : 'Junior Software Developer',
      timeInterval : ['Feb. 2017', 'Feb. 2018'] // 'Feb. 2017 - Feb. 2018'

    }
    const {institution, position, timeInterval, details} = this.props.experience;
    console.log(this.props, institution, position,timeInterval);

    return (
      <div className="experience">
      <h3 className="title"> {position} <span className="dateInterval"> {timeInterval}</span></h3>
      <h4><a href={institution.url}> {institution.name}</a>, Budapest, Hungary</h4>

      <ul>
        {details.map(item => <li> {item} </li>)}
      </ul>
    </div>
    )
  }
}

export default Experience;