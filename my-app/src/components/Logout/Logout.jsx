import styles from './logout.module.css';
import api from '../../service/api';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { addUser, userLogout } from '../../redux/slices/User';


function Logout() {
    const user = useSelector(state => state.userSlice)
    const Navigate = useNavigate()
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

    return <>
                <button className={styles.logout} onClick={logout}>
                    <img src="./images/icons8-off-50.png" alt="" />
                </button>
            </>
}

export default Logout