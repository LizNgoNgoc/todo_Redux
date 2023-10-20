import styles from './todo.module.css'
import { useEffect, useState } from 'react';
import api from '../../service/api';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../redux/slices/Todo';


function Todo({setToggle}) {
    // const[checkInp, setCheckInp] = useState({})
    // const onCheckClick = (e) => {
    //     if(e.target.checked){
    //         api.apiChecked(checkInp)
    //         .then(({token}) => {
    //             localStorage.setCheckInp('token')
    //             if(token){
    //                 return 
    //               }
    //         })
    //     }
    // }

    const todos = useSelector((state) => state.todoSlice.todos)
    const dispatch = useDispatch()
    console.log(todos);
    useEffect(() => {
        api.apiTodos()
            .then(todos => {
                dispatch(addTodo(todos))})
    }, [])

    return <section className={styles.todo_area}>
        <div className={styles.check_container}>
            <div className={styles.tasks_cont}>
                <p className={styles.tasks_txt}>Tasks List</p>
                <button className={styles.btn_task} onClick={() => setToggle(true)}></button>
            </div>
            <div className={styles.inputs_container}>
                {todos.map(todo => {
                    return <div className={styles.label_cont} key={todo._id}>
                        <input type="checkbox" id={todo._id} onClick={(e) => onCheckClick(e)}/>
                        <label htmlFor="task5" className={styles.inputs_text}>{todo.title}</label>
                    </div>
                })}
            </div>
        </div>
    </section>
}

export default Todo;