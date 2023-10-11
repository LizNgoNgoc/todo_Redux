import styles from './dashboard.module.css';
import Todo from '../../components/Todo/Todo';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Form from '../../components/Form/Form';


function Dashboard () {
    
    const [toggle, setToggle] = useState(false)


    return <section className={styles.dashboard}>
        <div className={styles.header_container}>
            <img src="./images/Ellipse 11.png" className={styles.img} alt="img" />
            <h3 className={styles.header}>Welcome, Oliva Grace</h3>
        </div>
      
        <div className={styles.date_container}>
            <p className={styles.txt}>Good Afternoon</p>
            <p className={styles.date_num}>{}</p>
        </div>
        <div className={styles.todo_container}>
            <h3 className={styles.todo_header}>Tasks List</h3>

            {toggle ? <Form setToggle={setToggle} /> : <Todo setToggle={setToggle} />}
           
        </div>
    </section>
}

export default Dashboard