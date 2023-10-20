import styles from './todo.module.css';
import api from '../../service/api';
import { useState } from 'react';

export default function Todo({todo}) {

    const [task, setTask] = useState(todo)

    const onCheckClick = (e) => {
        const checked = e.target.checked
        setTask({...task, completed : checked})
        api.apiChecked(task)
            .then((data) => {
                setTask(data)
            })
    }


    return <div className={styles.label_cont}>
        <input type="checkbox" checked={task.completed} onChange={onCheckClick}/>
        <label htmlFor="task5" className={styles.inputs_text}>{todo.title}</label>
    </div>  
}