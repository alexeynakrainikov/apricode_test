import styles from "./styles.module.sass"
import Task from "../task/Task";
import {observer} from "mobx-react";
import store from "../../store/store";
import Sort from "../sort/sort";

const Tasks = observer(() => {

    const sortedTasks = store.sort === 0 ?
        store.tasks :
        store.sort === 1 ?
            store.tasks.filter((task) => task.completed) :
            store.tasks.filter((task) => !task.completed)
    return (
        <div className={styles.todo}>
            <Sort/>
            {sortedTasks.map(task =>
                <div className={styles.tasks} key={task.id}>
                    <div className={styles.task}>
                        <input type="checkbox" checked={task.completed} onChange={() => store.completeTask(task.id)}/>
                        {task.text}
                    </div>
                    <button className={styles.button} onClick={() => store.removeTask(task.id)}>Удалить задачу</button>
                </div>
            )}
            <Task/>
        </div>
    )
})

export default Tasks