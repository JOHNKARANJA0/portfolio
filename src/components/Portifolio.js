import React from 'react';
import './Portifolio.css'; // Import the CSS file
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription
} from './card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from './tooltip';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger
} from './tabs';
import { Github, Linkedin, Mail, Code, Rocket, Award } from 'lucide-react';

const DeveloperPortfolio = () => {

  const personalInfo = {
    name: 'John Karanja',
    title: 'Full Stack Developer',
    email: 'jonniekaras@gmail.com',
    location: 'Nairobi, Kenya',
    summary: 'Passionate full stack developer with expertise in creating robust web applications using modern technologies.',
    skills: ['React','PostgreSQL', 'Flask','Python', 'JavaScript', 'Django']
  };

  const projects = [
    {
      id: 1,
      title: 'IREPORTER App',
      description: 'Corruption is a huge bane to Africa’s development. African countries must develop novel and localised solutions that will curb this menace, hence the birth of iReporter. Which helps citizens report a redflag in the government or an intervention that needs government intervention.',
      technologies: ['React', 'Flask', 'Javascript', 'Python', 'HTML', 'CSS', 'PostgreSQL'],
      githubLink: 'https://github.com/Thairu-dev/IReporter',
      liveLink: 'https://ireporter-ke.netlify.app/',
      image: '/ireporter.png'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative web application developed to streamline task management. While primarily focusing on the backend, I contributed to building a robust Flask API to handle all data operations and ensured seamless communication with the frontend. Key features include user authentication, task creation, assignment and progress tracking.',
      technologies: ['React', 'Flask', 'Javascript', 'Python', 'HTML', 'CSS', 'PostgreSQL'],
      githubLink: 'https://github.com/Thairu-dev/Task-Manager',
      liveLink: 'https://taskmanagerke.netlify.app/',
      image: '/taskmanagement.png'
    }
  ];

  return (
    <div className="portfolio-container">
      <div className="portfolio-content">
        <header className="portfolio-header">
          <div className="profile-picture">
            <img src="/MyImage.jpeg" alt="Profile" className="profile-image" />
          </div>
          <div className="profile-info">
            <h1 className="profile-name">{personalInfo.name}</h1>
            <h2 className="profile-title">{personalInfo.title}</h2>
            <p className="profile-summary">{personalInfo.summary}</p>
            <div className="social-icons">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <a href="https://github.com/JOHNKARANJA0" className="social-link">
                      <Github size={24} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>GitHub</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <a href="https://www.linkedin.com/in/john-mungai-karanja/" className="social-link">
                      <Linkedin size={24} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>LinkedIn</TooltipContent>
                </Tooltip>
                <Tooltip>
                  <TooltipTrigger>
                    <a href={`mailto:${personalInfo.mail}`}  className="social-link">
                      <Mail size={24} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>Email</TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </header>

        <Tabs defaultValue="skills" className="portfolio-tabs">
          <TabsList className="tabs-list">
            <TabsTrigger value="skills" className="tab-trigger">
              <Code className="icon" /> Skills
            </TabsTrigger>
            <TabsTrigger value="projects" className="tab-trigger">
              <Rocket className="icon" /> Projects
            </TabsTrigger>
            <TabsTrigger value="achievements" className="tab-trigger">
              <Award className="icon" /> Achievements
            </TabsTrigger>
          </TabsList>

          <TabsContent value="skills">
            <Card className="card">
              <CardHeader>
                <CardTitle>Technical Skills</CardTitle>
                <CardDescription>Comprehensive skill set across full stack development</CardDescription>
              </CardHeader>
              <CardContent className="skills-list">
                {personalInfo.skills.map((skill, index) => (
                  <span key={index} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects">
            <div className="projects-list">
              {projects.map((project) => (
                <Card key={project.id} className="project-card">
                  <img src={project.image} alt={project.title} className="project-image" />
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="project-tech-list">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </CardContent>
                  <div className="project-links">
                    <a href={project.githubLink} className="project-link">
                      <Github className="link-icon" /> GitHub
                    </a>
                    <a href={project.liveLink} className="project-link">
                      <Rocket className="link-icon" /> Live Site
                    </a>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="achievements">
            <Card className="card">
              <CardHeader>
                <CardTitle>Professional Achievements</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="achievements-list">
                  <li className="achievement"></li>
                  <li className="achievement"></li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <footer className="portfolio-footer">
          © 2024 Mungai John Karanja. All Rights Reserved.
        </footer>
      </div>
    </div>
  );
};

export default DeveloperPortfolio;
