"use client"

import { useState } from "react"
import styles from "./DashboardPlayList.module.css"
import TextInput from "../module/TextInput"
import { toast } from 'react-toastify';
import Toast from "../module/Toast"
import 'react-toastify/dist/ReactToastify.css';

function DashboardPlayList() {

    const [ playlistData, setPlaylistData] = useState({
        movieName: "",
        time: "",
        date: "",
        overview: "",
        score: "",
        postre: ""
    })

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(playlistData);
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
        <div className={styles.playlist}>
            <div className={styles.play_list_form_container}>
            <Toast />
                <form action="" className={styles.play_list_form}>
                    <TextInput
                        type={"text"}
                        title={'Movie Name'}
                        name={'Movie Name'}
                        playlistData={playlistData}
                        setPlaylistData={setPlaylistData}
                        className={styles.play_list_input}
                    />
                    <TextInput
                        type={"text"}
                        title={'Time'}
                        name={'Time'}
                        playlistData={playlistData}
                        setPlaylistData={setPlaylistData}
                        className={styles.play_list_input}
                    />
                    <TextInput
                        type={"date"}
                        title={'Date'}
                        name={'Date'}
                        playlistData={playlistData}
                        setPlaylistData={setPlaylistData}
                        className={styles.play_list_input}
                    />
                    <TextInput
                        type={"text"}
                        title={'Overview'}
                        name={'Overview'}
                        playlistData={playlistData}
                        setPlaylistData={setPlaylistData}
                        className={styles.play_list_textArea}
                        textArea={true}
                        min={8} max={150}
                    />
                    <TextInput
                        type={"range"}
                        title={'IMDB Score'}
                        name={'IMDB Score'}
                        playlistData={playlistData}
                        setPlaylistData={setPlaylistData}
                        className={styles.play_list_input}
                    />
                    <TextInput
                        type={"file"}
                        title={'Poster'}
                        name={'Poster'}
                        playlistData={playlistData}
                        setPlaylistData={setPlaylistData}
                        className={styles.play_list_input}
                    />
                    <button className={styles.play_list_user} onClick={submitHandler}>Add To Own List</button>
                </form>
            </div>
        </div>
    )
}

export default DashboardPlayList
