import { SocialIcon } from "react-social-icons";
// import Github from "./github-logo.png";
// import { useGlobalContext } from "./context";
import { FaGithubAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Home = () => {
  // const { closeSidebar } = useGlobalContext();

  return (
    <section
      className="home section"
      id="home"
      // onClick={closeSidebar}
    >
      <div className="container">
        <div className="home-content">
          <div className="home-desc">
            <h1>
              Hello,
              <br />I am Yousef Eslam
            </h1>

            <span>Front End Developer</span>
            <p>
              in love with my craft so mostly you will find me coding, visit
              LinkedIn to view my updated experience
            </p>
            <ul className="home-social">
              <li>
                <a href="https://github.com/Yousefeslam214">
                  <FaGithubAlt
                    className="git"
                    url="https://github.com/Yousefeslam214"
                  />

                  {/* <SocialIcon
                    bgColor="white"
                    // fgColor="white"
                    url="https://github.com/Yousefeslam214"
                  /> */}
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/yousefeslam/"
                  target="_blank">
                  <FaLinkedin
                    className="linkedin"
                    url="https://www.linkedin.com/in/yousefeslam/"
                  />
                </a>
              </li>
              <li>
                <a href="" className="cv" target="_blank">
                  CV
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
