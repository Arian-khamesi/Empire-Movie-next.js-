"use client"

import { useState } from "react"
import styles from "./DashboardPlayList.module.css"
import TextInput from "../module/TextInput"

function DashboardPlayList() {

    const [ playlistData, setPlaylistData] = useState({
        movieName: "",
        time: "",
        date: "",
        overview: "",
        score: "",
        postre: ""
    })

    const submitHandler = () => {
        console.log(playlistData);
    }



    return (
        <div className={styles.playlist}>
            <div className={styles.play_list_form_container}>
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
