import { useState } from "react";
import styles from "./Todo.module.css"
import Task from "./Task";
function Todo(){
    return(
        <>
        <h1 className={styles.Apphead}>TODO</h1>
        <Task/>
        </>
    )
}
export default Todo