import React from "react";
import { myProjects } from "../utils/myProjects";
import '../styles/Projects.css'


function Projects() {
  return (
    <div>
      <h1 className="aboutMe_title">Projects</h1>
      <hr className='line_below_title' />
      <div className="carousel">
        { myProjects.map((proj) => (
          <div className="cardOfProject">
            <img className="projImage" src={proj.image} alt='imagem' />
            <h4 className="prokName">{proj.name}</h4>
            <a className="buttonLink" target='blank' href={proj.repo}>GitHub</a>
            <a className="buttonLink" target='blank' href={proj.link}>Link</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects;