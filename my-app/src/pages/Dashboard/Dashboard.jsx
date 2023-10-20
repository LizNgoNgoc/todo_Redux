import styles from './dashboard.module.css';
import Todos from '../../components/Todos/Todos';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import Form from '../../components/Form/Form';
import api from '../../service/api';
import { addUser, userLogout } from '../../redux/slices/User';
import { useNavigate } from 'react-router-dom';

function Dashboard () {
    
    const [toggle, setToggle] = useState(false)
    const Navigate = useNavigate()
    const user = useSelector(state => state.userSlice)
    const dispatch = useDispatch()
    const logout = (e) => {
        api.apiLogout()
            .then((responce) => {
                if(responce.ok){
                    dispatch(userLogout())
                    Navigate('/signIn')
                }
            })
    }
    
    useEffect(()=>{
        api.apiForm()
        .then((data)=>{
            dispatch(addUser(data))
            console.log(user)
        })
    },[])

    return <section className={styles.dashboard}>
        <div className={styles.logout_cont}>
            <button className={styles.logout} onClick={logout}>Logout</button>
        </div>
        <div className={styles.header_container}>
            <img src="./images/Ellipse 11.png" className={styles.img} alt="img" />
            <h3 className={styles.header}>{`Welcome, ${user.name}!`}</h3>
        </div>
        <div className={styles.date_container}>
            <p className={styles.txt}>Good Afternoon</p>
            <p className={styles.date_num}>{}</p>
        </div>
        <div className={styles.todo_container}>
            <h3 className={styles.todo_header}>Tasks List</h3>

            {toggle ? <Form setToggle={setToggle} /> : <Todos setToggle={setToggle} />}
           
        </div>
    </section>
}

export default Dashboard