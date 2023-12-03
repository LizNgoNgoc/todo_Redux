import styles from './header.module.css';
import Avatar from '../../custom/Avatar';
import Logout from '../../components/Logout/Logout';
import { useState } from 'react';
import { useSelector } from 'react-redux';

function Header() {
    const [modalActive, setModalActive] = useState(false)
    const user = useSelector(state => state.userSlice)

    return <div className={styles.header_container}>
    <Avatar setModalActive={setModalActive}/>
    <h3 className={styles.header}>{`Welcome, ${user.name}!`}</h3>
    <Logout/>
</div>
}

export default Header