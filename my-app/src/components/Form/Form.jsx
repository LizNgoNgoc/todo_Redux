import styles from './form.module.css'
import { useEffect, useState } from 'react'
import api from '../../service/api'




function Form({setToggle}) {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        api.apiTodos()
            .then(todos => {
                setTodos(todos)})
    }, [])
    
    
    
    return <div className={styles.container}> 
        <form>
            <button className={styles.btn_task} onClick={() => {setToggle(true)}}></button>
            {todos.map(todo => {
            return <div><input type="text" placeholder="Header" className={styles.inp}/>
            <input type="time" placeholder="Time" className={styles.inp}/>
            <input type="date" placeholder="Day" className={styles.inp}/>
            <input type="text" placeholder="Description" className={styles.inp}/>
            </div>
        })}
        </form>
    </div>
   
}

export default Form;