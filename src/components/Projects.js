import React, { Component }  from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import logoCard from "../assets/img/logoCard.svg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import logo from "../assets/img/logo.png";

export const Projects = () => {

  const projectsFirst = [
    {
      title: "Seu Projeto aqui",
      description: "Entre em contato",
      imgUrl: logoCard,
    },
    {
      title: "Seu Projeto aqui",
      description: "Entre em contato",
      imgUrl: logoCard,
    },
    {
      title: "Seu Projeto aqui",
      description: "Entre em contato",
      imgUrl: logoCard,
    },
  ];

  const projectsSecond = [
    {
      title: "Seu Projeto aqui",
      description: "Entre em contato",
      imgUrl: logoCard,
    },
    {
      title: "Seu Projeto aqui",
      description: "Entre em contato",
      imgUrl: logoCard,
    },
    {
      title: "Seu Projeto aqui",
      description: "Entre em contato",
      imgUrl: logoCard,
    },
  ];

  const projectsThird = [
    {
      title: "Seu Projeto aqui",
      description: "Entre em contato",
      imgUrl: logoCard,
    },
    {
      title: "Seu Projeto aqui",
      description: "Entre em contato",
      imgUrl: logoCard,
    },
    {
      title: "Seu Projeto aqui",
      description: "Entre em contato",
      imgUrl: logoCard,
    },
  ];

  return <section className="project" id="project">
    <Container>
      <Row>
        <Col size={12}>
          <TrackVisibility>
            {({ isVisible }) =>
            <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
              <h2>Projetos</h2>
              <p >Aguardando ideias, soluções, ajuda e café!</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                  <Nav.Item>
                    <Nav.Link eventKey="first">atuais</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">executando</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">planejando</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                  <Tab.Pane eventKey="first">
                    <Row>
                      {
                        projectsFirst.map((project, index) => {
                          return <ProjectCard
                              key={index}
                              {...project}
                              />
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row>
                      {
                        projectsSecond.map((project, index) => {
                          return <ProjectCard
                              key={index}
                              {...project}
                          />
                        })
                      }
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row>
                      {
                        projectsThird.map((project, index) => {
                          return <ProjectCard
                              key={index}
                              {...project}
                          />
                        })
                      }
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>}
          </TrackVisibility>
        </Col>
      </Row>
    </Container>
    <img className="background-image-right" src={colorSharp2}></img>
  </section>
}
