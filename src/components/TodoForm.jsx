/* eslint-disable react/prop-types */
import  { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, Row, Col } from 'reactstrap';

const TodoForm = ({ addTask }) => {
  const [task, setTask] = useState('');
  const [project, setProject] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask({
        text: task,
        project,
        startDate,
        endDate,
        completed: false,
      });
      setTask('');
      setProject('');
      setStartDate('');
      setEndDate('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-4">
      <Row form>
        <Col md={4}>
          <FormGroup>
            <Label for="task">Task</Label>
            <Input
              type="text"
              id="task"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              placeholder="Enter a task"
            />
          </FormGroup>
        </Col>
        <Col md={3}>
          <FormGroup>
            <Label for="project">Project</Label>
            <Input
              type="text"
              id="project"
              value={project}
              onChange={(e) => setProject(e.target.value)}
              placeholder="Project name"
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="startDate">Start Date</Label>
            <Input
              type="date"
              id="startDate"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={2}>
          <FormGroup>
            <Label for="endDate">End Date</Label>
            <Input
              type="date"
              id="endDate"
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </FormGroup>
        </Col>
        <Col md={1} className="d-flex align-items-end">
          <Button color="primary" type="submit">Add</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default TodoForm;
