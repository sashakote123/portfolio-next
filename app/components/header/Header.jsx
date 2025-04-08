'use client'

import styles from './styles.module.css'
import img from './../../sources/Logo.svg'
import img2 from './../../sources/burger.svg'

import Image from 'next/image';
import Link from 'next/link';
import { Link as ScrollLink } from 'react-scroll';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import SideMenu from './../sideMenu/SideMenu'


const Header = () => {

    const [toggled, setToggled] = useState(false)

    const toggle = () => {
        setToggled(prev => !prev)
    }

    const path = usePathname();
    console.log(path);

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
                        {path === '/' ? <ScrollLink to='projects' smooth={true} href={'/contacts'}>Design projects</ScrollLink> :
                            <a href={'https://www.behance.net/gallery/223085521/gajdbuk-sytaja-sova-neapolitanskaja-picca'}>Design projects</a>
                        }


                    </li>
                    <li className={styles.listItem}>
                        <Link href={'/contacts'}>Contacts</Link>
                    </li>

                </ul>
                <Image onClick={toggle} className={styles.burger} src={img2} alt='burger' />
            </div>
            {toggled ? <SideMenu toggle={toggle}/> : null}
        </nav>
    );
}
export default Header;