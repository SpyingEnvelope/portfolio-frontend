import { Row, Image, Col} from "react-bootstrap";
import { motion } from "framer-motion";
import classes from "./AboutMe.module.css";
import StarLine from "../../components/StarLine";
import profileImage from "./profile-image-2.jpg";
import CertButton from "../../components/CertButton";

const AboutMe = () => {
  return (
    <motion.div
      className={`${classes["no-padding"]} d-flex flex-column text-center`}
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1.0 } }}
      exit={{ opacity: 0, y: "-100%", transition: { duration: 0.5 } }}
    >
      <Row>
        <h1 style={{ paddingTop: 20, paddingBottom: 20, fontWeight: "bold" }}>
          About Me
        </h1>
      </Row>
      <StarLine />
      <Row>
        <Image
          src={profileImage}
          fluid
          style={{ padding: 10, width: "300px", borderRadius: "20px" }}
        />
      </Row>
      <Row>
        <h2>Background</h2>
      </Row>
      <Row className="w-75 justify-content-center">
        <p style={{ maxWidth: "600px" }}>
          My name is Gad Cooper, and welcome to the about me page! I live in
          Calgary, Alberta, Canada. I moved to Canada when I was 18, starting in
          Toronto, Ontario before settling where I am now. I loved computers
          growing up. My mother was a software engineer, and she brought home
          computers for me and my siblings very early on in our lives. I
          modified my first computer when I was about 10, where I used a book my
          mother brought home about computer hardware to try and install a
          CD-Drive. I remember completely failing though and the CD-Drive not
          working. When I became an adult, I tried to move away from computers a
          bit, so I went to college for a diploma in Justice Studies, with a
          focus on youth justice. I worked with at-risk youth for about two
          years before realizing that the career was just not for me. I then
          started working at Early Childhood Education, where I had a lot of
          fun! Kids are incredibly intelligent and often positive! I moved away
          from that onto working with young children who have disabilities. I
          still work with children with disabilities, and it has been a very
          rewarding career.
        </p>
      </Row>
      <Row>
        <h2>Return to Tech</h2>
      </Row>
      <Row className="w-75 justify-content-center">
        <p style={{ maxWidth: "600px" }}>
          While working with children with disabilities, I began digging back
          into my computer roots. I built myself a PC and fell in love with the
          hardware aspect of computers all over again. While hardware was
          fascinating, I wanted to manipulate the software side as well. I
          looked up resources to do so and stumbled across The Odin Project!
          That place definitely got me hooked on programming. The Odin Project
          linked me to freeCodeCamp for HTML and CSS tutorials. From that point
          on, I absolutely loved freeCodeCamp and decided to stick with it. I
          would wake up early, before my son would wake up, and just study on
          freeCodeCamp for two hours. I would then study for an hour or two more
          after my son fell asleep. Every morning, I would be excited to see
          what is next or try out a new way to make my projects work. My
          re-discovered passion for tech and newly discovered passion for
          software development made me want to turn it into a career. I started
          my learning journey in late 2020. Over two years later, I have
          finished the freeCodeCamp curriculum, invested in Udemy courses to
          learn more, and have utilized various other online learning resources
          to further expand my knowledge of programming.
        </p>
      </Row>
      <Row className="w-75 justify-content-center">
        <h2 style={{ maxWidth: "600px", paddingBottom: 20 }}>
          Languages, Frameworks, and Libraries I Studied and Used
        </h2>
      </Row>
      <Row className="w-75 justify-content-center">
        <Col md={4} xs={6} sm={4} lg={3} xl={2}>
          <ul className={classes.myul}>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>jQuery</li>
            <li>React</li>
            <li>React Native</li>
            <li>Redux</li>
            <li>D3.js</li>
            <li>NodeJS</li>
            <li>Express</li>
            <li>MongoDB and Mongoose</li>
          </ul>
        </Col>
        <Col md={4} xs={6} sm={4} lg={2} xl={1}>
          <ul className={classes.myul}>
            <li>SQLite 3</li>
            <li>Jest</li>
            <li>Chai.js</li>
            <li>Python</li>
            <li>Pygame</li>
            <li>Numpy</li>
            <li>Pandas</li>
            <li>Matplotlib</li>
            <li>Jupyter Notebook</li>
            <li>Tensorflow</li>
            <li>Scikit Learn</li>
          </ul>
        </Col>
      </Row>
      <Row className="w-75 justify-content-center text-center">
        <h2 style={{ paddingBottom: 10, paddingTop: 10 }}>Certifications</h2>
      </Row>
      <CertButton 
        link="https://www.freecodecamp.org/certification/spyingenvy/responsive-web-design"
        text="freeCodeCamp Responsive Web Design Certificate"
      />
      <CertButton
        link="https://www.freecodecamp.org/certification/spyingenvy/javascript-algorithms-and-data-structures"
        text="freeCodeCamp JavaScript Algorithms and Data Structures Certificate"
      />
      <CertButton
        text="freeCodeCamp Front End Development Libraries Certificate"
        link="https://www.freecodecamp.org/certification/spyingenvy/front-end-development-libraries"
      />
      <CertButton
        text="freeCodeCamp Data Visualization Certificate"
        link="https://www.freecodecamp.org/certification/spyingenvy/data-visualization"
      />
      <CertButton
        text="freeCodeCamp Back End Development and APIs Certificate"
        link="https://www.freecodecamp.org/certification/spyingenvy/back-end-development-and-apis"
      />
      <CertButton 
        text="freeCodeCamp Quality Assurance Certificate"
        link="https://www.freecodecamp.org/certification/spyingenvy/quality-assurance-v7"
      />
      <CertButton 
        text="freeCodeCamp Information Security Certificate"
        link="https://www.freecodecamp.org/certification/spyingenvy/information-security-v7"
      />
      <CertButton 
        text="freeCodeCamp Scientific Computing with Python Certificate"
        link="https://www.freecodecamp.org/certification/spyingenvy/scientific-computing-with-python-v7"
      />
      <CertButton 
        text="freeCodeCamp Data Analysis with Python Certificate"
        link="https://www.freecodecamp.org/certification/spyingenvy/data-analysis-with-python-v7"
      />
      <CertButton 
        text="freeCodeCamp Machine Learning with Python Certificate"
        link="https://www.freecodecamp.org/certification/spyingenvy/machine-learning-with-python-v7"
      />
      <CertButton 
        text="Udemy React - The Complete Guide Certificate"
        link="https://www.udemy.com/certificate/UC-deaf34d7-3a94-4e06-864a-21fbcc60b0e4/"
      />
      <Row className="w-75 justify-content-center">
        <h2>Links</h2>
      </Row>
      <Row>
        <a
          className={classes.social}
          href="https://www.freecodecamp.org/spyingenvy"
          target="_blank"
          rel="noreferrer"
        >
          freeCodeCamp Profile
        </a>
      </Row>
      <Row>
        <a
          className={classes.social}
          href="https://github.com/SpyingEnvelope"
          target="_blank"
          rel="noreferrer"
        >
          Github Page
        </a>
      </Row>
      <Row>
        <a
          className={classes.social}
          href="https://www.linkedin.com/in/gad-cooper/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn Profile
        </a>
      </Row>
    </motion.div>
  );
};

export default AboutMe;
