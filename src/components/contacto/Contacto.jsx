import React, { useRef } from "react";
import styles from "./contacto.module.css"
import emailjs from '@emailjs/browser';

export default function Contacto() {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm("service_58lukde", "template_i9tkira", form.current, "7lwOQ-jz2aIXs2iQ7")
        .then((result) => {
            console.log(result.text);
            alert("Mail enviado!")
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <section id="contact" className={styles.contactoContainer}>
            <div>
                <h3>Contacta conmigo</h3>
                <form ref={form} onSubmit={sendEmail} className={styles.form} autoComplete="off">
                    <div>
                        <label>Nombre: </label>
                        <input type="text" name="user_name" placeholder="Escribe tu nombre completo aquí" required/>
                    </div>
                    <div>
                        <label>Email: </label>
                        <input type="email" name="user_email" placeholder="Escribe tu email aquí" required/>
                    </div>
                    <div>
                        <label>Mensaje: </label>
                        <input type="text" name="message" placeholder="Escrube tu mensaje aquí" required/>
                    </div>
                    <button className={styles.formButton} type="submit" value="Send">Enviar</button>
                </form>
            </div>
        </section>
    )
}