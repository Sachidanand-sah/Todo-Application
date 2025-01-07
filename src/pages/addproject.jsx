import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import db from "../firebase";
import {
  collection,
  addDoc,
  onSnapshot,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const AddProject = () => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState({
    id: "",
    title: "",
    description: "",
    techStack: "",
    dueDate: null,
    status: "",
  });
  const [filter, setFilter] = useState("All");

  // Fetching projects from Firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "projects"), (snapshot) => {
      const projectsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectsData);
    });

    return () => unsubscribe();
  }, []);

  // Handling form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject({ ...project, [name]: value });
  };

  // Handling date selection
  const handleDateChange = (date) => {
    setProject({ ...project, dueDate: date });
  };

  // Editing a project
  const handleEdit = (proj) => {
    setProject({
      id: proj.id,
      title: proj.title,
      description: proj.description,
      techStack: proj.techStack,
      dueDate: proj.dueDate ? new Date(proj.dueDate) : null,
      status: proj.status,
    });
  };

  // Adding or updating a project
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (project.id) {
        // Update an existing project
        const projectRef = doc(db, "projects", project.id);
        await updateDoc(projectRef, {
          title: project.title,
          description: project.description,
          techStack: project.techStack,
          dueDate: project.dueDate,
          status: project.status,
        });
        alert("Project updated successfully!");
      } else {
        // Add a new project
        await addDoc(collection(db, "projects"), {
          title: project.title,
          description: project.description,
          techStack: project.techStack,
          dueDate: project.dueDate,
          status: project.status,
        });
        alert("Project added successfully!");
      }
      setProject({
        id: "",
        title: "",
        description: "",
        techStack: "",
        dueDate: null,
        status: "",
      });
    } catch (error) {
      console.error("Error saving project: ", error);
    }
  };

  // Deleting a project
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "projects", id));
      alert("Project deleted successfully!");
    } catch (error) {
      console.error("Error deleting project: ", error);
    }
  };

  // Filtering projects based on status
  const filteredProjects = projects.filter((proj) => {
    if (filter === "All") return true;
    if (filter === "Active") return proj.status === "In Progress";
    if (filter === "Completed") return proj.status === "Completed";
    return false;
  });

  return (
    <Container fluid className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
      <Row>
        <Col md={3} className="bg-light border-end">
          <h4 className="text-center py-3">Project Dashboard</h4>
          <ul className="list-unstyled">
            <li className="py-2 px-3 bg-primary text-white">Add New Project</li>
          </ul>
        </Col>
        <Col md={9}>
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3>All Projects</h3>
          </div>

          <div className="mb-3">
            <Button
              color={filter === "All" ? "primary" : "secondary"}
              onClick={() => setFilter("All")}
              className="me-2"
            >
              All
            </Button>
            <Button
              color={filter === "Active" ? "primary" : "secondary"}
              onClick={() => setFilter("Active")}
              className="me-2"
            >
              Active
            </Button>
            <Button
              color={filter === "Completed" ? "primary" : "secondary"}
              onClick={() => setFilter("Completed")}
            >
              Completed
            </Button>
          </div>

          <Table bordered>
            <thead className="bg-light">
              <tr>
                <th>Project Title</th>
                <th>Tech Stack</th>
                <th>Status</th>
                <th>Due Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredProjects.map((proj) => (
                <tr key={proj.id}>
                  <td>{proj.title}</td>
                  <td>{proj.techStack}</td>
                  <td>{proj.status}</td>
                  <td>{proj.dueDate ? new Date(proj.dueDate).toLocaleDateString() : "N/A"}</td>
                  <td>
                    <Button
                      color="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => handleEdit(proj)}
                    >
                      <FaEdit />
                    </Button>
                    <Button
                      color="danger"
                      size="sm"
                      onClick={() => handleDelete(proj.id)}
                    >
                      <FaTrash />
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <Form onSubmit={handleSubmit} className="mt-4">
            <h5>{project.id ? "Edit Project" : "Add New Project"}</h5>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="title">Project Title</Label>
                  <Input
                    type="text"
                    name="title"
                    id="title"
                    value={project.title}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="techStack">Technology Stack</Label>
                  <Input
                    type="text"
                    name="techStack"
                    id="techStack"
                    value={project.techStack}
                    onChange={handleChange}
                    required
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="dueDate">Due Date</Label>
                  <DatePicker
                    selected={project.dueDate}
                    onChange={handleDateChange}
                    dateFormat="yyyy/MM/dd"
                    className="form-control"
                    placeholderText="Select a due date"
                    required
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="status">Status</Label>
                  <Input
                    type="select"
                    name="status"
                    id="status"
                    value={project.status}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Status</option>
                    <option>New</option>
                    <option>In Progress</option>
                    <option>Completed</option>
                    <option>Pending</option>
                  </Input>
                </FormGroup>
              </Col>
            </Row>
            <Button type="submit" color="primary">
              {project.id ? "Update Project" : "Add Project"}
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default AddProject;
