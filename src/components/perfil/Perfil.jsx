import React from "react";
import styles from "./perfil.module.css"

export default function Perfil() {
    return (
        <section id="profile" className={styles.profileContainer}>
            <div style={{backgroundColor: "rgb(255, 255, 255, 0.3)"}}>
                <h3>Perfil</h3>
            </div>
        </section>
    )
}