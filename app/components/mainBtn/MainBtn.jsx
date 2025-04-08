import Link from 'next/link';
import styles from './styles.module.css'

const MainBtn = ({ text, link }) => {
    return (
        <Link className={styles.mainBtn} href={link}>{text}</Link>
    );
}
export default MainBtn;