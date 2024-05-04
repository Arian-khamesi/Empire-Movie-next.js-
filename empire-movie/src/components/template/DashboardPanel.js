"use client"

import styles from "./DashboardPanel.module.css"
import { toast } from 'react-toastify';
import Toast from "../module/Toast"
import 'react-toastify/dist/ReactToastify.css';

function DashboardPanel() {

const editHandler=(e)=>{
  e.preventDefault()
  console.log("edit");
  toast.warn('Sorry, this part of the site is under development', {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    // transition: Bounce,
});
}


  return (
    <div className={styles.account_panel}>
        {/* <img src="/images/users/user-1.jpg" alt=""  className={styles.user_Photo}/> */}
        <div className={styles.user_panel_form}>
        <Toast />
          <form action="" className={styles.account_form}>
            <input className={styles.user_panel_input} type="text" placeholder='Full Name' />
            <input className={styles.user_panel_input} type="text" placeholder='UserName' />
            <input className={styles.user_panel_input} type="text" placeholder='Email' />
            <input className={styles.user_panel_input} type="number" placeholder='Age' min={8} max={150} />
            <input className={styles.user_panel_input} type="password" placeholder='Password' />
            <input className={styles.user_panel_input} type="password" placeholder='Confirm Password' />
            <button className={styles.user_panel_user} onClick={editHandler}>Edit</button>
          </form>
        </div>
      </div>
  )
}

export default DashboardPanel
