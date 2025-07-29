import { useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import styles from "./Todo.module.css";

function Task({ onAdd }) {
  const [currentText, setCurrentText] = useState("");

  const handleAdd = () => {
    if (currentText.trim() !== "") {
      onAdd(currentText);
      setCurrentText("");
    }
  };

  return (
    <div className={styles.inputContainer}>
      <input
        className={styles.textbox}
        type="text"
        placeholder="ENTER YOUR TASK"
        value={currentText}
        onChange={(e) => setCurrentText(e.target.value)}
      />
      <IoAddCircle className={styles.icon} onClick={handleAdd} />
    </div>
  );
}

export default Task;
