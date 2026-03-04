import { Link } from "react-router-dom";
import PageWrapper from "../components/PageWrapper";
import "../styles/NotFound.css";

const NotFound = () => {
  return (
    <PageWrapper>
      <div className="notfound-page">
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>It looks like you've wandered off. Let's get you back home.</p>

        <Link to="/" className="notfound-btn">
          Back to Home
        </Link>
      </div>
    </PageWrapper>
  );
};

export default NotFound;