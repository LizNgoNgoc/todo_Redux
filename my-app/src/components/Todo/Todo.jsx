import styles from './todo.module.css';
import api from '../../service/api';
import { useState } from 'react';

export default function Todo({todo}) {

    const [task, setTask] = useState(todo)
    const [click, setClick] = useState(false)

    const onCheckClick = (e) => {
        const checked = e.target.checked
        setTask({...task, completed : checked})
        api.apiChecked(task)
            .then((data) => {
                setTask(data)
            })
    }
    
    function handleClick() {
        setClick(!click)
    }

    return <div className={styles.label_cont}>
        <input type="checkbox" checked={task.completed} onChange={onCheckClick}/>
        <button className={styles.btn} onClick={handleClick}>Down</button>
        <label className={styles.inputs_text}>{todo.title}</label>
        <p className={styles.inputs_text}>{`Date: ${todo.dayWeek}`}</p>
        <div className={`${styles.description} ${click ? '' : styles.none }`}>
            <p className={styles.inputs_text}>{`Description: ${todo.description}`}</p>
        </div>
    </div>  
}


