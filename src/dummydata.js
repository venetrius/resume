import React from 'react';
const me = { 	name : 'Gergely Juhasz', 	gitProfile : 'https://github.com/venetrius'};

const data = {
	skills : ['Java', 'JavaScript', ' SQL (MongoDB, PostgreSQL, OracleSQL, PL/SQ)', 'Node.js (Express.js, Knex.js)', 'React.js', 'Python ', 
		'HTTP', 'REST', 'CSS', 'Version Control (GIT, Tortoise SVN)' , 'OOP','JIRA ', 'OS: Windows, Linux',
		'IDE (VS Code, Sublime, IntelliJ, Eclipse)'],
	workExperience : [
		{
			organization : {name : 'Loxon Solutions', url : 'https://www.loxon.eu/' , location : 'Budapest, Hungary'},
			topic : 'Junior Software Developer',
			timeInterval : 'Feb. 2017 - Feb. 2018', //  ['Feb. 2017', 'Feb. 2018'],
			details : [              
				'Used Java, SQL, PL/SQL, Hibernate, ICEFaces, HTML and CSS to implement, test and debug financial software',
				'Worked independently and as part of a team.',
				'Made minor modifications in Maven POMs, configurated Jenkins build, set up Cron Scheduler',
				'Participated in project meetings and code reviews',
				'Gained much experience, while having a great time'
			]
		}
	],
	education : [
		{
			organization : {name : 'Lighthouse Labs', url : 'https://lighthouselabs.ca/web-bootcamp' , location : 'Calgary, Canada'},
			timeInterval : 'May 2019 - July 2019',
			topic : 'Certificate - Full Stack Web Development',
			details : [
				'Intensive project focus 12 week long, 40+ hours / week course',
				'Main focus on: JavaScript, Node.js, SQL, React ',
				'Some of the projects /TODO'
			]
		},
				{
			organization : {name : 'Braining Hub', url : 'https://braininghub.hu/junior-java-programozo-kepzes/' , location : 'Budapest, Hungary'},
			timeInterval : 'Oct. 2016 - Feb. 2017',
			topic : 'Certificate - Junior Java Developer',
			details : [
				'An onsite interactive course of 224 hours in 3,5 months',
				'Main focus on: programming basics, Java, SQL, GIT ',
				'One of the first two students to land a job'
			]
		},
		{
			organization : {name : 'Eotvos Lorand University', url : 'https://www.elte.hu/en/chemistry-msc' , location : 'Budapest, Hungary'},
			timeInterval : 'Sept. 2016 - Jan. 2019',
			topic : 'Master of Science in Chemistry ',
			details : [			
				'Thesis title: analysis of ammonia combustion reaction mechanisms',
				'Used Scientific modelling programs for Thesis work',
				'Relevant courses: Programming in LabVIEW, Java and C++, Scripting, Numerical Methods in Chemistry, Applied Computer Simulations, The Basics of Computer Measurement - Electronics, Information Technology and Measurement Theory'
			]
		},
		{
			organization : {name : 'Coursera', url : 'https://www.coursera.org' , location : 'Online'},
			topic : 'Online courses in machine learning',
			details : {
				type : 'bullets',
				data : [	
					<a href="https://www.coursera.org/account/accomplishments/certificate/YNC9PTGY77BB">Neural Networks and Deep Learning</a>,
					<a href="https://www.coursera.org/account/accomplishments/certificate/CENMDKNAG39T">Convolutional Neural Networks</a>,
					<a href="https://www.coursera.org/account/accomplishments/certificate/J3LX3UAA9DGJ">Improving Deep Neural Networks: Hyperparameter tuning, Regularization and Optimization</a>,
					<a href="https://www.coursera.org/account/accomplishments/certificate/8KALZMQ6SS49">Structuring Machine Learning Projects</a>,
					<a href="https://www.coursera.org/account/accomplishments/certificate/GMNXFR7Z2BF5">Machine Learning</a>		
				]
			}
		}
	],
	projects : [
		{
			timeInterval : 'May. 2019',
			topic : 'MappApp - Group Midterm Project at LHL',
			stack : ['Node.js', 'Express.js', 'PostgreSQL', 'Knex.js', 'Jquery', 'AJAX'],
			authors : [
				{
					name : 'Britta Jorgenson',
					gitProfile : 'https://github.com/BJorgen'
				},
				{
					name : 'Gaganpreet pandher',
					gitProfile : 'https://github.com/Gaganpandher52'
				},
				me
			],
			description : 'Create, view and modify maps, upload imagies, like content, and view your profile ',
			gitrepo : 'https://github.com/BJorgen/map_app',
			url : 'https://maaapapp.herokuapp.com'
		},
		{
			timeInterval : 'May. 2019',
			topic : 'Tweeter - Project at LHL',
			stack : ['Node.js', 'Express.js', 'MongoDB', 'Jquery', 'AJAX'],
			description : 'Tweeter is a simple, single-page Twitter clone.',
			gitrepo : 'https://github.com/venetrius/tweeter'
		}
	]

}

export default  data;