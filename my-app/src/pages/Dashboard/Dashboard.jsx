import styles from './dashboard.module.css';
import Greeting from '../../custom/Greeting';
import Header from '../../components/Header/Header';
import TodoContainer from '../../components/TodoContainer/TodoContainer';


function Dashboard () {
    return <section className={styles.dashboard}>
        <Header/>
        <Greeting/>
        <TodoContainer/>
    </section>
}

export default Dashboard