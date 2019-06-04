import React, { Component } from 'react';
import Experience from './Components/Experience.jsx';

class App extends Component {
  render() {
    const workExperience = {
      institution : {name : 'Loxon Solutions', url : 'https://www.loxon.eu/' , location : 'Budapest, Hungary'},
      position : 'Junior Software Developer',
      timeInterval : 'Feb. 2017 - Feb. 2018', //  ['Feb. 2017', 'Feb. 2018'],
      details : [              
        'Used Java, SQL, PL/SQL, Hibernate, ICEFaces, HTML and CSS to implement, test and debug financial software',
        'Worked independently and as part of a team.',
        'Made minor modifications in Maven POMs, configurated Jenkins build, set up Cron Scheduler',
        'Participated in project meetings and code reviews',
        'Gained much experience, while having a great time'
      ]
    }
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
          <Experience experience={workExperience} />

          <div className="experience">
            <h3 className="title"> React.js hackathon  group <span className="dateInterval"> Jan. 2019 - Present</span></h3>
            <h4>Software Developers Learning Together - Meetup, Calgary, Canada</h4>
            <ul>
              <li>Participate monthly hackathons </li>
              <li>Results: created and deployed a simple responsive React web app utilizing Bootstrap (independent work)
                <ul>
                  <li>Deployed: <a href="https://venewebsite.herokuapp.com/">https://venewebsite.herokuapp.com/</a></li>
                  <li>Source code: <a href="https://github.com/venetrius/website">https://github.com/venetrius/website</a></li>
                </ul>
              </li>
            </ul>
          </div>
          <div class="experience">
            <h3 class="title"> Academic coding project<span class="dateInterval"> Aug. 2018 - Sept. 2018</span></h3>
            <h4>Created a set of Java scripts to automate the boring stuff</h4>
            <ul>
              <li>The software dynamically reads modifies and creates text and .xml files</li>
              <li>Saved 30+ hours of copy pasting and created ~100 descriptive figures for my Master Thesis</li>
              <li>Source code: <a href="https://github.com/venetrius/graph_generator ">https://github.com/venetrius/graph_generator </a></li>
            </ul>
          </div>
          <div class="experience">
            <h3 class="title"> Coding Websites<span class="dateInterval"> 2015 - Present</span></h3>

            <ul>
              <li>Coded on projecteuler.com, codingbat.com, interviewbit.com </li>
              <li>Solved hundreds of problems on HackerRank:
                <a href="https://www.hackerrank.com/venetrius">https://www.hackerrank.com/venetrius</a>
              </li>
            </ul>
          </div>
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
		      <div class="experience">
            <h3 class="title"> Certificate - Fullstack Web Developer <span class="dateInterval"> May 2019 - July 2019</span></h3>
            <h4> Lighthouse Labs, Calgary, Canada</h4>

            <ul>
              <li>An intensive 40+ hours / week course of 10 weeks</li>
              <li>Main topics
                      <ul>
                  <li>JavaScript, Node.js, Express.js, React.js</li>
                  <li>SQL, MongoDB, PostgeSQL </li>
                  <li>HTML, CSS, Sass, Responsive design</li>
                </ul>
              </li>
            </ul>
          </div>

          <div class="experience">
            <h3 class="title"> Certificate - Junior Java Developer <span class="dateInterval"> Oct. 2016 - Feb. 2017</span></h3>
            <h4>Braining Hub, Budapest, Hungary</h4>

            <ul>
              <li>An intensive course of 350 hours</li>
              <li>Main topics
                      <ol>
                  <li>Principles of software development</li>
                  <li>Core Java</li>
                  <li>GIT</li>
                </ol>
              </li>
              <li>One of the first two students to land a job</li>
            </ul>
          </div>
          <div class="experience">
            <h3 class="title"> Master of Science in Chemistry   <span class="dateInterval"> Sept. 2016 - Jan. 2019</span></h3>
            <h4>Eotvos Lorand University, Budapest, Hungary</h4>

            <ul>
              <li>Thesis title: analysis of ammonia combustion reaction mechanisms</li>
              <li>Used Scientific modelling programs for Thesis work</li>
              <li>Several IT related course</li>

            </ul>
          </div>
          <div className="experience">
            <h3 className="title"> Relevant online courses   <span className="dateInterval"> Sept. 2018 - Present</span></h3>
            <h4>Coursera - Standford -  Andrew Ng:</h4>
            <ul>
              <li><a href="https://www.coursera.org/account/accomplishments/certificate/YNC9PTGY77BB">Neural Networks and Deep Learning</a></li>
              <li><a href="https://www.coursera.org/account/accomplishments/certificate/CENMDKNAG39T">Convolutional Neural Networks</a></li>
              <li><a href="https://www.coursera.org/account/accomplishments/certificate/J3LX3UAA9DGJ">Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization</a></li>
              <li><a href="https://www.coursera.org/account/accomplishments/certificate/8KALZMQ6SS49">Structuring Machine Learning Projects</a></li>
              <li><a href="https://www.coursera.org/account/accomplishments/certificate/GMNXFR7Z2BF5">Machine Learning</a></li>
            </ul>
          </div>
        
    </p>
</div>
                  );
                }
}
export default App;
