import styles from './header.module.css';
import Avatar from '../../custom/Avatar';
import Logout from '../../components/Logout/Logout';
import ModalBtn from '../../custom/ModalBtn';
import { useSelector, useDispatch } from 'react-redux';
import ToggleButton from '../ToggleButton/ToggleButton';
import Point from '../../custom/Point';
import { visibleHeight } from '../../redux/slices/Func';

function Header() {
    const user = useSelector(state => state.userSlice)
    const theme = useSelector(state => state.funcSlice.darkTheme)
    const dispatch = useDispatch()

    function visibleContent() {
        dispatch(visibleHeight(true))
    }
    return <div className={`${styles.header_container} ${theme && styles.dark}`}>
        <div className={styles.visible}>
            <Avatar/>
            <h3 className={styles.header}>{`Welcome, ${user.name}!`}</h3>
            <Logout/>
            <ModalBtn/>
        </div>
        <Point/>
        <ToggleButton/>
    </div>
}

export default Header