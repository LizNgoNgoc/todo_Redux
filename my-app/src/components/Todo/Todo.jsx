import styles from './todo.module.css';
import api from '../../service/api';
import { useDispatch, useSelector } from 'react-redux'; //*
import { sendTodoId } from '../../redux/slices/Form'; //*
import { completedTask, editTask, deleteTodo } from '../../redux/slices/Todo';
import { useState } from 'react';
import { useDeleteTodoMutation } from '../../redux/query/task';


export default function Todo({todo, setToggle}) {
    const theme = useSelector(state => state.funcSlice.darkTheme)
    const [apiDeleteTodo, {data, error, isLoading}] = useDeleteTodoMutation()
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
        apiDeleteTodo(todo._id).then(() => {
            dispatch(deleteTodo(todo._id))
        })
    }

    return <div className={`${styles.label_cont} ${theme && styles.dark_label_cont}`}>
        <input type="checkbox" checked={todo.completed} className={styles.input} onChange={onCheckClick}/>


        <button className={`${styles.btn_del} ${theme && styles.dark_btn_del}`} onClick={deleteTask}></button>

        <label className={`${styles.inputs_text} ${theme && styles.dark_inp_txt}`}>{`Task: ${todo.title}`}</label>
        <p className={`${styles.inputs_text} ${theme && styles.dark_inp_txt}`}>{`Date: ${todo.dayWeek}`}</p>
        <div className={`${styles.description} ${viewState ? '' : styles.none }`}>
            <p className={`${styles.inputs_text} ${theme && styles.dark_inp_txt}`}>{`Description: ${todo.description}`}</p>
        </div>
        <div className={styles.container_btn}>
            <button className={styles.btn} onClick={()=> setViewState(!viewState)}>View</button>
            <button onClick={editBtnAction} className={styles.editBtn}>Edit</button>

        </div>
    </div>  
}


