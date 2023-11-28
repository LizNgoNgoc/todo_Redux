import styles from './dashboard.module.css';
import Todos from '../../components/Todos/Todos';
import { useSelector } from 'react-redux';
import {  useEffect, useState } from 'react';
import Form from '../../components/Form/Form';
import Logout from '../../components/Logout/Logout';
import ModalWindow from '../../components/ModalWindow/ModalWindow';
import UploadAvatar from '../../components/Avatar/UploadAvatar';
import api from '../../service/api';


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
                <div className={styles.edit} onClick={() => {
                    setModalActive(true); 
                    setSettingModal({str : 'Edit your avatar link', function : api.apiUpdateAvatar.bind(api), attr: 'avatar',})}}>Edit</div>
                <img src={user.avatar || './images/Ellipse 11.png'} className={styles.img} alt="img"/>
            </div>   
            <h3 className={styles.header}>{`Welcome, ${user.name}!`}</h3>
            <button className={styles.modal} onClick={() => {
                setModalActive(true); 
                setSettingModal({str : 'Edit your name', function :  api.apiUpdateName.bind(api), attr : 'name'})}}>
                <img src="./images/icons8-popup-50.png" alt="" />
            </button>
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