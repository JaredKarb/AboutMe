import React from "react";
import { Container } from "react-bootstrap";

const sections = [
  { id: "hero", title: "Welcome to My Portfolio", content: "I'm Jared Karbakhsh, a Full-Stack Developer." },
  { id: "about", title: "About Me", content: "I'm passionate about coding, particularly in Python, React, and JavaScript." },
  { id: "projects", title: "My Projects", content: "Check out some of the projects I've worked on." },
  { id: "contact", title: "Contact", content: "If you'd like to get in touch, feel free to reach out." }
];

const Home = () => {
  return (
    <Container fluid>
      {sections.map((section) => (
        <section id={section.id} className={`${section.id}-section`} key={section.id}>
          <h2>{section.title}</h2>
          <p>{section.content}</p>
        </section>
      ))}
    </Container>
  );
};

export default Home;
