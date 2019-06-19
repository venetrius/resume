import React from 'react';
const me = { 	name : 'Gergely Juhasz', 	gitProfile : 'https://github.com/venetrius'};



const data = {
	_WsideSkill : false,
	_entryTypes : {Skills : 'skill', Summary : 'summary', 'Work Experience' : 'experience', Education : 'experience', Projects : 'project'},
	_personalInfo : {
		name : 'Gergely Juhasz',
		phone : '587-228-8564',
		adress : 'Calgary',
		email : 'gergelygjuhasz@gmail.com',
		gitrepo : 'https://github.com/venetrius',
		linkdin : 'https://www.linkedin.com/in/gergelyg-juhasz'
	},
	Summary : [{ Summary : [
		"I am a fullstack developer with core proficiencies in JavaScript, Java8, SQL and more with a growth mindset. I enjoy delving into highly technical problems and I am looking for new experience to further my career in web development."]
	}],
	Skills : ['Java', 'JavaScript', ' DataBase (MongoDB, PostgreSQL, OracleSQL, PL/SQL)', 'Node.js (Express.js, Knex.js)', 'React.js', 'Python ',
		'HTTP', 'REST', 'Version Control (GIT, Tortoise SVN)','Ruby', 'Rails', 'ActiveRecord', ' Hibernate', 'CSS', 'OOP','JIRA ', 'OS (Windows, Linux)',
		'IDE (VSCode, Sublime, IntelliJ, Eclipse)'],
	'Work Experience' : [
		{
			organization : {name : 'Loxon Solutions', url : 'https://www.loxon.eu/' , location : 'Budapest, Hungary'},
			topic : 'Junior Software Developer',
			timeInterval : 'Feb. 2017 - Feb. 2018', //  ['Feb. 2017', 'Feb. 2018'],
			details : [
				'Used Java, SQL, PL/SQL, Hibernate, ICEFaces, HTML and CSS to implement, test and debug financial software',
				'Made minor modifications in Maven POMs, configurated Jenkins build, set up Cron Scheduler',
				'Participated in project meetings and code reviews'
			]
		}
	],
	Projects : [
			{
			timeInterval : 'June. 2019',
			topic : 'Jungle - Project at LHL',
			stack : ['Ruby', 'Rails', 'REST', 'PostgreSQL', 'Stripe', 'AWS'],
			description : 'A mini e-commerce application built with Rails 4.2 ',
			gitrepo : 'https://github.com/venetrius/jungle-rails',
			url : 'http://jungle-env.qmrwpeuu3p.ca-central-1.elasticbeanstalk.com/'
		},
		{
			timeInterval : 'May. 2019',
			topic : 'MappApp - Group Midterm Project at LHL',
			stack : ['Node.js', 'Express.js', 'PostgreSQL', 'Knex.js', 'Jquery', 'AJAX', 'Heroku'],
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
		},
		{
			timeInterval : 'March. 2019 - May. 2019',
			topic : <a href="https://www.innovation4health.com/neuronexus"> Neuro Nexus — Innovation 4 Health </a>,
		  stack : ['Arduino', 'Python'],
			description :
			<div className="plain">
				Our team <i> EEGaming </i>'s goal is to create a tool which can
					help children with severe motor impairment to use a controller through a BCI.
					For which we received the
					<a href="https://www.innovation4health.com/neuronexus#block-yui_3_17_2_1_1558053349837_699345"> Peoples' Choice Award </a>.
			</div>,
			gitrepo : 'https://gist.github.com/venetrius/66be391c4c57f85b70bb7f7f47812df3'
		}
	],
	Education : [
		{
			organization : {name : 'Lighthouse Labs', url : 'https://lighthouselabs.ca/web-bootcamp' , location : 'Calgary, Canada'},
			timeInterval : 'May. 2019 - July. 2019',
			topic : 'Certificate - Full Stack Web Development',
			details : [
				'A 12 weeks long intensive course, 40+ hours / week, project focused',
				'Main focus on: JavaScript, Node.js, SQL, React'
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
					<a href="https://www.coursera.org/account/accomplishments/certificate/J3LX3UAA9DGJ">Improving Deep Neural Networks</a>,
					<a href="https://www.coursera.org/account/accomplishments/certificate/8KALZMQ6SS49">Structuring Machine Learning Projects</a>,
					<a href="https://www.coursera.org/account/accomplishments/certificate/GMNXFR7Z2BF5">Machine Learning</a>
				]
			}
		}
	]


}

export default  data;