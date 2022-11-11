import styles from "./styles.module.sass"
import Task from "../task/Task";
import Sort from "../sort/sort";
import React, {useState} from "react";

const Tasks: React.FC = () => {

    interface ITask {id: string, text: string, completed: boolean}

    const [tasks, setTasks] = useState <ITask[]>([
        {id: '1', text: "Начать выполнять тестовое задание Априкод", completed: true},
        {id: '2', text: "Залить на GitHub", completed: true},
        {id: '3', text: "Отправить на проверку", completed: true},
        {id: '4', text: "Получить одобрение", completed: false}
    ])

    const [sort, setSort] = useState(0)
    console.log(tasks)
    const addTask = (task: string) => {
        let textValue = new Set
        tasks.forEach((item) => textValue.add(item.text))
        let arrValue = [...textValue]
        if (arrValue.includes(task)) {
            alert('Задача дублируется!')
        } else {
            setTasks([...tasks, {
                id: task+`${tasks.length}`,
                text: task,
                completed: false
            }])
        }

    }

    const removeTask = (id: string) => {
        setTasks(tasks.filter(task => task.id !== id))
    }

    const completeTask = (id: string) => {
        setTasks(tasks.map(task => task.id === id ?
            {...task, completed: !task.completed} :
            task))
    }

    const sortedTasks = sort === 0 ?
        tasks :
        sort === 1 ?
            tasks.filter((task) => task.completed) :
            tasks.filter((task) => !task.completed)

    return (
        <div className={styles.todo}>
            <Sort sort={sort} setSort={setSort}/>
            {sortedTasks.map(task =>
                <div className={styles.tasks} key={task.id}>
                    <div className={styles.task}>
                        <input type="checkbox" checked={task.completed} onChange={() => completeTask(task.id)}/>
                        {task.text}
                    </div>
                    <button className={styles.button} onClick={() => removeTask(task.id)}>Удалить задачу</button>
                </div>
            )}
            <Task addTask={addTask}/>
        </div>
    )
}

export default Tasks