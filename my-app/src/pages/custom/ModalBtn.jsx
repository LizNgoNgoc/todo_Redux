import styles from './custom.module.css'
import { useState } from 'react';
import api from '../../service/api';

function ModalBtn() {
    const[modalActive, setModalActive] = useState(false)
    const [settingModal, setSettingModal] = useState({
        str : '',
        function : null
    })
    
    return  <button className={styles.modal} onClick={() => {
        setModalActive(true); 
        setSettingModal({str : 'Edit your name', function :  api.apiUpdateName.bind(api), attr : 'name'})}}>
        <img src="./images/icons8-popup-50.png" alt="" />
    </button>
}

export default ModalBtn