import { Container, Tab, Row, Col, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
export const Projects = () => {
    const projects = [
        {
            title: "xyz",
            description: "xxx",
            imgURL: projImg1,
        },
        {
            title: "xyz",
            description: "xxx",
            imgURL: projImg2,
        },
        {
            title: "xyz",
            description: "xxx",
            imgURL: projImg3,
        },
        {
            title: "xyz",
            description: "xxx",
            imgURL: projImg1,
        },
        {
            title: "xyz",
            description: "xxx",
            imgURL: projImg1,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>lorem ipsum</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">

                    <Nav variant="pills" defaultActiveKey="/home">
                    <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
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
                                 <Tab.Pane eventKey="second">
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} ></img>
        </section>
    )
}