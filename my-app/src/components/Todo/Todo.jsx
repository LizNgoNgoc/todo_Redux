import styles from './todo.module.css';
import api from '../../service/api';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; //*
import { sendTodoId } from '../../redux/slices/Form'; //*
import { checkClick } from '../../redux/slices/Func';



export default function Todo({todo, setToggle}) {

    const [task, setTask] = useState(todo)
    //const [click, setClick] = useState(false)

    const dispatch = useDispatch() //*
   
    const onCheckClick = (e) => {
        const checked = e.target.checked
        setTask({...task, completed : checked})
        api.apiChecked(task)
            .then((data) => setTask(data))
    }

    return <div className={styles.label_cont}>
        <input type="checkbox" checked={task.completed} className={styles.inputs_text} onChange={onCheckClick}/>
        <button className={styles.btn} /*onClick={() => setClick(!click)}*/ onClick={()=> dispatch(checkClick(true))}>Down</button>
        <button className={styles.btn_del}></button>
        <label className={styles.inputs_text}>{todo.title}</label>
        <p className={styles.inputs_text}>{`Date: ${todo.dayWeek}`}</p>
        <div className={`${styles.description} ${/*click*/ dispatch(checkClick(true)) ? '' : styles.none }`}>
            <p className={styles.inputs_text}>{`Description: ${todo.description}`}</p>
        </div>
        <button onClick={() => {
            dispatch(sendTodoId(todo))
            setToggle(true)
        }} className={styles.editBtn}>Edit</button>
    </div>  
}


