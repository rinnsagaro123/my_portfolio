import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/contact2.png";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { FaEnvelope, FaPhone, FaMapMarkerAlt} from 'react-icons/fa'; // Importing icons
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon4.svg';
export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Web Developer", "PHP Developer", "React JS Developer", "Python Developer", "Laravel Developer", "Full-stack Developer", "Java Developer" ];
  const period = 500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Angelo Lerum`} </h1>
                <h1><span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "PHP Developer", "Java Developer", "Python Developer", "Front-End Developer", "Full-stack Developer" ]'><span className="wrap">{text}</span></span></h1>
                <p style={{ textAlign: "justify" }}>
                    I'm a passionate developer with a love for creating dynamic and engaging web applications. With expertise in multiple programming languages, 
                    I enjoy tackling complex challenges and delivering innovative solutions.  I'm constantly seeking opportunities to grow my skills and collaborate 
                    with like-minded professionals. Let's build something amazing together!
                </p>
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
                  {/* <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button> */}
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" id="header-img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
