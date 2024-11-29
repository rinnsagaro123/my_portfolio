import { Modal, Button } from 'react-bootstrap';
import '../ProjectModal.css'; // Assuming you have a CSS file for custom styles

export const ProjectModal = ({ show, onHide, project }) => {
  if (!project) return null;

  // Debugging the project object
  console.log('Project:', project);

  return (
    <Modal show={show} onHide={onHide} centered size="lg" className="custom-project-modal">
      <Modal.Header closeButton>
        <Modal.Title className="text-center w-100">{project.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ maxHeight: '70vh', overflowY: 'auto' }}>
        {/* Video Section */}
        <div className="video-container mb-4">
          <video controls autoPlay muted loop width="100%">
            <source src={project.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Full Description Section */}
        {project.full_description && (
          <>
            <h5 className="section-title">Full Description</h5>
            <p className="full-description">{project.full_description}</p>
          </>
        )}

        {/* Tools Icons Section Below Full Description */}
        <h5 className="section-title mt-3">Skills</h5>
        <div className="d-flex justify-content-start gap-3 mb-4 icon-section">
          {project.iconUrls && project.iconUrls.map((icon, index) => {
            // Extract the file name without the extension
            const fileName = icon.split('/').pop().split('.')[0].toUpperCase();
            
            return (
              <div key={index} className="tool-icon text-center">
                <img src={icon} alt={`Tool ${index}`} width={40} height={40} className="icon-img" />
                <div className="icon-label">{fileName}</div>
              </div>
            );
          })}
        </div>

        {/* Position Section */}
        {project.position && (
          <>
            <h5 className="section-title mt-3">Position</h5>
            <p className="position-text">{project.position}</p>
          </>
        )}

        {/* Team Members Section (Optional) */}
        {project.teamMembers && project.teamMembers.length > 0 && (
          <>
            <h5 className="section-title mt-3">Team Members</h5>
            <ul className="team-members-list">
              {project.teamMembers.map((member, index) => (
                <li key={index} className="text-black">{member}</li>
              ))}
            </ul>
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
