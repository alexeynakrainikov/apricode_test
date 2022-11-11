import React, {useState} from 'react';
import styles from "./styles.module.sass"

const Sort: React.FC<{sort:number, setSort:(sort:number) => void}> = ({sort, setSort}) => {

    const sortOptions = ["Все", "Выполненные", "Не выполненные"]
    const [isOpen, setOpen] = useState(false)

    return (
        <div className={styles.sort}>
            <div className={styles.sort__label}>
                <b>Сортировка по:</b>
                <span onClick={() => {
                    setOpen(!isOpen)
                }}>{sortOptions[sort]}</span>
            </div>
            {isOpen &&
                <div className={styles.sort__popup}>
                    <ul>
                        {
                            sortOptions.map((option: string) =>
                                <li key={option} onClick={() => {
                                    setSort(sortOptions.indexOf(option))
                                    setOpen(!isOpen)
                                }
                                } className={sort === sortOptions.indexOf(option) ? "active" : ""}>{option}</li>
                            )
                        }
                    </ul>
                </div>
            }
        </div>
    );
}

export default Sort;