import { Container, Row, Col, Image } from "react-bootstrap";
import SectionGroup from "../../Components/SectionGroup/SectionGroup";

const sections = [
  { id: "Summary", title: "Welcome to My Portfolio", content: `Welcome to my portfolio! I'm Jared Karbakhsh, a Full-Stack Developer with a passion for building powerful, scalable software solutions. With experience in both front-end and back-end technologies, I enjoy solving complex problems and delivering clean, efficient code. I'm always looking to expand my skill set and take on new challenges in software development.` },
  { id: "about", title: "About Me", content: "I'm a developer who thrives on learning and collaboration. My core strengths lie in Python, JavaScript, and C++, with hands-on experience in frameworks like React and Express. My journey in tech began with a certificate in programming and has grown into a full-stack focus as I complete my B.S. in Computer Science at Utah Valley University. I value clean code, teamwork, and always pushing projects one step further." },
  {
    id: "workhistory",
    title: "Work History",
    content: (
      <>
        <h4>Software Engineering Intern — GE HealthCare (2024)</h4>
        <p>
          At GE HealthCare, I contributed to backend process automation by creating scripts to launch servers, manage TCP communication, and process signed data packets. I also developed a C++ compiler-error parser that automatically applied code fixes and helped migrate verification tests into a modern system.
        </p>

        <h4>Lead Instructional Assistant — UVU Computer Science Dept. (2022–2024)</h4>
        <p>
          As a Lead IA, I mentored students in Python and assisted with upper-division coursework. I organized lab operations, hosted team meetings, and helped fellow assistants troubleshoot technical issues—sharpening both my technical and leadership skills.
        </p>
      </>
    ),
  },
  { id: "Education", title: "Education", content: "I have completed a B.S. in Computer Science with an emphasis in Full-Stack Web Development at Utah Valley University, graduated in December 2024 with a 3.7 GPA. I also hold a Certificate of Programming from UVU, and earned my high school diploma from Orem High School in 2020." },
  { id: "Skills", title: "Skills", content: "I'm fluent in Python, JavaScript, C++, C#, and Kotlin, with solid experience using React, Express, REST APIs, SQL, and MongoDB. I'm comfortable with Git workflows, unit testing, and CI/CD pipelines. My focus is on writing scalable code and continuously improving my development process." },
  {
    id: "Awards",
    title: "Awards",
    content: (
      <>
        <p>I'm proud to have earned multiple SkillsUSA awards, including:</p>
        <ul>
          <li>Gold Medal at UVU's SkillsUSA competition</li>
          <li>Gold Medal at the Utah State SkillsUSA competition</li>
          <li>Bronze Medal at the SkillsUSA National competition in Atlanta</li>
        </ul>
        <p>These achievements reflect my drive...</p>
      </>
    ),
  },
];

const Home = () => {
  const topSections = sections.slice(0, 6);
  const bottomSections = sections.slice(4);

  return (
    <Container fluid className="bg-dark">
      <Row>
        <Col md={8} className="mt-4">
          <SectionGroup sections={topSections} bgClass="bg-secondary" />
        </Col>
        <Col md={4} className="mt-4">
          <Image src="hero.webp" rounded fluid/>
        </Col>
      </Row>
      {/* <Row className="mt-4">
        <Col>
          <SectionGroup sections={bottomSections} bgClass="bg-secondary" />
        </Col>
      </Row> */}
    </Container>
  );
};

export default Home;
