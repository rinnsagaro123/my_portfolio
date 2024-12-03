import React from 'react';
import '../SkillModal.css'; // Assuming your CSS is in this file

const SkillModal = ({ skill, level, description, closeModal }) => {
  const rectangles = Array.from({ length: 10 }, (_, index) => {
    return index < level ? 'filled' : 'empty'; // Determine if the rectangle should be filled or empty
  });

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal-container">
        <div className="custom-modal-content">
          <h3>My Expertise in {skill}</h3>
          {/* Display skill description */}
          <p className="skill-description">I would rate myself at level {level} out of 10 in {skill}. {description}</p>

          
          {/* Expertise level bar */}
          <div className="custom-expertise-level-bar">
            {rectangles.map((status, index) => (
              <div
                key={index}
                className={`custom-expertise-rectangle ${status}`}
                style={{ backgroundColor: status === 'filled' ? '#337ab7' : '#F9F9F9' }}  // Blue for filled, gray for empty
              />
            ))}
          </div>

          <button onClick={closeModal}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default SkillModal;
