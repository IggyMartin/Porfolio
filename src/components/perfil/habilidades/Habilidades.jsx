import React from "react";
import styles from "./habilidades.module.css"
import casterisco from "../../../assets/Casterisco.svg"
import cmasMas from "../../../assets/C++.svg"
import unity from "../../../assets/unity.svg"

export default function Habilidades() {
    return (
        <div className={styles.container}>
            <div>
                <p>Blandas</p>
                <ul>
                    <li>Comunicación</li>
                    <li>Liderazgo</li>
                    <li>Trabajo en Equipo</li>
                    <li>Empatía</li>
                    <li>SCRUM</li>
                </ul>
            </div>
            <div>
                <p>Extras</p>
                <ul>
                    <li>Jira</li>
                    <li>Figma</li>
                    <li>Inglés C2</li>
                </ul>
            </div>
            <div>
                <p>Intereses</p>
                <div className={styles.intereses}>
                    <div className={styles.first}>
                        <img src={unity} alt="unitySVG" />
                        <p>unity</p>
                    </div>
                    <div className={styles.second}>
                        <img src={casterisco} alt="C#SVG" />
                        <p>C#</p>
                    </div>
                    <div className={styles.third}>
                        <img src={cmasMas} alt="C==SVG" />
                        <p>C++</p>
                    </div>
                </div>    
            </div>
        </div>
    )
}