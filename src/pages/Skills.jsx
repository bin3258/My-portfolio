import PageWrapper from '../components/PageWrapper';
import { skillsData } from '../data/skills';
import "../styles/Skills.css";

const Skills = () => {
  return (
    <PageWrapper>
      <div className="container skills-page">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="skills-layout">

          <section className="skills-card">
            <h3>Technical Skills</h3>
            <ul className="skills-list">
              {skillsData.technical.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className="skills-card">
            <h3>Additional Skills</h3>
            <ul className="skills-list">
              {skillsData.additional.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>

          <section className="skills-card soft">
            <h3>Soft Skills</h3>
            <ul className="skills-list">
              {skillsData.soft.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </section>

        </div>
      </div>
    </PageWrapper>
  );
};

export default Skills;