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
    const modal = useSelector(state => state.modalName)
    const dispatch = useDispatch()

    // function getModal(e){
    //     e.preventDefault()
    //         .then((modal) => {
    //             dispatch(modalName(true))
    //         })
    // } 

    return  <button className={styles.modal} onClick={getModal}
    /* {setSettingModal({str : 'Edit your name', function :  api.apiUpdateName.bind(api), attr : 'name'})}*/>
        <img src="./images/icons8-popup-50.png" alt="" />
    </button>
}

export default ModalBtn