import React from "react";
import styles from "./intro.module.css"
import pic from "../../egge.jpg"

export default function Intro() {
    return (
        <section className={styles.introContainer}>
            <img className={styles.pic} src={pic} alt="profile picture"/>
            <div className={styles.second}>
                <pre>
                    Hola! Descubrí mis habilidades y proyectos en los que aplico mis conocimientos y lógica. 
                    Si estas interesad@ en mi perfil, no dudes en contactarme!
                </pre>
            </div>
        </section>
    )
}