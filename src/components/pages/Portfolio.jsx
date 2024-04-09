import { useState } from 'react';
import Project from "../Project";
//inporting css for project styling
import Row from 'react-bootstrap/Row'

//this function set up my projects that are to be displayed with info 
function ProjectPortfolio() {
  const [projects] = useState([
    {
      name: 'My Weather Forecaster',
      description: 'Personal Weather App',
      title: 'My Weather Forecaster',
      gitHub: 'https://github.com/Blair-D/My-Weather-Forecaster',
      live: 'https://blair-d.github.io/My-Weather-Forecaster/'
    },
    {
      name: 'My Personal Note Taker',
      description: 'Note app for organization',
      title: 'My Personal Note Taker',
      gitHub: "https://github.com/Blair-D/My-Personal-Note-Takeri",
      live: ''
    },
    {
      name: 'Employee Tracker',
      description: 'App to manage employees',
      gitHub: "https://github.com/Blair-D/Employee-Tracker",
      title: "Employee Tracker",
      live: ''
    },
    {
      name: 'Professional README Generator',
      description: 'Creates a README in command line',
      gitHub: "https://github.com/Blair-D/README-Professional-Generator",
      title: "README Generator",
      live: ''
    },
    {
      name: 'Unique Password Generator',
      description: 'Creates unique password',
      gitHub: "https://github.com/Blair-D/Unique-Password-Generator",
      title: "Unique Password Generator",
      live: 'https://blair-d.github.io/Unique-Password-Generator/'
    },
    {
      name: 'Ink & Insights',
      description: 'Book Club',
      gitHub: "https://github.com/David0864/Ink-Insights-",
      title: "Ink & Insights",
      live: 'https://ink-and-insights.onrender.com/'
    },

  ]);

return (
  <Row>
    {projects.map((project, idx) => (
      <Project
        project={project}
        key={"project" + idx}
      />
    ))}
  </Row>
);
}

export default ProjectPortfolio;
