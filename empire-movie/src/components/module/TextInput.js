import styles from "./TextInput.module.css"


function TextInput({
    title,
    type,
    name,
    playlistData,
    setPlaylistData,
    textArea = false
}) {

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setPlaylistData({ ...playlistData, [name]: value });
    };


    return (

        <>
            {textArea ?
                <textarea
                    type="text"
                    placeholder={title}
                    name={name}
                    value={playlistData[name]}
                    onChange={changeHandler}
                    className={styles.play_list_textArea} /> :
                <input
                    type={type}
                    placeholder={title}
                    name={name}
                    value={playlistData[name]}
                    onChange={changeHandler}
                    className={styles.play_list_input}
                />}
        </>
    )
}

export default TextInput