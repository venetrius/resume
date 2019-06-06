import React, { Component } from 'react';
import Experience from './Experience.jsx';
import Skill from './Skill.jsx';
import Project from './Project.jsx';
import PersonalInfo from './PersonalInfo.jsx';
import Summary from './Summary.jsx';


const avialableTypes = {
  skill : Skill,
  experience : Experience,
  project : Project,
  summary : Summary
}

class Resume extends Component {
  render() {
    const data = this.props.data;
    let data2 = [];
    for (let entry in data){
      if(entry[0] === '_'){
        continue;
      }
      let Comp = avialableTypes[data._entryTypes[entry]]; 
      if(Comp){
        data2.push(<h2 >{entry}</h2>);
        data2 = data2.concat(data[entry].map((item, index) => <Comp key={entry +index} data={item} />))
      }
    }
    return (
      <div >
        <h1 >{data._personalInfo.name}</h1>
        <div className="contact-info">
          <PersonalInfo data={data._personalInfo} />
        </div>
          {data2}
      </div>
    );
  }
}
export default Resume;
