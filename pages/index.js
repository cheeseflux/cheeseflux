import React, { useEffect } from "react";
import axios from "axios";
import config from "../config.json";
import Head from "next/head";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fab, fas);

const UserPage = () => {
  if (config.currentScene === "game") {
    return <div style={{ background: "transparent" }}></div>;
  }

  return (
    <div className="container fade-in">
      <Head>
        <title>{config.user.username} | Portfolio</title>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&family=Quicksand:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <nav className="nav">
        <img className="logo" src={config.user.logo} alt="Logo" />
      </nav>

      <header className="herocont">
        <div className="hero-text">
          <h1 className="title">{config.web.title}</h1>
          <p className="subtitle">{config.web.subtitle}</p>
          <p className="projdesc" style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '2.5rem' }}>{config.web.desc}</p>
          
          <div className="social-links">
            {config.social.github && (
              <a href={config.social.github} target="_blank" rel="noopener noreferrer" className="mainbutton">
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            )}
            {config.social.twitter && (
              <a href={config.social.twitter} target="_blank" rel="noopener noreferrer" className="mainbutton">
                <FontAwesomeIcon icon={["fab", "twitter"]} />
              </a>
            )}
            {config.social.dribbble && (
              <a href={config.social.dribbble} target="_blank" rel="noopener noreferrer" className="mainbutton">
                <FontAwesomeIcon icon={["fab", "dribbble"]} />
              </a>
            )}
            {config.social.figma && (
              <a href={config.social.figma} target="_blank" rel="noopener noreferrer" className="mainbutton">
                <FontAwesomeIcon icon={["fab", "figma"]} />
              </a>
            )}
          </div>
        </div>

        <div className="hero-image">
          <img className="avatar" src={config.user.avatar} alt={config.user.username} style={{ width: '320px', height: '320px', objectFit: 'cover' }} />
        </div>
      </header>

      <section className="projects-section">
        <div className="projects-header">
          <h2 className="projh1">Projects</h2>
          <div className="left-line"></div>
        </div>

        <div className="flex-grid">
          {config.projects.map((project, index) => (
            <div key={index} className="glass card">
              <div>
                <h3 className="projtitle" style={{ color: project.color || 'var(--primary)' }}>{project.name}</h3>
                <p className="projdesc">{project.desc}</p>
              </div>
              <a 
                target="_blank" 
                rel="noopener noreferrer" 
                className="projbtn" 
                href={project.url}
                style={{ background: project.color || 'var(--primary)', color: '#fff' }}
              >
                {project.buttonTitle || 'View Project'}
              </a>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-section">
        <div className="projects-header">
          <div className="left-line" style={{ transform: 'rotate(180deg)' }}></div>
          <h2 className="projh1">Skills</h2>
        </div>
        <div className="skills-grid">
          <FontAwesomeIcon className="skill-icon" icon={["fab", "react"]} />
          <FontAwesomeIcon className="skill-icon" icon={["fab", "js"]} />
          <FontAwesomeIcon className="skill-icon" icon={["fab", "html5"]} />
          <FontAwesomeIcon className="skill-icon" icon={["fab", "figma"]} />
          <FontAwesomeIcon className="skill-icon" icon={["fab", "node-js"]} />
          <FontAwesomeIcon className="skill-icon" icon={["fab", "github"]} />
        </div>
      </section>

      <footer style={{ padding: '4rem 0', textAlign: 'center', color: 'var(--text-dim)', fontSize: '0.9rem' }}>
        <p>&copy; {new Date().getFullYear()} {config.user.username}. Built with Next.js</p>
      </footer>
    </div>
  );
};

export default UserPage;
