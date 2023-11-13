import styles from './todo.module.css';
import api from '../../service/api';
import { useDispatch, useSelector } from 'react-redux'; //*
import { sendTodoId } from '../../redux/slices/Form'; //*
import { completedTask, editTask, deleteTodo } from '../../redux/slices/Todo';
import { useState } from 'react';



export default function Todo({todo, setToggle}) {


    const [viewState, setViewState] = useState(false)

    const dispatch = useDispatch()
   
    const onCheckClick = (e) => {
        const checked = e.target.checked
        dispatch(completedTask({_id : todo._id, checked}))
        api.apiChecked(todo)
            .then((data) => dispatch(editTask(data)))
    }

    function editBtnAction () {
        dispatch(sendTodoId(todo))
        setToggle(true)
    }

    function deleteTask() {
        dispatch(deleteTodo(todo._id))
        api.apiDeleteTodo(todo._id)
    }

    return <div className={styles.label_cont}>
        <input type="checkbox" checked={todo.completed} className={styles.input} onChange={onCheckClick}/>


        <button className={styles.btn_del}onClick={deleteTask}></button>

        <label className={styles.inputs_text}>{`Task: ${todo.title}`}</label>
        <p className={styles.inputs_text}>{`Date: ${todo.dayWeek}`}</p>
        <div className={`${styles.description} ${viewState ? '' : styles.none }`}>
            <p className={styles.inputs_text}>{`Description: ${todo.description}`}</p>
        </div>

        <button className={styles.btn} onClick={()=> setViewState(!viewState)}>View</button>
        <button onClick={editBtnAction} className={styles.editBtn}>Edit</button>

    </div>  
}


