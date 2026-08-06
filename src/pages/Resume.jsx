import PageWrapper from '../components/PageWrapper';
import "../styles/Resume.css";

const Resume = () => {
  const education = [
    {
      school: "Ho Chi Minh City Industry and Trade College",
      major: "Information Technology",
      duration: "2023 - 2026",
    }
  ];

  return (
    <PageWrapper>
      <div className="container resume-page">
        <section className="resume-section">
          <h2>Personal Information</h2>
          <ul className="info-list">
            <li><strong>Date of Birth:</strong> July 17, 2005</li>
            <li><strong>Address:</strong> Thu Duc District, Ho Chi Minh City</li>
            <li><strong>Email:</strong> letai3258@gmail.com</li>
            <li><strong>Phone:</strong> 088 662 4288</li>
            <li><strong>GitHub:</strong> <a href="https://github.com/bin3258/My-portfolio" target="_blank" rel="noreferrer">github.com/bin3258/My-portfolio</a></li>
          </ul>
        </section>

        <section className="resume-section">
          <h2>Professional Summary</h2>
          <p>
            Aspiring Frontend Developer dedicated to building high-quality web applications. 
            Committed to contributing value to real-world projects while continuously 
            expanding technical expertise in modern web technologies.
          </p>
        </section>

        <section className="resume-section">
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="resume-item">
              <h3>{edu.school}</h3>
              <p>{edu.major}</p>
              <span>{edu.duration}</span>
            </div>
          ))}
        </section>
      </div>
    </PageWrapper>
  );
};

export default Resume;