import styles from './dashboard.module.css';
import Todos from '../../components/Todos/Todos';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import Form from '../../components/Form/Form';
import Logout from '../../components/Logout/Logout';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import Greeting from '../../custom/Greeting';
import Avatar from '../../custom/Avatar';
import ModalBtn from '../../custom/ModalBtn';

function Dashboard () {
    const [modalActive, setModalActive] = useState(false)
    const [toggle, setToggle] = useState(false)

    const user = useSelector(state => state.userSlice)
    return <section className={styles.dashboard}>
        <div className={styles.header_container}>
            <Avatar setModalActive={setModalActive}/>
            <h3 className={styles.header}>{`Welcome, ${user.name}!`}</h3>
            <Logout/>
        </div>
        {/* Сделать header отдельный компонентом */}
        {/* <Header /> */}
        <Greeting/>
        {/* Сделать todo_container отдельным компонентом */}
        <div className={styles.todo_container}>
            {toggle ? <Form setToggle={setToggle}/> : <Todos setToggle={setToggle} />}
        </div>
        {modalActive && <ModalWindow setActive={setModalActive}/>}
        <ModalBtn setModalActive={setModalActive} />
    </section>
}

export default Dashboard