import React, { useState } from "react";
import styles from "./perfil.module.css"
import Habilidades from "../habilidades/Habilidades";

export default function Perfil() {

    const [perfilView, setPerfilView] = useState("acercaDeMi")

    return (
        <section id="profile" className={styles.profileContainer}>
            <div>
                <h3>Perfil</h3>
                <div className={styles.generalContainer}>
                    <div className={styles.first}>
                        <button onClick={() => setPerfilView("acercaDeMi")}>Acerca de mi</button>
                        <button onClick={() => setPerfilView("habilidades")}>Habilidades</button>
                    </div>
                    <div className={styles.second}>
                    {
                        perfilView === "acercaDeMi" &&
                        <>
                            <p>Comencé en el mundo de la programación durante la pandemia, aprendiendo de forma autodidacta HTML y CSS. Al querer mejorar mis habilidades como desarrollador, ingresé en el bootcamp Henry, donde en conjunto con la práctica lógica, el trabajo tanto individual como en equipo, las herramientas para desarrollarme del lado del cliente (Front End) y del servidor (Back End), y la realización de proyectos, adqurí las capacidades para poder ser un desarrollador full stack</p>
                            <p>Como persona, destaca mi persistencia y creatividad, que en conjunto con las distintas perspectivas y puntos de vista que puedo tomar hacia un mismo tema, se me da bien el trabajo en equipo y la resolución de problemas.</p>
                            <p>Desde que conocí este mundo de la tecnología guardo un interés por aprender a desarrollar juegos, tanto en interfaces 2D como 3D</p>
                        </>
                        }
                    {
                        perfilView === "habilidades" && <Habilidades />
                    }
                    </div>
                </div>
            </div>
        </section>
    )
}