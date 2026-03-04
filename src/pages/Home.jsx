import "../styles/Home.css";
import { Link } from "react-router-dom";
import avatar from "../assets/avatar.png";

const Home = () => {
    return (
        <section className="hero">
            <div className="hero-container">

                {/* LEFT CONTENT */}
                <div className="hero-left">
                    <h1>
                        Hi, I'm <span>Le Xuan Tai</span>
                    </h1>
                    <p className="subtitle">
                        Frontend Developer Intern
                    </p>
                    <p className="description">
                        Passionate about building modern, high-performance interfaces and seamless user experiences.
                    </p>

                    <div className="cta-group">
                        <Link to="/projects" className="button">
                            View Projects
                        </Link>
                        <Link to="/resume" className="button outline">
                            View Resume
                        </Link>
                    </div>
                </div>

                {/* RIGHT CONTENT */}
                <div className="hero-right">
                    <div className="avatar-wrapper">
                        <img src={avatar} alt="Le Xuan Tai" className="avatar" />
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Home;