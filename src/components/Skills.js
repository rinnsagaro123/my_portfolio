import React, { useState } from 'react';
import meter1 from "../assets/img/html.png";
import meter2 from "../assets/img/css.png";
import meter3 from "../assets/img/js.png";
import meter4 from "../assets/img/git.png";
import meter5 from "../assets/img/react-js.png";
import meter6 from "../assets/img/django.svg";
import meter7 from "../assets/img/php.png";
import meter8 from "../assets/img/java.png";
import meter9 from "../assets/img/python.png";
import meter10 from "../assets/img/laravel.svg";
import colorSharp from "../assets/img/color-sharp.png";
import SkillModal from './SkillModal';

export const Skills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState('');
  const [skillLevel, setSkillLevel] = useState(1); // Default level to 1

  const skills = [
    { img: meter1, label: 'HTML', level: 8 },
    { img: meter2, label: 'CSS', level: 7 },
    { img: meter3, label: 'JavaScript', level: 9 },
    { img: meter4, label: 'Git', level: 7 },
    { img: meter5, label: 'React JS', level: 8 },
    { img: meter6, label: 'Django', level: 6 },
    { img: meter7, label: 'PHP', level: 7 },
    { img: meter8, label: 'Java', level: 5 },
    { img: meter9, label: 'Python', level: 9 },
    { img: meter10, label: 'Laravel', level: 6 },
  ];

  const openModal = (skill, level) => {
    setSelectedSkill(skill);
    setSkillLevel(level);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <div className="skills-grid">
                {skills.map((skill, index) => (
                  <div
                    className="skill-item"
                    key={index}
                    onClick={() => openModal(skill.label, skill.level)}
                  >
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

      {/* Modal display */}
      {isModalOpen && (
        <SkillModal
          skill={selectedSkill}
          level={skillLevel}
          closeModal={closeModal}
        />
      )}
    </section>
  );
};