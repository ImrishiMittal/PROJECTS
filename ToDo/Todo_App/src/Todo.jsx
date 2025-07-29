import styles from "./Todo.module.css";
import Task from "./Task";
import List from "./List";

function Todo() {
  return (
    <div className={styles.container}>
      <h1 className={styles.Apphead}>TODO</h1>
      <List />
    </div>
  );
}

export default Todo;
