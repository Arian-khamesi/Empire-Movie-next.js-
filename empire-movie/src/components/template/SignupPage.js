"use client"

import styles from "./SignupPage.module.css"
import { useForm } from "@/utils/useForm"
import Input from "../module/Input"
import { emailValidator, maxValidator, minValidator, requiredValidator } from "@/app/Validation/rules"
import { useState } from "react"
import Topbar from "../module/Topbar"
import { toast } from 'react-toastify';
import Toast from "../module/Toast"
import 'react-toastify/dist/ReactToastify.css';
import Loader from "../module/Loader"
import { useRouter } from "next/navigation"

function SignupPage() {

    const [userAge, setUserAge] = useState(8)
    const [loadeing, setLoading] = useState(false)
    const router=useRouter()


    const [formState, onInputHandler] = useForm({
        fullname: {
            value: "",
            isValid: false
        },
        username: {
            value: "",
            isValid: false
        },
        email: {
            value: "",
            isValid: false
        },
        password: {
            value: "",
            isValid: false
        },
        confirmPassword: {
            value: "",
            isValid: false
        },
    }, false)

    ///////////////////////////////////////////////////////

    const registerUserHandler = async () => {
        event.preventDefault()
        console.log('user register');
        if (formState.inputs.password.value !== formState.inputs.confirmPassword.value) {
            toast.error('The password and its repetition are not the same', {
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
            return
        }

        const newUser = {
            fullName: formState.inputs.fullname.value,
            userName: formState.inputs.username.value,
            email: formState.inputs.email.value,
            age: userAge,
            password: formState.inputs.password.value,
        }
        console.log(newUser);

        setLoading(true)

        const res = await fetch("/api/auth/signup", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: { "Content-Type": "application/json" },
        })


        const data = await res.json()
        setLoading(false)
        console.log(res);

        if (res.status === 201) {
            toast.success(data.message, {
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
            router.push("/signin");
        } else {
            toast.error(data.error, {
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

    }





    return (
        <div className={styles.register_container}>
            <div className={styles.gray_register}></div>
            {/* <Topbar gradiant={true} /> */}
            <Toast />
            <div className={styles.register_form}>
                <label htmlFor="signIn" className={styles.form_label}>Sign In</label>
                <form action="signIn" className={styles.signin_form}>
                    <Input className={styles.register_input} type="text" placeholder='Full Name' id="fullname"
                        validations={[
                            requiredValidator(),
                            minValidator(6),
                            maxValidator(20),
                            // emailValidator()
                        ]}
                        onInputHandler={onInputHandler} />
                    <Input className={styles.register_input} type="text" placeholder='UserName' id="username"
                        validations={[
                            requiredValidator(),
                            minValidator(5),
                            maxValidator(20),
                            // emailValidator()
                        ]}
                        onInputHandler={onInputHandler} />
                    <Input className={styles.register_input} type="text" placeholder='Email' id="email"
                        validations={[
                            requiredValidator(),
                            minValidator(8),
                            maxValidator(40),
                            emailValidator()
                        ]}
                        onInputHandler={onInputHandler} />
                    <input className={styles.register_input} type="number" placeholder='Age' min={8} max={150} value={userAge} onChange={(event) => setUserAge(event.target.value)} />
                    <Input className={styles.register_input} type="password" placeholder='Password' id="password"
                        validations={[
                            requiredValidator(),
                            minValidator(8),
                            maxValidator(20),
                            // emailValidator()
                        ]}
                        onInputHandler={onInputHandler} />
                    <Input className={styles.register_input} type="password" placeholder='Confirm Password' id="confirmPassword"
                        validations={[
                            requiredValidator(),
                            minValidator(8),
                            maxValidator(20),
                            // emailValidator()
                        ]}
                        onInputHandler={onInputHandler} />
                    <div className={styles.loader}>
                    {loadeing ? <Loader /> : <button className={`${styles.register_user} ${formState.isInputValid ? styles.success_sub : styles.error_sub}`} onClick={registerUserHandler}>Sign Up</button>}
                    </div>

                </form>
            </div>
            <div className={styles.top_footer}></div>
            {/* <Footer /> */}
        </div>
    )
}

export default SignupPage
