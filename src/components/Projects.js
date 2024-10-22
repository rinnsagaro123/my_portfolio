import { useState } from "react"; // Import useState
import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/pf.mp4";
import projImg2 from "../assets/img/sy.mp4";
import projImg3 from "../assets/img/migrade.mp4";
import projImg4 from "../assets/img/op.mp4";
import projImg5 from "../assets/img/portfolio.mp4";
import projImg6 from "../assets/img/20482.mp4";
import icon1 from "../assets/img/html.svg";
import icon2 from "../assets/img/css.svg";
import icon3 from "../assets/img/js.svg";
import icon4 from "../assets/img/django.svg";
import icon5 from "../assets/img/php.svg";
import icon6 from "../assets/img/python.svg";
import icon7 from "../assets/img/react-js.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered project index

  const projects = [
    {
      title: "MiGrade",
      description: "Capstone Project: A Web Based Student Record Management System Utilizing Optical Character Recognition using Django Framework",
      videoUrl: projImg3,
      iconUrls: [icon1, icon2, icon3, icon4, icon6],
    },
    {
      title: "Pastries First",
      description: "E-Commerce Website using HTML, CSS, JS, and PHP",
      videoUrl: projImg1,
      iconUrls: [icon1, icon2, icon3, icon5],
    },
    {
      title: "One Piece Cards",
      description: "Top 5 Pure CSS and HTML E-commerce Challenge StuDevPH Monthly Quest",
      videoUrl: projImg4,
      iconUrls: [icon1, icon2, icon3],
    },
    {
      title: "Skinfully Yours",
      description: "E-Commerce Website using HTML, CSS, JS, and PHP",
      videoUrl: projImg2,
      iconUrls: [icon1, icon2, icon3, icon5],
    },
    {
      title: "2048",
      description: "An interactive puzzle game built with JavaScript.",
      videoUrl: projImg6,
      iconUrls: [icon1, icon2, icon3],
    },
    {
      title: "My Portfolio",
      description: "A personal portfolio website built with React JS",
      videoUrl: projImg5,
      iconUrls: [icon1, icon2, icon7],
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {projects.map((project, index) => {
                          return (
                            <Col key={index} xs={12} md={4} onMouseEnter={() => setHoveredIndex(index)} onMouseLeave={() => setHoveredIndex(null)}>
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
