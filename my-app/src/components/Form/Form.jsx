import styles from './form.module.css'
import { useEffect, useState } from 'react'
import api from '../../service/api'
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from '../../redux/slices/Todo';




function Form({setToggle}) {
    // const [todos, setTodos] = useState([])
    const [input, setInput] = useState({
        name: '',
        time: '',
        date: '',
        description: '',
        completed: false,
    })


    const dispatch = useDispatch()

    useEffect(() => {
        getTodos()
    }, [])

    function getTodos(){
        api.apiTodos()
        .then(todos => {
            dispatch(addTodo(todos))})
    }

    function handleChange({target}) {
        const {name, value} = target
        setInput({...input, [name] : value})
        
    }
    
    function getInputValues(e) {
        e.preventDefault()
        const {name, time, date, description, completed} = input
            api.apiTodoCreate({title : name, time, dayWeek : date, description, completed})
            .then(({todo}) => setToggle(false))
        console.log(input)
    }
    
    return <div className={styles.container}>
        <button className={styles.btn_task} onClick={() => {setToggle(false)}}></button>
        <form onSubmit={getInputValues}>
            <input type="text" name='name' value={input.name} placeholder="Header" onChange={handleChange} className={styles.inp}/>
            <input type="time" name='time' value={input.time} placeholder="Time" onChange={handleChange} className={styles.inp}/>
            <input type="date" name='date' value={input.date} placeholder="Day" onChange={handleChange} className={styles.inp}/>
            <input type="text" name='description' value={input.description} placeholder="Description" onChange={handleChange} className={styles.inp}/>
            <button className={styles.create_btn}>Create</button>
        </form>
    </div>
   
}

export default Form;