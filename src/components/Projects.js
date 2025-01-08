import { useState } from "react"; // Import useState
import { Container, Row, Col, Tab, Button } from "react-bootstrap";
import "../Projects.css";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal"; // Import the modal
import projImg1 from "../assets/img/pf.mp4";
import projImg2 from "../assets/img/sy.mp4";
import projImg3 from "../assets/img/migrade.mp4";
import projImg4 from "../assets/img/op.mp4";
import projImg5 from "../assets/img/portfolio.mp4";
import projImg6 from "../assets/img/20482.mp4";
import projImg7 from "../assets/img/TrackMyJob.mp4";
import projImg8 from "../assets/img/tasteventure.mp4";
import projImg9 from "../assets/img/fasthr.mp4";
import projImg10 from "../assets/img/Binhi.mp4";
import projImg11 from "../assets/img/migrade-wireframe.mp4";
import projImg12 from "../assets/img/dabnb.mp4";
import icon1 from "../assets/img/html.svg";
import icon2 from "../assets/img/css.svg";
import icon3 from "../assets/img/js.svg";
import icon4 from "../assets/img/django.svg";
import icon5 from "../assets/img/php.svg";
import icon6 from "../assets/img/python.svg";
import icon7 from "../assets/img/react-js.svg";
import icon8 from "../assets/img/laravel.svg";
import icon9 from "../assets/img/figma.svg";
import icon10 from "../assets/img/canva.svg";
import icon11 from "../assets/img/wordpress.svg";
import icon12 from "../assets/img/vue.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered project index
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("website"); // New state for selected category

  // Projects categorized into Website and Wireframe
  const websiteProjects = [
    {
      title: "TrackMyJob",
      description: "TrackMyJob is a job tracking app built with Laravel and React.js, integrated with a chatbot assistant to provide users with personalized support in managing and organizing their job applications efficiently.",
      full_description: "TrackMyJob is a powerful job application management tool designed to help users stay organized and on top of their job search. It features application tracking, reminders for important deadlines, and a chatbot assistant powered by RASA for personalized guidance on resumes, interviews, and follow-ups. Built with Laravel and React.js, TrackMyJob provides a seamless experience to ensure users never miss an opportunity.",
      position: "Full Stack Developer",
      videoUrl: projImg7,
      iconUrls: [icon1, icon2, icon7, icon8],
    },
    {
      title: "MiGrade",
      description: "Capstone Project: A Web Based Student Record Management System Utilizing Optical Character Recognition using Django Framework",
      full_description: "MiGrade is a student record management system that uses Optical Character Recognition (OCR) to extract information from scanned documents. Developed as a capstone project, it provides a user-friendly interface for managing student data. Built with the Django framework, it allows seamless integration of OCR technology for efficient data handling.",
      position: "Full Stack Developer",
      videoUrl: projImg3,
      iconUrls: [icon1, icon2, icon3, icon4, icon6],
    },
    {
      title: "DaBNB",
      description: "Freelance Project: A Static Website for an Airbnb Business in Tagaytay using WordPress",
      full_description: "DaBNB is a static website developed to showcase an Airbnb business in Tagaytay. The project focused on creating a professional and visually appealing online platform to highlight available properties, essential details, and the unique charm of the Tagaytay location. Built using WordPress, the website features a responsive design, ensuring accessibility across devices while providing an elegant user experience.",
      position: "WordPress Developer",
      videoUrl: projImg12,
      iconUrls: [icon1, icon2, icon11],
    },    
    {
      title: "One Piece Cards",
      description: "Top 5 Pure CSS and HTML E-commerce Challenge StuDevPH Monthly Quest",
      full_description: "One Piece Cards is a project created for the StuDevPH Monthly Quest challenge. It showcases a CSS and HTML-based e-commerce website built entirely without JavaScript. The project emphasizes responsive design and UI/UX principles while offering an engaging shopping experience for users interested in collectible cards.",
      position: "Front End Developer",
      videoUrl: projImg4,
      iconUrls: [icon1, icon2, icon3],
    },
    {
      title: "My Portfolio",
      description: "A personal portfolio website built with React JS",
      full_description: "My Portfolio is a personal website built to showcase my skills, projects, and achievements as a developer. Built with React JS, the portfolio highlights my experience with full-stack development, including front-end technologies like React.js and back-end frameworks like Laravel. The site is designed with a clean, modern aesthetic, with smooth transitions and responsive layouts.",
      position: "Front End Developer",
      videoUrl: projImg5,
      iconUrls: [icon1, icon2, icon7],
    },
    {
      title: "2048",
      description: "An interactive puzzle game built with JavaScript.",
      full_description: "2048 is an interactive puzzle game where players slide numbered tiles to combine them into a tile with the number 2048. Built with JavaScript, this game features smooth animations, responsive controls, and a challenging, engaging gameplay experience. The project demonstrates strong problem-solving and JavaScript skills.",
      position: "Game Developer",
      videoUrl: projImg6,
      iconUrls: [icon1, icon2, icon3],
    },
    {
      title: "Pastries First",
      description: "E-Commerce Website using HTML, CSS, JS, and PHP",
      full_description: "Pastries First is a fully functional e-commerce website built with HTML, CSS, JavaScript, and PHP. It provides users with an easy-to-use platform to browse and purchase pastries online. The website supports product listings, shopping carts, and payment processing, delivering a smooth online shopping experience.",
      position: "Full Stack Developer",
      videoUrl: projImg1,
      iconUrls: [icon1, icon2, icon3, icon5],
    },
    {
      title: "Skinfully Yours",
      description: "E-Commerce Website using HTML, CSS, JS, and PHP",
      full_description: "Skinfully Yours is an e-commerce website designed for a skincare product line. Built with HTML, CSS, JavaScript, and PHP, it offers a smooth shopping experience with product catalogs, payment processing, and a user-friendly interface. The website is responsive, ensuring a great experience across all devices.",
      position: "Full Stack Developer",
      videoUrl: projImg2,
      iconUrls: [icon1, icon2, icon3, icon5],
    },
    // More website projects here...
  ];

  const wireframeProjects = [
    {
      title: "TasteVenture - Mobile Application",
      description: "Wireframe of TasteVenture Mobile Application Using FIGMA",
      full_description: "TasteVenture's wireframe highlights a user-friendly mobile game interface designed to engage users through interactive elements. Created using Figma, the design focuses on intuitive navigation and seamless gameplay experience.",
      position: "Front End Developer",
      videoUrl: projImg8,
      iconUrls: [icon9],
    },
    {
      title: "FastHR",
      description: "Wireframe of FastHR Using FIGMA",
      full_description: "The FastHR wireframe presents a clean and efficient layout tailored for human resource management. Designed with Figma, it emphasizes streamlined workflows and easy access to employee information.",
      position: "Front End Developer",
      videoUrl: projImg9,
      iconUrls: [icon9],
    },
    {
      title: "Binhi",
      description: "Wireframe of Binhi an IOT Mobile Application",
      full_description: "Binhi's wireframe focuses on a visually appealing and functional design for plant monitoring. Built with Figma and Canva, the design integrates IoT data visualization and intuitive controls for user interaction.",
      position: "Front End Developer",
      videoUrl: projImg10,
      iconUrls: [icon9, icon10],
    },
    {
      title: "MiGrade",
      description: "Wireframe of MiGrade: A Web Based Student Record Management System Utilizing Optical Character Recognition using Django Framework",
      full_description: "The MiGrade wireframe showcases a professional web-based interface for managing student records. Designed in Canva, it integrates OCR technology visually, ensuring ease of use and efficient data management.",
      position: "Front End Developer",
      videoUrl: projImg11,
      iconUrls: [icon10],
    },
  ];
  

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  // Toggle between Website and Wireframe Projects
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const projectsToShow = selectedCategory === "website" ? websiteProjects : wireframeProjects;

  return (
    <section className="project" id="projects">
      <Container>
        <Row className="mb-4">
        </Row>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <br></br>
                <Col className="text-center mb-4">
                  <Button
                    className={`project-btn ${selectedCategory === "website" ? "selected" : ""}`}
                    variant={selectedCategory === "website" ? "primary" : "outline-primary"}
                    onClick={() => handleCategoryChange("website")}
                  >
                    Website Projects
                  </Button>
                  <Button
                    className={`project-btn ${selectedCategory === "wireframe" ? "selected" : ""}`}
                    variant={selectedCategory === "wireframe" ? "primary" : "outline-primary"}
                    onClick={() => handleCategoryChange("wireframe")}
                  >
                    Wireframe Projects
                  </Button>
                </Col>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first" key={selectedCategory}>
                      <Row>
                        {projectsToShow.map((project, index) => {
                          return (
                            <Col key={index} xs={12} md={4} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)} onClick={() => handleProjectClick(project)}>
                              <ProjectCard
                                {...project}
                                isHidden={hoveredIndex !== null && hoveredIndex !== index} // Hide other projects
                              />
                            </Col>
                          );
                        })}
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background" />
      <ProjectModal
        show={showModal}
        onHide={() => setShowModal(false)}
        project={selectedProject}
      />
    </section>
  );
};
