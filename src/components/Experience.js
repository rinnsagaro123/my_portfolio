import React from "react";

export const Experience = () => {
  const experiences = [
    {
      date: "Feb 2025 - Present",
      title: "Junior Software Developer",
      company: "Xtreme Offshore Outsourcing Inc.",
    },
    {
      date: "April 2024 - July 2024",
      title: "Full Stack Developer Intern / Quality Assurance Intern",
      company: "Gleent Incorporated",
    },
  ];

  return (
    <section className="experience" id="experience">
      <div className="container">
        <div className="row">
          <div className="col-12">

            <div className="skill-bx wow zoomIn">
              <h2>Professional Experience</h2>

              <div className="experience-wrapper">
                {experiences.map((exp, index) => (
                  <div className="experience-row" key={index}>
                    <div className="experience-date">
                      {exp.date}
                    </div>

                    <div className="experience-details">
                      <h4>{exp.title}</h4>
                      <p>{exp.company}</p>
                    </div>

                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};