import Row from 'react-bootstrap/Row';
import ProjectCard from './ProjectCard'

const projects = [
  {
    title: "Connect-Ed",
    img: "./connect-ed.png",
    text: 'This was a group project I worked on with three amazing teammates Devon, Bryce, and Noah. Our idea behind the project was to create a website for teachers to share project ideas and be able to find projects that fit their grade level, cirriculum, and subjects. This site was build in React.js and utilizes a homemade API that was also specialty build for this project.',
    link: 'https://github.com/24rgraham/connect-ed'
  },
  {
    title: 'E-Vents!',
    img: "./e-vents.png",
    text: 'This was a group project I worked on with Captain Nathan and 1st mates Bryce and Noah. Our site allows users to create events which they can share with their friends and view RSVPs. This site was primarily built with Javascript and sequelize and uses Cloudinary to store user images and Calendar.io to display calendar data.',
    link: 'https://github.com/24rgraham/event-planner-project'
  },
  {
    title: 'Weather Dashboard',
    img: "./weather-api.png",
    text: 'This site uses data from OpenWeather API to allow users to search for a new city and see a 5 day weather forecast.',
    link: 'https://github.com/24rgraham/weather-dashboard-project'
  },
  {
    title: 'Tech Talk Social',
    img: "./tech-blog.png",
    text: 'This social site stores and displays users, their blog posts, and their comments on blog bosts.',
    link: 'https://github.com/24rgraham/tech-blog'
  },
]
console.log(projects);


function Portfolio() {
  return (
    <div className='spacer'>
      <Row xs={1} md={2} className="g-4">
        {projects.map((project) => (<ProjectCard key={project.title} project={project} />))}
      </Row>
    </div>
  );
}

export default Portfolio;