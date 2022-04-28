import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import Techstack from "../About/Techstack";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>

      {/* I’m a full stack developer with 3.5 years of work experience in ReactJs &ensp; NextJS &ensp; Redux &ensp; NodeJs &ensp; ExpressJs &ensp; MongoDB &ensp; Material-ui &ensp; GraphQL &ensp; Firebase &ensp; Websockets &ensp; Socket.io &ensp; and many other tools.





S*/}

        <Row>
          <Col md={9} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I’m a full stack developer with 4 years of work experience in 
            
            <h3 className="purple" >
            ReactJs &ensp; TypeScript &ensp; NextJS &ensp; Redux &ensp;  NodeJs &ensp; Socket.io &ensp; ExpressJs &ensp; MongoDB &ensp; MUI &ensp; GraphQL &ensp; Firebase  &ensp; Web3.js &ensp; Micro-FE &ensp; Bootstrap &ensp; TailWind 
            </h3>
            
            and many other tools.
            <br/><br/>
            I have an extensive experience of working on large scale projects (that takes 3 to 4 months to complete) where authorization, Solid Structure Design and manageable code is critical.
            <br/>
            My professional work experience includes working for <span className="purple" >WestPac (Australia) , Digitexa (Turkey) and DropMagnet (US)</span> for beta projects.
            <br/><br/>
            My Blockchain skills include 1.5 year of working with
            
            <h4 className="purple" >
            Solidity &ensp; Truffle &ensp; Ganache &ensp; Remix &ensp; OpenZepplin &ensp; Web3.js &ensp; IPFS &ensp; Polygon &ensp; ERC 20 , 721 , 1155 Tokens
            </h4>
            I have a good experience of building Dapps , DeFi and NFT MarketPlace.
            <br/><br/>

            So whether you are looking for a socializing web app like Instagram, Custom Dapps , DeFi , Tinder or multi-vendor ecommerce Website like Amazon or OpenSea Clone or for building any other simple or complex Web application from the scratch with an elegant design or building new features to an existing web app 
            <b>– I’m the right person for you!</b>
             
              
            </p>
          </Col>
          <Col md={3} className="myAvtar">
            <Tilt>
              <img src={'https://res.cloudinary.com/gurucom/image/upload/f_auto,w_128,h_128,dpr_2/v1633329512/pimg/FreelancerFiles/3/976/3976988/ipfrvzo8zdmvxaoqr6ds.jpg'} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        

      </Container><br/><br/>

      <Container fluid className="about-section">
        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />
        </Container>


        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/syed-muhammad-ashar-saghir-a15a01224/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/syedashar1/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        
        </Row>

    </Container>
  );
}
export default Home2;
