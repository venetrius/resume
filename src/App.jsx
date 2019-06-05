import React, { Component } from 'react';
import Experience from './Components/Experience.jsx';
import data from './dummydata.js'

class App extends Component {
  render() {
    return (
      <div >
        <h1 className="center">Gergely Juhasz</h1>
        <div className="contact-info">
          <span className="fa fa-mobile fa-lg"><span></span>  587-228-8564</span>
          <span className="fa fa-home fa-lg"><span>  Calgary </span></span>
          <span className="fa fa-envelope fa-lg"><span></span>  gergelygjuhasz@gmail.com</span>
        </div>

        <p>
          <h2 className="center">Key Strengths</h2>
          <ul>
            <li>Core proficiencies include JavaScript, Java 8 and SQL</li>
            <li>A growth mindset enjoys delving into highly technical problems</li>
            <li>Strong analytical and problem-solving skills </li>
            <li>Quick learner as demonstrated by quick improvements at the previous workplace</li>

          </ul>
        </p>
        <p>
          <h2 className="center"> Relevant Experience</h2>
          {data.workExperience.map(item => <Experience  experience={item} />)}  
        </p>
        <p>
          <h2 class="center"> Other Experience</h2>
          <div class="experience">
            <h3 class="title"> Volunteer<span class="dateInterval"> Sept. 2012 - Dec. 2012</span></h3>
            <h4>Solidair met India, Ghosi, Uttar Prades, India</h4>

            <ul>
              <li>Taught Science, Math and Computer Science at St. Norbert School
            for classes with 30-40 students of ages 8 - 16</li>
            </ul>
          </div>
        </p>

        <p>
          <h2 class="center"> Education</h2>
          {data.education.map(item => <Experience  experience={item} />)}        
    </p>
</div>
                  );
                }
}
export default App;
