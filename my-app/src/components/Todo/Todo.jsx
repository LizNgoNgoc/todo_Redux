import styles from './todo.module.css'
import { useEffect, useState } from 'react';
import api from '../../service/api';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../redux/slices/Todo';


function Todo({setToggle}) {

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
            return   <div className={styles.label_cont}>
                <input type="checkbox" id={todo._id}/>
                <label htmlFor="task5" className={styles.inputs_text}>{todo.title}</label>
            </div>  
            })}
                <div className={styles.label_cont}>
                    <input type="checkbox" id='task'/>
                    <label htmlFor="task" className={styles.inputs_text}>Cook Rice and Chicken at 10 am</label>
                </div>
                <div className={styles.label_cont}>
                    <input type="checkbox" id='task2'/>
                    <label htmlFor="task2" className={styles.inputs_text}>Learn Reactjs at 12 pm</label>
                </div>
                <div className={styles.label_cont}>
                    <input type="checkbox" id='task3'/>
                    <label htmlFor="task3" className={styles.inputs_text}>Have Launch  at 1pm</label>
                </div>
                <div className={styles.label_cont}>
                    <input type="checkbox" id='task4'/>
                    <label htmlFor="task4" className={styles.inputs_text}>Learn HTML and CSS at 3pm</label>
                </div>
                <div className={styles.label_cont}>
                    <input type="checkbox" id='task5'/>
                    <label htmlFor="task5" className={styles.inputs_text}>Have Dinner at 8pm</label>
                </div>  
            </div>
        </div>
    </section>
}

export default Todo;