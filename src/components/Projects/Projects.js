import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              detail='https://www.upwork.com/freelancers/~01c3481054a3fb83ab?p=1444575244165111808'
              imgPath='https://res.cloudinary.com/gurucom/image/upload/f_auto/v1633290169/pimg/FreelancerFiles/3/976/3976988/lrwixzgd5szkoggsnq6k.png'
              title="Coolgram | A Socializing Web App              "
              description="The proper clone of Instagram version of 2017 with additional features built on MERN stack from scratch. One of the best project on my portfolio to see Solid Structure Design and manageable code for both Backend and Frontend and also for socket connections for making real time features.

              It contains all the algorithm for displaying news feed , push notifications , viewing follow suggestions and much in real time.
              
              Each news feed post , message , card and profile post is built up on components and provided with socket providers to enable the real time goodness!"
              link="https://github.com/syedashar1/coolgram"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              detail='https://www.upwork.com/freelancers/~01c3481054a3fb83ab?p=1444581111621513216'
              imgPath='https://res.cloudinary.com/gurucom/image/upload/f_auto/v1633291248/pimg/FreelancerFiles/3/976/3976988/aelv2jgxle2wqcszzlz5.png'
              title="Zarthon | Hire Gigworkers , Professionals and Tutors Online.              "
              description="A website for hiring / recruiting Gig workers , Professionals and Teachers across the globe! Contains features of Upwork , Fiverr and Freelancer combined and much more. Built this on MERN stack for a small software house in Atlanta. Contains proper secure transaction for PayPal and transfer to bank account features."
              link="https://github.com/syedashar1/Zarthon"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              detail='https://www.upwork.com/freelancers/~01c3481054a3fb83ab?p=1444593380493705216'
              imgPath={'https://res.cloudinary.com/gurucom/image/upload/w_237,h_158,f_auto,dpr_2/v1633292014/pimg/FreelancerFiles/3/976/3976988/eoaaxpqecwvkfgckqlad.png'}
              title="Framily | Beta Project WesPac Australia              "
              description="A scalable Beta Project for WestPac Australia.
              A socializing web application for connecting families with each other. A single profile represents a family and each family member has the access to the family account.
              
              Families can explore other families and give them a heart and when two hearts match then chat between these 2 families is enabled"
              link="https://github.com/syedashar1/framily"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              detail='https://www.upwork.com/freelancers/~01c3481054a3fb83ab?p=1444596228065411072'
              imgPath={'https://res.cloudinary.com/gurucom/image/upload/f_auto/v1633292155/pimg/FreelancerFiles/3/976/3976988/rxf10d5qawaqpz9h4orh.png'}
              title="Next JS | Ecommerce WebApp"
              description="A light-weight , single vendor , ecommerce site built on NEXT JS and elegantly designed with material-ui for best UI/UX experience.

              Contains all the features of modern ecommerce site built using the latest server-less technologies and faster rendering than plain React App."
              link="https://github.com/syedashar1/Nextjs-Ecommerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              detail='https://www.upwork.com/freelancers/~01c3481054a3fb83ab?p=1444597313242234880'
              imgPath={'https://res.cloudinary.com/gurucom/image/upload/w_237,h_158,f_auto,dpr_2/v1633292699/pimg/FreelancerFiles/3/976/3976988/fk82q7lcne23htqgpfgv.png'}
              title="Amazon Clone | Beta Project Digitexa Turkey              "
              description="A multi vendor ecommerce web app , containing all the features of Amazon.com .

              Built on Mern Stack.
              
              Tech Stack used :
              • ReactJS
              • REDUX
              • NodeJS
              • ExpressJS
              • MongoDB
              • FireBase
              • socket.io
              • MERN
              
              Completed in :
              • 1 month"
              link="https://github.com/syedashar1/Amazon-Clone-"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              detail='https://syedashar1.github.io/halloween/'
              imgPath={'https://res.cloudinary.com/gurucom/image/upload/w_237,h_158,f_auto,dpr_2/v1635271970/pimg/FreelancerFiles/3/976/3976988/khltdumk6uujiyid1gtg.png'}
              title="Halloween Shop 🎃"
              description="(For live preview click the link)
              - Responsive Halloween Website Using HTML, CSS & JavaScript.
              - Contains animations when scrolling.
              - Smooth scrolling in each section.
              - Developed first with the Mobile First methodology, then for desktop.
              - Compatible with all mobile devices and with a beautiful and pleasant user interface.e and then pass the face to the classifer to predict the emotion of a person."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              detail='https://www.upwork.com/freelancers/~01c3481054a3fb83ab?p=1444600916522663936'
              imgPath={'https://res.cloudinary.com/gurucom/image/upload/w_237,h_158,f_auto,dpr_2/v1633293830/pimg/FreelancerFiles/3/976/3976988/vbq04ajhkupdix7ovbmn.png'}
              title="Nike Shop"
              description="Built for a local customer.
              Desgined only the frontend."
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
