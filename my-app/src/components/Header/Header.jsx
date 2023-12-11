import styles from './header.module.css';
import Avatar from '../../custom/Avatar';
import Logout from '../../components/Logout/Logout';
import ModalBtn from '../../custom/ModalBtn';
import { useSelector } from 'react-redux';
import ToggleButton from '../ToggleButton/ToggleButton';

function Header() {
    const user = useSelector(state => state.userSlice)
    const theme = useSelector(state => state.funcSlice.darkTheme)
    return <div className={`${styles.header_container} ${theme && styles.dark}`}>
        <ToggleButton />
        <Avatar/>
        <h3 className={styles.header}>{`Welcome, ${user.name}!`}</h3>
        <Logout/>
        <ModalBtn/>
    </div>
}

export default Header