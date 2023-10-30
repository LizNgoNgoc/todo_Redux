import styles from './todo.module.css';
import api from '../../service/api';
import { useEffect, useState } from 'react';
import { formSlice } from '../../redux/slices/Form'; //*
import { useDispatch, useSelector } from 'react-redux'; //*
import { editTask } from '../../redux/slices/Todo'; //*
import { sendTodoId } from '../../redux/slices/Form'; //*



export default function Todo({todo, setToggle}) {

    const [task, setTask] = useState(todo)
    const [click, setClick] = useState(false)

    const dispatch = useDispatch() //*
   
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
        <button onClick={() => {
            dispatch(sendTodoId(todo))
            setToggle(true)
        }} className={styles.editBtn}>Edit</button>
    </div>  
}


