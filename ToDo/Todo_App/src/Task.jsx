import { IoAddCircle } from "react-icons/io5";
import styles from "./Todo.module.css";

function Task({ current_text, update_text, handleAddTask }) {
  return (
    <div className={styles.input}>
      <input
        className={styles.textbox}
        type="text"
        placeholder="ENTER YOUR TASK"
        value={current_text}
        onChange={(e) => update_text(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
      />
      <IoAddCircle className={styles.icon} onClick={handleAddTask} />
    </div>
  );
}

export default Task;
