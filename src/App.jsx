import React, { Component } from 'react';
import Experience from './Components/Experience.jsx';
import Skill from './Components/Skill.jsx'
import Project from './Components/Project.jsx'
import data from './dummydata.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMobile, faHome, faMailBulk } from '@fortawesome/free-solid-svg-icons'

class App extends Component {
  render() {
    return (
      <div >
        <h1 className="center">Gergely Juhasz</h1>
        <div className="contact-info">
          <FontAwesomeIcon icon={faMobile}/><span>  587-228-8564</span>
          <FontAwesomeIcon icon={faHome}/><span>  Calgary </span>
          <FontAwesomeIcon icon={faMailBulk}/><span>  gergelygjuhasz@gmail.com</span>
        </div>

        <div>
          <h2 className="center">Summary</h2>
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
          <h2 className="center"> Relevant Experience</h2>
          {data.workExperience.map((item, index) => <Experience key={'exp' +index} experience={item} />)}  
        </div>

        <div>
          <h2 className="center"> Projects</h2>
          {data.projects.map((item, index) => <Project key={'exp' +index} project={item} />)}  
        </div>

        <div>
          <h2 className="center"> Education</h2>
          {data.education.map((item, index) => <Experience key={'ed' +index} experience={item} />)}        
        </div>
      </div>
    );
  }
}
export default App;
