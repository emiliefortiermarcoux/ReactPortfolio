import {Row, Col, Nav, Tab, Container} from 'react-bootstrap';
import { ProjectCards } from './ProjectCards';
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";



export const Projects = () =>{
    const projects = [
        {
            title:"Business Startup",
            decription:"Design & Development",
            imgUrl:projImg1,
        },
        {
            title:"Business Startup",
            decription:"Design & Development",
            imgUrl:projImg2,
        },
        {
            title:"Business Startup",
            decription:"Design & Development",
            imgUrl:projImg3,
        },
        {
            title:"Business Startup",
            decription:"Design & Development",
            imgUrl:projImg1,
        },
        {
            title:"Business Startup",
            decription:"Design & Development",
            imgUrl:projImg1,
        },
        {
            title:"Business Startup",
            decription:"Design & Development",
            imgUrl:projImg1,
        }
    ];

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" defaultActiveKey="first" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                                <Nav.Link href="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                Disabled
                                </Nav.Link>
                            </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) =>{
                                                return(
                                                    <ProjectCards
                                                    key={index}
                                                    {...project}
                                                    />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <p>Lorem Ipsum</p>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <p>Lorem Ipsum</p>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}