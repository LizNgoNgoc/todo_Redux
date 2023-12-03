import styles from './dashboard.module.css';
import { useState } from 'react';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import Greeting from '../../custom/Greeting';
import ModalBtn from '../../custom/ModalBtn';
import Header from '../../components/Header/Header';
import TodoContainer from '../../components/TodoContainer/TodoContainer';


function Dashboard () {
    const [modalActive, setModalActive] = useState(false)

    // const user = useSelector(state => state.userSlice)
    return <section className={styles.dashboard}>
        <Header/>
        <Greeting/>
        <TodoContainer/>
        {modalActive && <ModalWindow setActive={setModalActive}/>}
        <ModalBtn setModalActive={setModalActive} />
    </section>
}

export default Dashboard