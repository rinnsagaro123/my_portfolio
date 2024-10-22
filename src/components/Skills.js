import React from 'react';
import meter1 from "../assets/img/html.png";
import meter2 from "../assets/img/css.png";
import meter3 from "../assets/img/js.png";
import meter4 from "../assets/img/git.png";
import meter5 from "../assets/img/react-js.png";
import meter6 from "../assets/img/django.svg";
import meter7 from "../assets/img/php.png";
import meter8 from "../assets/img/java.png";
import meter9 from "../assets/img/python.png";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const skills = [
    { img: meter1, label: "HTML" },
    { img: meter2, label: "CSS" },
    { img: meter3, label: "JAVASCRIPT" },
    { img: meter4, label: "GIT" },
    { img: meter5, label: "REACT JS" },
    { img: meter6, label: "DJANGO" },
    { img: meter7, label: "PHP" },
    { img: meter8, label: "JAVA" },
    { img: meter9, label: "PYTHON" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <img src={skill.img} alt={skill.label} />
                    <h5>{skill.label}</h5>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
