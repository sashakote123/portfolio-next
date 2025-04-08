'use client'

import styles from './styles.module.css'
import { usePathname, useRouter } from 'next/navigation';

import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import Image from 'next/image';
import img2 from './../../sources/burger.svg'

const SideMenu = ({ toggle }) => {

    const path = usePathname();

    return (
        <div className={styles.menu}>

            <ul className={styles.nav}>
                <li>
                    <Image onClick={toggle} className={styles.burger} src={img2} alt='burger' />
                </li>
                <li className={styles.listItem}>
                    <Link onClick={toggle} href={'/'}>Home</Link>
                </li>
                <li className={styles.listItem}>
                    <Link onClick={toggle} href={'/about'}>About me</Link>
                </li>
                <li  className={styles.listItem}>
                    {path === '/' ? <ScrollLink onClick={toggle} to='projects' smooth={true} href={'/contacts'}>Design projects</ScrollLink> :
                        <a onClick={toggle} href={'https://www.behance.net/gallery/223085521/gajdbuk-sytaja-sova-neapolitanskaja-picca'}>Design projects</a>
                    }
                </li>
                <li className={styles.listItem}>
                    <Link onClick={toggle} href={'/contacts'}>Contacts</Link>
                </li>
            </ul>
        </div>
    );
}
export default SideMenu;