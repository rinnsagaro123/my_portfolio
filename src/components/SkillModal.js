import React from 'react';
import '../SkillModal.css'; // Assuming your CSS is in this file

const SkillModal = ({ skill, level, closeModal }) => {
  // Create an array with 10 rectangles, fill colors based on level
  const rectangles = Array.from({ length: 10 }, (_, index) => {
    return index < level ? 'filled' : 'empty'; // Determine if the rectangle should be filled or empty
  });

  return (
    <div className="custom-modal-overlay">
      <div className="custom-modal-container">
        <div className="custom-modal-content">
          <h3>My Expertise in {skill}</h3>
          <p>
            I would rate myself at level {level} out of 10 in {skill}. I have
            experience working on multiple projects and using this technology in
            real-world applications.
          </p>
          
          {/* Displaying 10 rectangles */}
          <div className="custom-expertise-level-bar">
            {rectangles.map((status, index) => (
              <div
                key={index}
                className={`custom-expertise-rectangle ${status}`}
                style={{ backgroundColor: status === 'filled' ? '#031E49' : '#ddd' }}  // Blue for filled, gray for empty
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
