import  { useState, useEffect } from "react";
import { Container, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import db from "../firebase";
import { collection, onSnapshot } from "firebase/firestore";

const IndexPage = () => {
  const [projects, setProjects] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "projects"), (snapshot) => {
      const projectsData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProjects(projectsData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Container>
      <h1>Project Dashboard</h1>
      <Button color="primary" onClick={() => navigate("/add-project")} style={{ marginBottom: "20px" }}>
        Add New Project
      </Button>
      <div>
        {projects.length > 0 ? (
          <ul>
            {projects.map((project) => (
              <li key={project.id}>
                <strong>{project.title}</strong>
                <p>{project.description}</p>
                <small>Tech Stack: {project.techStack}</small>
              </li>
            ))}
          </ul>
        ) : (
          <p>No projects found. Click &quot;Add New Project&quot; to get started!</p>
        )}
      </div>
    </Container>
  );
};

export default IndexPage;
