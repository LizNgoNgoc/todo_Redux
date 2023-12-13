import styles from './todos.module.css'
import { useEffect, useState } from 'react';
import api from '../../service/api';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../redux/slices/Todo';
import Todo from '../Todo/Todo';
import { sendTodoId } from '../../redux/slices/Form';

function Todos({setToggle}) {
    const theme = useSelector(state => state.funcSlice.darkTheme)

    const todos = useSelector((state) => state.todoSlice.todos)
    const dispatch = useDispatch()
    useEffect(() => {
        api.apiTodos()
            .then(todos => {
                dispatch(addTodo(todos))})
    }, [])
return <section className={`${styles.todo_area} ${theme && styles.dark}`}>
        <div className={styles.check_container}>
            <div className={styles.tasks_cont}>
                <p className={`${styles.tasks_txt} ${theme && styles.dark_txt}`}>Task List</p>
                <button className={styles.btn_task} onClick={() => {
                    dispatch(sendTodoId({}))
                    setToggle(true)}}></button>
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