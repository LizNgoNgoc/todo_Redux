import styles from './todo.module.css';
import api from '../../service/api';
import { useState } from 'react';



export default function Todo({todo, setToggle}) {

    const [task, setTask] = useState(todo)
    const [click, setClick] = useState(false)

    const onCheckClick = (e) => {
        const checked = e.target.checked
        setTask({...task, completed : checked})
        api.apiChecked(task)
            .then((data) => setTask(data))
    }

    return <div className={styles.label_cont}>
        <input type="checkbox" checked={task.completed} className={styles.inputs_text} onChange={onCheckClick}/>
        <button className={styles.btn} onClick={() => setClick(!click)}>Down</button>
        <button className={styles.btn_del}></button>
        <label className={styles.inputs_text}>{todo.title}</label>
        <p className={styles.inputs_text}>{`Date: ${todo.dayWeek}`}</p>
        <div className={`${styles.description} ${click ? '' : styles.none }`}>
            <p className={styles.inputs_text}>{`Description: ${todo.description}`}</p>
        </div>
        <button onClick={() => setToggle(true)} className={styles.editBtn}>edit</button>
    </div>  
}


