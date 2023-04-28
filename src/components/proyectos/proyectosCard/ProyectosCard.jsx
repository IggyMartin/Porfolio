import React from "react";
import styles from "./card.module.css"

export default function ProyectosCard({img, nombre, descripcion, githubSVG, websiteSVG, githubLink}) {
    return (
        <div className={styles.cardContainer}>
            <h3>{nombre}</h3>
            <img className={styles.pc} src={img} alt={nombre}/>
            <p>{descripcion}</p>
            <div className={styles.logosContainer}>
                <a className={styles.webLink} target="_blank" href={githubLink}>{githubSVG}</a>
                {
                    websiteSVG? (
                        <a href={githubLink}><img className={styles.webLink} src={websiteSVG} alt={nombre}/></a>
                    ) : null
                }
            </div>
        </div>
    )
}