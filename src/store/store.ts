import {makeAutoObservable} from "mobx";

class Store {
    tasks: {id: number, text: string, completed: boolean}[] = [
        {id: 1, text: "Начать выполнять тестовое задание Априкод", completed: true},
        {id: 2, text: "Залить на GitHub", completed: true},
        {id: 3, text: "Отправить на проверку", completed: true},
        {id: 4, text: "Получить одобрение", completed: false}
    ]

    sort: number = 0

    constructor() {
        makeAutoObservable(this)
    }

    addTask(task: string) {
        this.tasks.push({
            id: this.tasks.length+1,
            text: task,
            completed: false
        })
    }

    removeTask (id: number) {
        this.tasks = this.tasks.filter(task => task.id !== id)
    }

    completeTask (id: number) {
        this.tasks = this.tasks.map(task => task.id === id ?
            {...task, completed: !task.completed} :
        task)
    }

    setSort (index: number) {
        this.sort = index
        console.log(this.sort)
    }
}

export default new Store()