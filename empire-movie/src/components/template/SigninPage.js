import styles from "./SigninPage.module.css"

function SigninPage() {
    return (
        <div className={styles.login_container}>
            <div className={styles.gray2}></div>
            {/* <Topbar gradiant={true}/> */}
            <div className={styles.login_form}>
                <label htmlFor="signIn" className={styles.form_label}>Log In</label>
                <form action="signIn" className={styles.signin_form}>
                    <input className={styles.login_input} type="text" placeholder='UserName' />
                    <input className={styles.login_input} type="password" placeholder='Password' />
                    <button className={styles.login_user}>Log In</button>
                </form>
            </div>
            <div className={styles.top_footer}></div>
            {/* <Footer/> */}
        </div>
    )
}

export default SigninPage
