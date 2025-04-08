import Link from 'next/link';
import styles from './styles.module.css'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.title}>Send me a letter!<br />
                <Link style={{color:'#fff'}} href={'./contacts'}>
                    yanasigrianskaya@gmail.com
                </Link>

            </h2>
            <h3 className={styles.copyrights}>Copyright 2025. All rights reserved.</h3>
        </footer>
    );
}
export default Footer;