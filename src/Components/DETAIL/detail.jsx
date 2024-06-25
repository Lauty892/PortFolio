import React from "react";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./detail.css";

const DetailProject = ({ project, closeModal }) => {
  if (!project) return null;

  const handleClick = () => {
    closeModal();
  };

  return (
    <div className="project-detail" onClick={handleClick}>
      <h2 className="title">{project.name}</h2>
      <div className="image-grid">
        {project.img.map((image, index) => (
          <img key={index} className="project-image" src={image} alt={project.name} />
        ))}
      </div>
      <p className="description">{project.description}</p>
      <div className="project-links">
        {project.link && (
          <Link to={project.link} target="_blank" rel="noopener noreferrer">
            <RxExternalLink />
            <p className="link-tex">Demo</p>
          </Link>
        )}
        {project.git && (
          <Link to={project.git} target="_blank" rel="noopener noreferrer">
            <AiOutlineGithub />
            <p className="link-tex">Code</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default DetailProject;