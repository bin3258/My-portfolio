import { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { projectsData } from '../data/projects';
import "../styles/Projects.css";

const Projects = () => {
    const [filter, setFilter] = useState('All');

    const categories = ['All', ...new Set(projectsData.flatMap(p => p.tech))];

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(project => project.tech.includes(filter));

    return (
        <PageWrapper>
            <section className="container projects-page">
                <h2 className="section-title">My Projects</h2>

                <div className="filter-container">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="project-grid">
                    {filteredProjects.map(project => (
                        <article key={project.id} className="project-card">

                            <div className="project-header">
                                <h3>{project.title}</h3>
                                {project.subtitle && <p className="project-subtitle">{project.subtitle}</p>}
                                {project.duration && <span className="project-duration">{project.duration}</span>}
                            </div>

                            <div className="project-info">
                                <p>{project.desc}</p>

                                <div className="project-tech">
                                    {project.tech.map(t => (
                                        <span key={t} className="tech-tag">{t}</span>
                                    ))}
                                </div>

                                {(project.github || project.demo) && (
                                    <div className="project-links">
                                        {project.github && (
                                            <a href={project.github} target="_blank" rel="noreferrer" className="link-btn">
                                                GitHub
                                            </a>
                                        )}
                                        {project.demo && (
                                            <a href={project.demo} target="_blank" rel="noreferrer" className="link-btn demo">
                                                Live Demo
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>

                        </article>
                    ))}
                </div>
            </section>
        </PageWrapper>
    );
};

export default Projects;