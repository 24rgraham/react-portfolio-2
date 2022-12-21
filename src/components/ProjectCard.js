import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';

function ProjectCard(props) {
  const project = props.project
  console.log(project);

  return (

    <Col>
      <Card>
        <a href={project.link}>
          <Card.Img src={project.img} />
          <Card.Body>
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>
              {project.text}
            </Card.Text>
          </Card.Body>
        </a>
      </Card>
    </Col>
  );
}

export default ProjectCard;