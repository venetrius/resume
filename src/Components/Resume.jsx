import React, { Component } from 'react';
import Experience from './Experience.jsx';
import Skill from './Skill.jsx';
import ListSkill from './ListSkill.jsx';
import Project from './Project.jsx';
import PersonalInfo from './PersonalInfo.jsx';
import Summary from './Summary.jsx';


const avialableTypes = {
  skill : Skill,
  experience : Experience,
  project : Project,
  summary : Summary
}

const generateComponents = function  (data) {
  let res = [];
  for (let entry in data){
    if(entry[0] === '_'){
      continue;
    }
    let Comp = avialableTypes[data._entryTypes[entry]]; 
    if(Comp){
      res.push(<h2 >{entry}</h2>);
      res = res.concat(data[entry].map((item, index) => <Comp key={entry +index} data={item} />))
    }
  }
  return res;
}

class Resume extends Component {
  render() {
    const data = this.props.data;
    let data2 = generateComponents(data);

    if(data._WsideSkill){
      const skills =  (data.Skills.map((item, index) => <ListSkill key={'skill' +index} data={item} />));
      delete data.Skills;
      data2 = generateComponents(data);
      return (
      <div className="wrapper aligned">
        <div className="box header">
          <h1 >{data._personalInfo.name}</h1>
          <div className="contact-info">
            <PersonalInfo data={data._personalInfo} />
          </div>
        </div>
        <div className="box sidebar">
          <br/> <h2 >Skills</h2> {skills}
          
        </div>
        <div className="box main">{data2}</div>
      </div>
      )
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
