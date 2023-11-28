import styles from './custom.module.css'
import { useState } from 'react';
import api from '../../service/api';



function Edit() {
    const[modalActive, setModalActive] = useState(false)
    const [settingModal, setSettingModal] = useState({
        str : '',
        function : null
    })

    return  <div className={styles.edit} onClick={() => {
        setModalActive(true); 
        setSettingModal({str : 'Edit your avatar link', function : api.apiUpdateAvatar.bind(api), attr: 'avatar',})}}>Edit</div>
}

export default Edit