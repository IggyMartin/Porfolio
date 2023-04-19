import React from "react";
import styles from "./intro.module.css"
import { useTypewriter } from "react-simple-typewriter"
import pic from "../../egge.jpg"
import react from "../../assets/react.svg"
import redux from "../../assets/redux.svg"
import psql from "../../assets/postgresql.svg"
import express from "../../assets/express.svg"
import sequelize from "../../assets/sequelize.svg"
import nodejs from "../../assets/nodejs.svg"
import html from "../../assets/html.svg"
import css from "../../assets/css.svg"
import js from "../../assets/js.svg"
import git from "../../assets/git.svg"

export default function Intro() {

    let logos = [
        {svg: html,
        name: "HTML"},
        {svg: css,
        name: "CSS"},
        {svg: js,
        name: "JavaScript"},
        {svg: react,
        name: "React"},
        {svg: redux,
        name: "Redux"},
        {svg: nodejs,
        name: "nodeJS"},
        {svg: express,
        name: "express"},
        {svg: sequelize,
        name: "sequelize"},
        {svg: psql,
        name: "PostgreSQL"},
        {svg: git,
        name: "git"}
        ]

    const [text] = useTypewriter({
            words: ['Ignacio Martin', 'Full Stack Developer'],
            loop: 0
        })

    return (
        <section  id="intro" className={styles.introContainer}>
            <div>
                <img className={styles.pic} src={pic} alt="profile picture"/>
            </div>
            <div className={styles.text}>
                <h2 className={styles.alternateText}>{text} 💻</h2>
                <p className={styles.centeredText}>
                    Hola! Descubrí mis habilidades y proyectos en los que aplico mis conocimientos y lógica. 
                    Si estas interesad@ en mi perfil, no dudes en contactarme!
                </p>
                <div className={styles.tecnologiasContainer}>
                    <h2 className={`${styles.tecnologias} ${styles.centeredText}`}>Tecnologias</h2>
                    <div className={styles.logoContainer}>
                        {
                            logos.map(logo => (
                                <div key={logo.name}>
                                    <img src={logo.svg} />
                                    <p className={styles.centeredText}>{logo.name}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}