import React from "react";
import profileImage from "../assets/images/1734964615240-removebg-preview (1).png";

const AboutMe = () => {
  return (
    <section className="about-section bg-[#0B1221] text-white py-16 flex items-center justify-center">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-8 justify-center">
        <div className="content max-w-2xl">
          <h2 className="text-[#4ECCA3] text-2xl font-bold mb-6">WHO I AM?</h2>
          <p className="text-lg leading-relaxed">
          Hello! my name is MD.Bellal Hosen with a passion for creating dynamic, user-friendly, and visually appealing websites and applications. With a strong background in specific areas like frontend development, backend development, or full-stack development, I specialize in technologies such as HTML, CSS, JavaScript, and frameworks like React or any other relevant frameworks and tools.
          </p>
        </div>
        <div className="image-container">
          <img
            src={profileImage}
            alt="Profile"
            className="w-72 h-72 rounded-lg object-cover shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
