import styles from './styles.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.title}>Send me a letter!<br />yanasigrianskaya@gmail.com</h2>
            <h3 className={styles.copyrights}>Copyright 2025. All rights reserved.</h3>
        </footer>
    );
}
export default Footer;