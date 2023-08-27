import styles from './dashboard.module.css';
import Todo from './Todo';

function Dashboard () {
    return <section className={styles.dashboard}>
        <div className={styles.header_container}>
            <img src="./images/Ellipse 11.png" className={styles.img} alt="img" />
            <h3 className={styles.header}>Welcome, Oliva Grace</h3>
        </div>
        <div>
            <p className={styles.txt}>Good Afternoon</p>
            <img src="" alt="" />
        </div>
        <div>
            <h3 className={styles.todo_header}>Tasks List</h3>
            <Todo />
        </div>
    </section>
}

export default Dashboard