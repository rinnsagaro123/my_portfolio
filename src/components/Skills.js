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
import meter11 from "../assets/img/canva.svg";
import meter12 from "../assets/img/figma.svg";
import meter13 from "../assets/img/mysql.svg";
import meter14 from "../assets/img/wordpress.svg";
import meter15 from "../assets/img/vue.svg";
import colorSharp from "../assets/img/color-sharp.png";
import SkillModal from './SkillModal';

export const Skills = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState('');
  const [skillLevel, setSkillLevel] = useState(1); // Default level to 1
  const [selectedDescription, setSkillDescription] = useState('');

  const skills = [
    { img: meter1, label: 'HTML', level: 10, description: "I have extensive experience with HTML, using it to build well-structured and accessible web pages. I`m proficient in advanced techniques and ensure that my code is clean and efficient." },
    { img: meter2, label: 'CSS', level: 8, description: 'I’m highly proficient in CSS and have worked on creating responsive designs using Flexbox and CSS Grid. I also have experience with animations, transitions, and modern frameworks like Bootstrap and Tailwind.' },
    { img: meter3, label: 'JavaScript', level: 8, description: 'I have strong proficiency in JavaScript, especially for front-end and back-end development. I’m comfortable working with ES6+ features, async programming, and using JavaScript in various real-world applications.' },
    { img: meter4, label: 'Git', level: 8, description: 'I regularly use Git for version control, including branching, merging, and rebasing. I’m comfortable working with remote repositories like GitHub and managing collaborative workflows.' },
    { img: meter5, label: 'React JS', level: 8, description: 'I’ve built several single-page applications (SPAs) using React JS. I’m experienced with managing state with hooks, routing with React Router, and integrating APIs to create dynamic web apps.' },
    { img: meter6, label: 'Django', level: 8, description: 'I’ve worked with Django to build web applications using Python. I’m familiar with Django’s ORM, creating RESTful APIs, and using its built-in features to accelerate development.' },
    { img: meter7, label: 'PHP', level: 8, description: 'I have solid experience with PHP, building dynamic websites and applications. I’ve used frameworks like Laravel to streamline development, and I’m comfortable with database integration and server-side scripting.' },
    { img: meter8, label: 'Java', level: 7, description: 'I have a solid understanding of Java, particularly object-oriented programming principles. I’ve used Java in building applications and working with frameworks like Spring for back-end development.' },
    { img: meter9, label: 'Python', level: 8, description: 'I’ve worked extensively with Python, using it for web development with Django and Flask, as well as for scripting and data analysis. I’m comfortable with various libraries and tools in Python.' },
    { img: meter10, label: 'Laravel', level: 8, description: 'I’m proficient with Laravel, having built several full-stack web applications. I’m familiar with the framework’s powerful features, including Eloquent ORM, routing, and middleware.' },
    { img: meter12, label: 'Figma', level: 8, description: 'I have experience using Figma to design user interfaces for my web projects. I’m comfortable creating wireframes, prototypes, and collaborating with developers to ensure smooth handoffs.'  },
    { img: meter11, label: 'Canva', level: 8, description: 'I use Canva to create visually appealing graphics for my projects, such as banners, social media posts, and promotional materials. It helps me quickly design assets without the need for complex software.'  },
    { img: meter13, label: 'MySQL', level: 8, description: 'I have strong experience working with MySQL, including designing and optimizing databases, writing complex queries, and managing data for dynamic applications.' },
    { img: meter14, label: 'WordPress', level: 8, description: 'I have experience developing WordPress websites using tools such as Kubio, WPForms, Elementor, and Simply Static. My skills include customizing themes, creating responsive designs, and implementing plugins to enhance functionality.'},
    { img: meter15, label: 'Vue.js', level: 4, description: 'I am currently learning Vue.js and familiarizing myself with its fundamentals, including reactive data binding, components, and the Vue CLI. I am at a beginner level and eager to apply and grow my knowledge through hands-on projects.' },
  ];
  
  

  const openModal = (skill, level, description) => {
    setSelectedSkill(skill);
    setSkillLevel(level);  // Level should be used to show the expertise bar
    setSkillDescription(description); // Description should be displayed in the modal
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
                    onClick={() => openModal(skill.label, skill.level, skill.description)}
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
          description={selectedDescription}
          closeModal={closeModal}
        />
      )}
    </section>
  );
};