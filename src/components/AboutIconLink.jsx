import { FaQuestion } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutIconLink = () => {
  return (
    <div className="about-link">
      <Link
        to={{ pathname: "/about", search: "?sort=name", hash: "#hello" }}
        target="_blank"
        rel="noreferrer"
      >
        <FaQuestion size={30} />
      </Link>
    </div>
  );
};

export default AboutIconLink;
