import { useState } from "react";
import Task from "./Task";
import styles from "./Todo.module.css";
import { MdModeEdit, MdDelete, MdOutlineDoneOutline } from "react-icons/md";
import { VscClearAll } from "react-icons/vsc";

function List() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (text) => {
    setTasks([...tasks, { id: Date.now(), text, done: false }]);
  };

  const handleToggleDone = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    ));
  };

  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleEdit = (id) => {
    const newText = prompt("Edit your task:");
    if (newText) {
      setTasks(tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      ));
    }
  };

  const handleClearAll = () => {
    setTasks([]);
  };

  return (
    <div className={styles.List}>
      <h3 className={styles.h3}>YOUR TASKS</h3>
      <Task onAdd={handleAddTask} />
      
      <ul className={styles.taskList}>
        {tasks.map((task) => (
          <li key={task.id} className={styles.taskItem}>
            <span
             className={`${styles.task} ${task.done ? styles.done : ""}`}

              onClick={() => handleToggleDone(task.id)}
            >
              {task.text}
            </span>
            <button className={styles.edit} onClick={() => handleEdit(task.id)}><MdModeEdit /></button>
            <button className={styles.delete} onClick={() => handleDelete(task.id)}><MdDelete /></button>
            <button className={styles.Done} onClick={() => handleToggleDone(task.id)}>
              {task.done ? "Undo" : <MdOutlineDoneOutline />}
            </button>
          </li>
        ))}
      </ul>
      {tasks.length > 0 && (
        <button className={styles.clearBtn} onClick={handleClearAll}>
          <VscClearAll /> Clear All
        </button>
      )}
    </div>
  );
}

export default List;
