import styles from './header.module.css';
import Avatar from '../../custom/Avatar';
import Logout from '../../components/Logout/Logout';
import ModalBtn from '../../custom/ModalBtn';
import { useSelector } from 'react-redux';


function Header() {
    const user = useSelector(state => state.userSlice)
    return <div className={styles.header_container}>
    <Avatar/>
    <h3 className={styles.header}>{`Welcome, ${user.name}!`}</h3>
    <Logout/>
    <ModalBtn/>
</div>
}

export default Header