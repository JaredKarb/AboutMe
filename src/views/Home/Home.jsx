import { Container, Row, Col } from "react-bootstrap";
import SectionGroup from "../../Components/SectionGroup/SectionGroup";

const sections = [
  { id: "Summary", title: "Welcome to My Portfolio", content: `Welcome to my portfolio! I'm Jared Karbakhsh, a Full-Stack Developer with a passion for building powerful, scalable software solutions. With experience in both front-end and back-end technologies, I enjoy solving complex problems and delivering clean, efficient code. I'm always looking to expand my skill set and take on new challenges in software development.` },
  { id: "Overview", title: "About Me", content: "I'm a developer who thrives on learning and collaboration. My core strengths lie in Python, JavaScript, and C++, with hands-on experience in frameworks like React and Express. My journey in tech began with a certificate in programming and has grown into a full-stack focus as I complete my B.S. in Computer Science at Utah Valley University. I value clean code, teamwork, and always pushing projects one step further." },
  { id: "workhistory", title: "Work History", content: "Here's where I've worked." },
  { id: "Education", title: "Education", content: "Check out some of the projects I've worked on." },
  { id: "Skills", title: "Skills", content: "These are some of my technical skills." },
  { id: "Awards", title: "Awards", content: "Here are some achievements I'm proud of." }
];

const Home = () => {
  const topSections = sections.slice(0, 3);
  const bottomSections = sections.slice(3);

  return (
    <Container fluid className="bg-dark">
      <Row>
        <Col md={8} className="mt-4">
          <SectionGroup sections={topSections} bgClass="bg-secondary" />
        </Col>
        <Col md={4} className="mt-4">
          <img
            src="/hero.webp"
            alt="Profile"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <SectionGroup sections={bottomSections} bgClass="bg-danger" />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
