import styles from './dashboard.module.css';
import Todos from '../../components/Todos/Todos';
import { useSelector } from 'react-redux';
import {  useState } from 'react';
import Form from '../../components/Form/Form';
import Logout from '../../components/Logout/Logout';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import UploadAvatar from '../../components/Avatar/UploadAvatar';


function Dashboard () {
    const[modalActive, setModalActive] = useState(true)
    
    const [toggle, setToggle] = useState(false)
    const user = useSelector(state => state.userSlice)
    
    return <section className={styles.dashboard}>
        <div className={styles.header_container}>
            {/* <ModalWindow active={modalActive} setActive={setModalActive}/> */}
            {/* <img src="./images/Ellipse 11.png" className={styles.img} alt="img" /> */}
            <UploadAvatar />
            <h3 className={styles.header}>{`Welcome, ${user.name}!`}</h3>
            <button className={styles.modal} onClick={() => setModalActive(false)}>Modal</button>
            <Logout />
        </div>
        <div className={styles.date_container}>
            <p className={styles.txt}>Good Afternoon</p>
            <p className={styles.date_num}>{}</p>
        </div>
        <div className={styles.todo_container}>
            {toggle ? <Form setToggle={setToggle}/> : <Todos setToggle={setToggle} />}
        </div>
    </section>
}

export default Dashboard