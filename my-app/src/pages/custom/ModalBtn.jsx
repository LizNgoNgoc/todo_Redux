import styles from './custom.module.css'
import { useState } from 'react';
import api from '../../service/api';
import { modalName } from '../../redux/slices/Func';
import { useSelector, useDispatch } from 'react-redux';

function ModalBtn() {
    // const[modalActive, setModalActive] = useState(false)
    const [settingModal, setSettingModal] = useState({
        str : '',
        function : null
    })
    
    const dispatch = useDispatch()

    function getModal(e){
        e.preventDefault()
            .then((user) => {
                dispatch(modalName(true))
            })
            .catch((err) => console.log(err))
    } 

    return  <button className={styles.modal} onClick={() => {
         
        setSettingModal({str : 'Edit your name', function :  api.apiUpdateName.bind(api), attr : 'name'})}}>
        <img src="./images/icons8-popup-50.png" alt="" />
    </button>
}

export default ModalBtn