import { Container, Tab, Row, Col, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import 'animate.css';
import React from 'react';  
import TrackVisibility from 'react-on-screen';
export const Projects = () => {
    const projects = [
        {
            title: "Plant Leaf Disease Detection Application",
            description: "A mobile app that uses deep learning models to diagnose diseases in your plants.",
            imgURL: projImg1,
        },
        {
            title: "CivicEye",
            description: "A municipal app that allows you to report local issues for everyone to see. People can upvote reported issues, increasing their priority for swift action.",
            imgURL: projImg2,
        },
        {
            title: "Desktop Assistant",
            description: "A personal desktop assistant that can help you with various tasks, including playing music, sending emails, and more.",
            imgURL: projImg3,
        },
        {
            title: "Fake News Detector",
            description: "A machine learning model that can detect fake news.",
            imgURL: projImg1,
        },
        // {
        //     title: "xyz",
        //     description: "xxx",
        //     imgURL: projImg1,
        // },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                         <TrackVisibility>
                            {({ isVisible }) =>
                            <div className={isVisible ? "animated__animated animate__slideInUp" : ""} >
                        <h2>Projects</h2>
                        <p>Check out some of the stuff I've built!</p>
                                </div>
                            }
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">

                    <Nav variant="pills" classNmae="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    {/* <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item> */}
                    {/* <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />

                                                    
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                 {/* <Tab.Pane eventKey="second">
                                </Tab.Pane> */}
                                {/* <Tab.Pane eventKey="third">
                                </Tab.Pane> */}
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} ></img>
        </section>
    )
}