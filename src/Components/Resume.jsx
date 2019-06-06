import React, { Component } from 'react';
import Experience from './Experience.jsx';
import Skill from './Skill.jsx'
import Project from './Project.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faHome, faMailBulk } from '@fortawesome/free-solid-svg-icons'

class Resume extends Component {
  render() {
    const data = this.props.data;
    return (
      <div >
        <h1 >Gergely Juhasz</h1>
        <div className="contact-info">
          <FontAwesomeIcon icon={faMobile}/><span>  587-228-8564</span>
          <FontAwesomeIcon icon={faHome}/><span>  Calgary </span>
          <FontAwesomeIcon icon={faMailBulk}/><span>  gergelygjuhasz@gmail.com</span>
        </div>

        <div>
          <h2 >Summary</h2>
          <ul>
            <li>Core proficiencies include JavaScript, Java 8 and SQL</li>
            <li>A growth mindset enjoys delving into highly technical problems</li>
            <li>Strong analytical and problem-solving skills </li>
            <li>Quick learner as demonstrated by quick improvements at the previous workplace</li>

          </ul>
        </div>

        <h2> Skills</h2>
        {data.skills.map((skill, index) => <Skill key={'skill' +index} data={skill} />)}

        <div>
          <h2 > Relevant Experience</h2>
          {data.workExperience.map((item, index) => <Experience key={'exp' +index} experience={item} />)}  
        </div>

        <div>
          <h2 > Projects</h2>
          {data.projects.map((item, index) => <Project key={'exp' +index} project={item} />)}  
        </div>

        <div>
          <h2 > Education</h2>
          {data.education.map((item, index) => <Experience key={'ed' +index} experience={item} />)}        
        </div>
      </div>
    );
  }
}
export default Resume;
