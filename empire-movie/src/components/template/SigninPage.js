"use client"

import { useState } from "react";
import styles from "./SigninPage.module.css"
import { signIn } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Toast from "../module/Toast";
import Loader from "../module/Loader";
import 'react-toastify/dist/ReactToastify.css';

function SigninPage() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loadeing, setLoading] = useState(false)

    const router = useRouter();


    const signinHandler = async (e) => {
        e.preventDefault();
        console.log(email, password);
        setLoading(true);
        const res = await signIn("credentials",
            {
                email,
                password,
                redirect: false
            })
        setLoading(false);
        if (res.error) {
            toast.error(res.error, {
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
        } else {
            toast.success("You have successfully logged in", {
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
            router.push("/");
        }
    }


    return (
        <div className={styles.login_container}>
            <div className={styles.gray2}></div>
            {/* <Topbar gradiant={true}/> */}
            <Toast />
            <div className={styles.login_form}>
                <label htmlFor="signIn" className={styles.form_label}>Log In</label>
                <form action="signIn" className={styles.signin_form}>
                    <input className={styles.login_input} type="text" placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
                    <input className={styles.login_input} type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />

                    <div className={styles.loader}>
                        {loadeing ? <Loader /> : <button className={styles.login_user} onClick={signinHandler}>Log In</button>}
                    </div>
                </form>
            </div>
            <div className={styles.top_footer}></div>
            {/* <Footer/> */}
        </div>
    )
}

export default SigninPage
