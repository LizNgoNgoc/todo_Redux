import styles from './dashboard.module.css';
import Todos from '../../components/Todos/Todos';
import { useSelector } from 'react-redux';
import {  useEffect, useState } from 'react';
import Form from '../../components/Form/Form';
import Logout from '../../components/Logout/Logout';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import UploadAvatar from '../../components/Avatar/UploadAvatar';
import api from '../../service/api';
import Greeting from '../custom/Greeting';
import Edit from '../custom/Edit';
import ModalBtn from '../custom/ModalBtn';

function Dashboard () {
    const[modalActive, setModalActive] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [settingModal, setSettingModal] = useState({
        str : '',
        function : null
    })
    const user = useSelector(state => state.userSlice)
    console.log(user);
    return <section className={styles.dashboard}>
        <div className={styles.header_container}>
            {modalActive && <ModalWindow setActive={setModalActive} setting={settingModal}/>}
            <div className={styles.avatar}>
               <Edit />
                <img src={user.avatar || './images/972302.png'} className={styles.img} alt="img"/>
            </div>   
            <h3 className={styles.header}>{`Welcome, ${user.name}!`}</h3>
           <ModalBtn />
           <Logout />
        </div>
            <Greeting />
        <div className={styles.todo_container}>
            {toggle ? <Form setToggle={setToggle}/> : <Todos setToggle={setToggle} />}
        </div>
    </section>
}

export default Dashboard