/* eslint-disable react/prop-types */
import 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, toggleTask, deleteTask }) => {
  return (
    <ul className="list-unstyled">
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default TodoList;
