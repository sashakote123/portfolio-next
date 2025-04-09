'use client'

import styles from './styles.module.css'
import img from './../sources/mark.svg'
import Image from 'next/image';
import MainBtn from '../components/mainBtn/MainBtn'
import React, { useEffect, useState } from 'react';

const Contacts = () => {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [text, setText] = useState('')

    const [sended, setSended] = useState(false)

    async function handleSubmit() {
        //event.preventDefault();

        const formData = {
            sendersName: name,
            sendersMail: mail,
            sendersText: text,
        };

        try {
            const response = await fetch('/api/send', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error('Ошибка при отправке');
            }

            const result = await response.json();
            console.log('Email отправлен:', result);
            setSended(true)
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }

    useEffect(() => {
        setTimeout(() => setSended(false), 2000)
    }, [sended])


    return (
        <section className={styles.contactsPage}>
            <div className={styles.pageContainer}>
                <h2 className={styles.title}>Send me a letter!</h2>
                <div className={styles.letter}>
                    <div className={styles.blueLine}></div>
                    <div className={styles.letterBack}>
                        <Image className={styles.mark} src={img} alt='mark' />
                        <form className={styles.form}>
                            <input
                                name="name"
                                type="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Sender’s Name'
                                required
                            />
                            <input
                                name="email"
                                type="email"
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                                placeholder='Sender’s Details (Email)'
                                required
                            />
                            <input type="hidden" name="message" id="messageInput" />
                        </form>
                    </div>
                    <div className={styles.letterFront}>
                        <textarea
                            name="message"
                            className={styles.placeholder}
                            placeholder='Start writing...'
                            required
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        ></textarea>
                        <button
                            onClick={handleSubmit}
                            // type="submit"

                            form="emailForm"
                            className={styles.sendButton}
                        >
                            Send →
                        </button>

                    </div>
                </div>
            </div>
            {sended ? <div className={styles.sended}>Message sended</div> : null}
        </section>
    );
}
export default Contacts;