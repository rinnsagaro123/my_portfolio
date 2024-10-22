// import { Col } from "react-bootstrap";

// export const ProjectCard = ({ title, description, imgUrl }) => {
//   return (
//     <Col size={12} sm={6} md={4}>
//       <div className="proj-imgbx">
//         <img src={imgUrl} />
//         <div className="proj-txtx">
//           <h4>{title}</h4>
//           <span>{description}</span>
//         </div>
//       </div>
//     </Col>
//   )
// }
// export const ProjectCard = ({ title, description, imgUrl, isHidden }) => {
//   return (
//     <div className={`proj-imgbx ${isHidden ? 'hidden' : ''}`}>
//       <img src={imgUrl} alt={title} />
//       <div className="proj-txtx">
//         <h4>{title}</h4>
//         <span>{description}</span>
//       </div>
//     </div>
//   );
// }
import { useRef } from 'react';

export const ProjectCard = ({ title, description, videoUrl, isHidden, iconUrls }) => {
  const videoRef = useRef(null); // Create a reference for the video element

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play(); // Play the video on hover
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause(); // Pause the video when not hovered
      videoRef.current.currentTime = 0; // Reset the video to the beginning
    }
  };

  return (
    <div 
      className={`proj-imgbx ${isHidden ? 'hidden' : ''}`} 
      onMouseEnter={handleMouseEnter} 
      onMouseLeave={handleMouseLeave}
    >
      
      {/* Use video tag instead of img tag */}
      <video ref={videoRef} muted className="project-video">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* Render the icon image above the title */}
      {/* Render all icon images above the title */}
      <div className="icon-container">
        {iconUrls && iconUrls.map((iconUrl, index) => (
          <img key={index} src={iconUrl} alt={`${title} icon ${index + 1}`} className="project-icon" />
        ))}
      </div>
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </div>
  );
};
