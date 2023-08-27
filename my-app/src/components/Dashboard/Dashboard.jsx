import styles from './dashboard.module.css';
import Todo from './Todo';

function Dashboard () {
    return <section>
        <div>
            <img></img>
            <h3>Welcome, Oliva Grace</h3>
        </div>
        <div>
            <p>Good Afternoon</p>
            <img src="" alt="" />
        </div>
        <div>
            <h3>Tasks List</h3>
        </div>
        <Todo />
    </section>
}

export default Dashboard