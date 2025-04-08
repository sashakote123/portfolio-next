import styles from './styles.module.css'
import img from './../../sources/Logo.svg'
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    return (
        <nav className={styles.navBar}>
            <div className={styles.barContainer}>
                <Image src={img} alt="logo" />
                <ul className={styles.nav}>
                    <li className={styles.listItem}>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href={'/about'}>About me</Link>
                    </li>
                    <li className={styles.listItem}>
                        <Link href={'/contacts'}>Contacts</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
export default Header;