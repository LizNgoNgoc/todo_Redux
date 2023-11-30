import styles from './custom.module.css'
import { showModal } from '../redux/slices/Func';
import { useDispatch } from 'react-redux';

function ModalBtn({setModalActive}) {
    const dispatch = useDispatch()
    
    function getModal(e){
        setModalActive(true)
        dispatch(showModal({str : 'Edit your name', attr : 'name'}))
    } 

    return  <button className={styles.modal} onClick={getModal}>
        <img src="./images/icons8-popup-50.png" alt="" />
    </button>
}

export default ModalBtn