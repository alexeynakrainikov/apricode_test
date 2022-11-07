import React, {useState} from 'react';
import store from "../../store/store";
import styles from "./styles.module.sass"

const Sort = () => {

    const sortOptions = ["Все", "Выполненные", "Не выполненные"]
    const [isOpen, setOpen] = useState(false)

    return (
        <div className={styles.sort}>
            <div className={styles.sort__label}>
                <b>Сортировка по:</b>
                <span onClick={() => {
                    setOpen(!isOpen)
                }}>{sortOptions[store.sort]}</span>
            </div>
            {isOpen &&
                <div className={styles.sort__popup}>
                    <ul>
                        {
                            sortOptions.map((option: string) =>
                                <li key={option} onClick={() => {
                                    store.setSort(sortOptions.indexOf(option))
                                    setOpen(!isOpen)
                                }
                                } className={store.sort === sortOptions.indexOf(option) ? "active" : ""}>{option}</li>
                            )
                        }
                    </ul>
                </div>
            }
        </div>
    );
}

export default Sort;