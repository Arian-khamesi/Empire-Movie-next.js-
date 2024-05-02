"use client"

import styles from "./page.module.css"

function page() {

    const newSerie = {
        id:17,
        name:"La Casa De Papel",
        score:8.7,
       seasen:7,
        img:"/image/series/lacasa.jpg",
        year:2019,
        desc:`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis nemo vitae beatae eius magnam minus blanditiis iure obcaecati et dolore! Adipisci qui voluptate corrupti sapiente laborum rerum recusandae quia. Quis.
        Voluptatibus ipsam, explicabo magni aliquid tempora nostrum molestias ratione corrupti dolorum possimus quidem ipsa facere a quos omnis porro sit suscipit provident aliquam earum? Iure porro illo facilis odio quos!
        Asperiores eos nemo at beatae quam suscipit, fuga, cum soluta mollitia aut itaque, repudiandae deleniti debitis cumque repellendus doloremque vero quaerat magnam ipsum! Fugit suscipit blanditiis dicta mollitia enim ipsam!`,
    }
    console.log(newSerie);

    const addDB = async () => {
        
        const res = await fetch("/api/auth/addTest", {
            method: "POST",
            body: JSON.stringify(newSerie),
            headers: { "Content-Type": "application/json" },
        })
        const data = await res.json()
        if (res.status === 201) {
        console.log("success");
        } else {
           console.log("feild");
        }
    }


    return (
        <div>
            <button className={styles.btn} onClick={addDB}>add</button>
        </div>
    )
}

export default page
