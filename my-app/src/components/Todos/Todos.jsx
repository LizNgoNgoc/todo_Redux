import styles from './todos.module.css'
import { useEffect, useState } from 'react';
import api from '../../service/api';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../redux/slices/Todo';
import Todo from '../Todo/Todo';

function Todos({setToggle}) {


    const todos = useSelector((state) => state.todoSlice.todos)
    const dispatch = useDispatch()
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
                    return <Todo key={todo._id} setToggle={setToggle} todo={todo}/>
                })}
            </div>
        </div>
    </section>
}

export default Todos;