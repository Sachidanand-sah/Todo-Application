/* eslint-disable react/prop-types */
import 'react';
import { Button } from 'reactstrap';

const TodoItem = ({ task, toggleTask, deleteTask }) => {
  return (
    <li className="d-flex justify-content-between align-items-center mb-3">
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id, task.completed)}
          className="mr-2"
        />
        <span className={task.completed ? 'text-muted text-decoration-line-through' : ''}>
          {task.text} (Project: {task.project || 'None'})
        </span>
      </div>
      <Button color="danger" size="sm" onClick={() => deleteTask(task.id)}>Delete</Button>
    </li>
  );
};

export default TodoItem;
