

import Image3 from "../assets/images/project-image-3.png";
import Image4 from "../assets/images/project-image-4.png";
import Image5 from "../assets/images/project-image-5.png";
import Image6 from "../assets/images/project-image-6.png";
import Image1 from "../assets/images/bongoDev-09-08-2025_03_38_AM.png"

import "./responsive.css";
const ProjectShowcase = () => {
  return (
    <div className="project-container bg-customColor">
      <div className="project-demo-1">
        <div className="project">
          <img src={Image1} alt="" />
          <p>
            “I am currently working on the bongoDev Coaching website project.
            This is a real-time project aimed at creating a professional website
            for the coaching platform. Many students have already enrolled in
            this course, and I am contributing to the development of a modern,
            user-friendly, and professional website to enhance their learning
            experience.”
          </p>
          <a href="https://www.bongodev.com/" target="_blanck">
            <button className="">Demo</button>
          </a>
        </div>

        <div className="project">
          <img src={Image3} alt="" />
          <p>
            This is a full-stack pizza selling website built using modern
            technologies. The frontend is developed with React and Tailwind CSS,
            while the backend is powered by Node.js, Express, and MongoDB. It is
            one of my ongoing projects.
          </p>
          <a href="https://pizza-selling.onrender.com" target="_blanck">
            <button>Demo</button>
          </a>
        </div>
      </div>

      <div className="project-demo-2 ">
        <div className="project">
          <img src={Image4} alt="" />
          <p>
            This is Dental Web service website and this website create use the
            technoloy like Frotnend Html css javascript boostrap jequery or
            tailwind css.
          </p>
          <a href="https://medilap.netlify.app/" target="_blanck">
            <button>Demo</button>
          </a>
        </div>

        <div className="project">
          <img src={Image5} alt="" />
          <p>
            This is the fresh food website and selling fresh food create by
            example and best practise use the technology like frontend Html css
            javascript.
          </p>
          <a href="https://fresh-food-com.netlify.app/" target="_blanck">
            <button>Demo</button>
          </a>
        </div>

        <div className="project">
          <img src={Image6} alt="" />
          <p>
            This is Royel hotel menage ment website this webiste use easly
            menage your hotel or real state organizion use the technology like
            Html css javascript or other framework.{" "}
          </p>
          <a href="https://royelmaster.netlify.app/" target="_blanck">
            <button>Demo</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
