import styles from './form.module.css'
import { useEffect, useState } from 'react'
import api from '../../service/api'
import { useSelector, useDispatch } from 'react-redux';




function Form({setToggle}) {
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState({
        name: '',
        time: '',
        date: '',
        description: ''
    })

    const getData = useSelector((state) => state.todoSlice.todos)
    const dispatch = useDispatch()

    useEffect(() => {
        api.apiTodos()
            .then(todos => {
                setTodos(todos)})
    }, [])

    function handleChange({target}) {
        const {name, value} = target
        setInput({...input, [name] : value})
        
    }
    
    function getInputValues(e) {
        e.preventDefault()
            api.todoCreate(input)
            .then({todo}) => {
                dispatch()
            }
        console.log(input)
    }
    
    return <div className={styles.container}> 
        <button className={styles.btn_task} onClick={() => {setToggle(true)}}></button>
        <form onSubmit={getInputValues}>
            <input type="text" name='name' placeholder="Header" onChange={handleChange} className={styles.inp}/>
            <input type="time" name='time' placeholder="Time" onChange={handleChange} className={styles.inp}/>
            <input type="date" name='date' placeholder="Day" onChange={handleChange} className={styles.inp}/>
            <input type="text" name='description' placeholder="Description" onChange={handleChange} className={styles.inp}/>
            <button className={styles.create_btn}>Create</button>
        </form>
    </div>
   
}

export default Form;