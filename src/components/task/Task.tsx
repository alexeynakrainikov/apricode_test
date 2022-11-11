import styles from "./styles.module.sass"
import React, {useState} from "react";


const Task: React.FC<{ addTask: (task: string) => void }> = ({addTask}) => {



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
                        inputValue ? addTask(inputValue) : alert("Введите текст задачи!")
                        setInputValue('')
                    }
                    }
            >Добавить задачу
            </button>
        </div>

    )
}

export default Task