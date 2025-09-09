import Image1 from "../assets/images/4208903.jpg";
import Image2 from "../assets/images/Material-Dashboard-2-React-01-15-2025_10_23_PM.png";
import Image3 from "../assets/images/project-image-3.png";
import Image4 from "../assets/images/project-image-4.png";
import Image5 from "../assets/images/project-image-5.png";
import Image6 from "../assets/images/project-image-6.png";

import "./responsive.css";
const ProjectShowcase = () => {
  return (
    <div className="project-container bg-customColor">
      <div className="project-demo-1">
        <div className="project">
          <img src={Image1} alt="" />
          <p>
            This is the Task Meneger Pro it is the full-stack project and you
            can organize your work to do list wase we are use the technology
            like React Frontend and Backend mongodb express or node js.{" "}
          </p>
          <a href="https://taskmenegerpro.onrender.com/" target="_blanck">
            <button>Demo</button>
          </a>
        </div>

        <div className="project">
          <img src={Image2} alt="" />
          <p>
            This is the Admin Dashboard project and this Frontend project we are
            use the technology like React Frontend and Tailwind css. this
            project use easly mentanace your website.{" "}
          </p>
          <a href="https://dashboard54.netlify.app/" target="_blanck">
            <button>Demo</button>
          </a>
        </div>

        <div className="project">
          <img src={Image3} alt="" />
          <p>
            This is full-stack Pizza selling website use the technology like
            Frontend react and tailwind and backend use mongodb express or node
            js this project use easly sell your pizza.{" "}
          </p>
          <a href="https://pizza-selling.onrender.com" target="_blanck">
            <button>Demo</button>
          </a>
        </div>
      </div>

      <div className="project-demo-1 mt-10">
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
