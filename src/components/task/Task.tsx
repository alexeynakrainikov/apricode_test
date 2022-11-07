import styles from "./styles.module.sass"
import {observer} from "mobx-react";
import {useState} from "react";
import store from "../../store/store";

const Task = observer(() => {

    const [inputValue, setInputValue] = useState('')

    return (
        <div className={styles.task}>
            <input className={styles.input}
                   value={inputValue}
                   onChange={(event) => setInputValue(event.target.value)
                   }
                   placeholder="Введите текст задачи"/>
            <button className={styles.button}
                    onClick={() => {
                        inputValue ? store.addTask(inputValue) : alert("Введите текст задачи!")
                        setInputValue('')}
            }
            >Добавить задачу</button>
        </div>

    )
})

export default Task