import styles from './styles.module.css'
import img from './../sources/mark.svg'
import Image from 'next/image';
import MainBtn from './../components/mainBtn/MainBtn'

const Contacts = () => {
    return (
        <section className={styles.contactsPage}>
            <div className={styles.pageContainer}>
                <h2 className={styles.title}>Send me a letter!</h2>
                <div className={styles.letter}>
                    <div className={styles.blueLine}></div>
                    <div className={styles.letterBack}>
                        <Image src={img} alt='mark' />
                        <form className={styles.form} action="#!">
                            <input type="name" placeholder='Sender’s Name' />
                            <input type="text" placeholder='Sender’s Details' />
                        </form>
                    </div>
                    <div className={styles.letterFront}>
                        <textarea className={styles.placeholder} placeholder='Start writing...'></textarea>
                        <MainBtn text={'Send →'} link={'/'}/>
                    </div>
                </div>
            </div>

        </section>
    );
}
export default Contacts;