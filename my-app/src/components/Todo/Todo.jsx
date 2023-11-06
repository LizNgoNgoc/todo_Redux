import styles from './todo.module.css';
import api from '../../service/api';
import { useDispatch, useSelector } from 'react-redux'; //*
import { sendTodoId } from '../../redux/slices/Form'; //*
import { checkClick } from '../../redux/slices/Func';
import { completedTask, editTask } from '../../redux/slices/Todo';



export default function Todo({todo, setToggle}) {

    const view = useSelector(state => state.funcSlice.click)

    const dispatch = useDispatch()
   
    const onCheckClick = (e) => {
        const checked = e.target.checked
        dispatch(completedTask({_id : todo._id, checked}))
        api.apiChecked(todo)
            .then((data) => dispatch(editTask(data)))
    }

    return <div className={styles.label_cont}>
        <input type="checkbox" checked={todo.completed} className={styles.inputs_text} onChange={onCheckClick}/>
        <button className={styles.btn}  onClick={()=> dispatch(checkClick())}>View</button>
        <button className={styles.btn_del}></button>
        <label className={styles.inputs_text}>{todo.title}</label>
        <p className={styles.inputs_text}>{`Date: ${todo.dayWeek}`}</p>
        <div className={`${styles.description} ${view ? '' : styles.none }`}>
            <p className={styles.inputs_text}>{`Description: ${todo.description}`}</p>
        </div>
        <button onClick={() => {
            dispatch(sendTodoId(todo))
            setToggle(true)
        }} className={styles.editBtn}>Edit</button>
    </div>  
}


