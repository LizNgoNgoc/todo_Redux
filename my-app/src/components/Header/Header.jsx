import styles from './header.module.css';
import Avatar from '../../custom/Avatar';
import Logout from '../../components/Logout/Logout';
import ModalBtn from '../../custom/ModalBtn';
import { useSelector } from 'react-redux';
import ToggleButton from '../ToggleButton/ToggleButton';
import Point from '../../custom/Point';


function Header() {
    const user = useSelector(state => state.userSlice)
    const theme = useSelector(state => state.funcSlice.darkTheme)
    const visibleCont = useSelector(state => state.funcSlice.visibleHeight)
    

    
    return <div className={`${styles.header_container} ${theme && styles.dark} ${visibleCont && styles.scroll_header_container}`}>
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