import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact1.jpg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { FaEnvelope, FaPhone, FaMapMarkerAlt} from 'react-icons/fa'; // Importing icons
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon4.svg';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
      setFormDetails({
        ...formDetails,
        [category]: value
      })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await response.json();
    setFormDetails(formInitialDetails);
    if (result.code == 200) {
      setStatus({ succes: true, message: 'Message sent successfully'});
    } else {
      setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Contact Details</h2>
                <div className="contact-details">
                    <div className="contact-item">
                      <FaEnvelope /> 
                      <span><a href="mailto:lerumangelo@gmail.com">lerumangelo@gmail.com</a></span>
                    </div>
                    <div className="contact-item">
                      <FaPhone /> 
                      <span><a href="tel:09066806016">09066806016</a></span>
                    </div>
                    <div className="contact-item">
                      <FaMapMarkerAlt /> 
                      <span>Zone 4 Brgy. Bulihan, Silang, Cavite</span>
                    </div>
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/lerum-angelo/"><img src={navIcon1} alt="" /></a>
                        <a href="https://www.facebook.com/rinnsagaro123/"><img src={navIcon2} alt="" /></a>
                        <a href="https://github.com/rinnsagaro123"><img src={navIcon3} alt=""/></a>
                    </div>
                  </div>  
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
