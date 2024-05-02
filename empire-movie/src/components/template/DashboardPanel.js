import styles from "./DashboardPanel.module.css"

function DashboardPanel() {
  return (
    <div className={styles.account_panel}>
        {/* <img src="/images/users/user-1.jpg" alt=""  className={styles.user_Photo}/> */}
        <div className={styles.user_panel_form}>
          <form action="" className={styles.account_form}>
            <input className={styles.user_panel_input} type="text" placeholder='Full Name' />
            <input className={styles.user_panel_input} type="text" placeholder='UserName' />
            <input className={styles.user_panel_input} type="text" placeholder='Email' />
            <input className={styles.user_panel_input} type="number" placeholder='Age' min={8} max={150} />
            <input className={styles.user_panel_input} type="password" placeholder='Password' />
            <input className={styles.user_panel_input} type="password" placeholder='Confirm Password' />
            <button className={styles.user_panel_user}>Sign Up</button>
          </form>
        </div>
      </div>
  )
}

export default DashboardPanel
