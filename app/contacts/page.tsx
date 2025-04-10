'use client'

import styles from './styles.module.css'
import img from './../sources/mark.svg'
import Image from 'next/image';
import React, { useEffect, useMemo, useRef, useState } from 'react';



const Contacts = () => {

    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [text, setText] = useState('')

    const [error, setError] = useState(false)

    const [sended, setSended] = useState(false)
    const [validate, setValidate] = useState({ status: true, reason: 0 })


    const validateForm = (): boolean => {
        if (!name || !mail || !text) {
            setValidate({ status: false, reason: 1 })
            return false
        }
        else if (!mail.includes('@')) {
            setValidate({ status: false, reason: 2 })
            return false
        }
        return true
    }


    useEffect(() => {
        if (validate.reason !== 0) {
            setValidate({ status: true, reason: 0 })
        }

    }, [name, mail, text])


    async function handleSubmit() {

        const isValid = validateForm()
        if (!isValid) {
            console.log('not validated!:', validate.reason);
            return
        }
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


            setSended(true)
        } catch (error: any) {
            console.log(error);
            setError(true)
        }
    }

    useEffect(() => {
        setTimeout(() => setSended(false), 2000)
    }, [sended])

    useEffect(() => {
        setTimeout(() => setError(false), 2000)
    }, [error])

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
                                style={{ borderBottom: validate.reason === 1 ? '#dc26265b 2px solid' : 'unset' }}
                                name="name"
                                type="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder='Sender’s Name'
                                required
                            />
                            <div className={styles.error}>{validate.reason === 1 ? 'Please fill in all fields' : null}</div>
                            <input
                                style={{ borderBottom: validate.reason !== 0 ? '#dc26265b 2px solid' : 'unset' }}
                                name="email"
                                type="email"
                                value={mail}
                                onChange={(e) => setMail(e.target.value)}
                                placeholder='Sender’s Details (Email)'
                                required
                            />
                            <div className={styles.error}>{validate.reason === 1 ? 'Please fill in all fields' : null}</div>
                            <div className={styles.error}>{validate.reason === 2 ? 'Not valid email' : null}</div>
                            <input type="hidden" name="message" id="messageInput" />
                        </form>
                    </div>
                    <div className={styles.letterFront}>
                        <textarea
                            style={{ border: validate.reason === 1 ? '#dc26265b 2px solid' : 'unset' }}
                            name="message"
                            className={styles.placeholder}
                            placeholder='Start writing...'
                            required
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                        ></textarea>
                        <div className={styles.error}>{validate.reason === 1 ? 'Please fill in all fields' : null}</div>
                        <button
                            onClick={handleSubmit}

                            form="emailForm"
                            className={styles.sendButton}
                        >
                            Send →
                        </button>

                    </div>
                </div>
            </div>
            {sended ? <div className={styles.sended}>Message sended</div> : null}
            {error ? <div className={styles.notSended}>Message not sended!</div> : null}
        </section>
    );
}
export default Contacts;