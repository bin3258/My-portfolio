import { useState } from 'react';
import PageWrapper from '../components/PageWrapper';
import { projectsData } from '../data/projects';
import "../styles/Projects.css";
import { Link } from "react-router-dom";

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
                            </div>

                            <div className="project-info">
                                <p>{project.desc}</p>

                                <div className="project-tech">
                                    {project.tech.map(t => (
                                        <span key={t} className="tech-tag">{t}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.github} target="_blank" rel="noreferrer" className="link-btn">
                                        GitHub
                                    </a>

                                    {project.demo ? (
                                        <Link to="/not-found" className="link-btn demo">
                                            Live Demo
                                        </Link>
                                    ) : (
                                        <button className="link-btn disabled" title="Not deployed yet">
                                            Coming Soon
                                        </button>
                                    )}
                                </div>
                            </div>

                        </article>
                    ))}
                </div>
            </section>
        </PageWrapper>
    );
};

export default Projects;