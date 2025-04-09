'use client'

import styles from './styles.module.css'
import img from './../sources/mark.svg'
import Image from 'next/image';
import MainBtn from './../components/mainBtn/MainBtn'
import { useState } from 'react';

const Contacts = () => {

    const [isSending, setIsSending] = useState(false);
    const [sendStatus, setSendStatus] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSending(true);

        const formData = new FormData(e.target);
        const data = {
            name: formData.get('name'),
            details: formData.get('details'),
            message: formData.get('message')
        };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            console.log(response);
            if (response.ok) {
                setSendStatus('Message sent successfully!');
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            setSendStatus('Error sending message. Please try again.');
            console.error('Error:', error);
        } finally {
            setIsSending(false);
        }
    };

    return (
        <section className={styles.contactsPage}>
            <div className={styles.pageContainer}>
                <h2 className={styles.title}>Send me a letter!</h2>
                <div className={styles.letter}>
                    <div className={styles.blueLine}></div>
                    <div className={styles.letterBack}>
                        <Image className={styles.mark} src={img} alt='mark' />
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <input
                                name="name"
                                type="text"
                                placeholder='Sender’s Name'
                                required
                            />
                            <input
                                name="details"
                                type="text"
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
                            onChange={(e) => {
                                document.getElementById('messageInput').value = e.target.value;
                            }}
                        ></textarea>
                        <button
                            
                            type="submit"
                            form="emailForm"
                            className={styles.sendButton}
                            disabled={isSending}
                        >
                            {isSending ? 'Sending...' : 'Send →'}
                        </button>
                        {sendStatus && <p className={styles.status}>{sendStatus}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Contacts;