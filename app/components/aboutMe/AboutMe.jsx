import Image from 'next/image';
import styles from './styles.module.css';
import img from './../../sources/bigLogo.svg';

import MainBtn from './../mainBtn/MainBtn'

const AboutMe = () => {
    return (
        <section className={styles.aboutMe}>
            <Image src={img} alt='logo'></Image>
            <div className={styles.textContainer}>
                <h3 className={styles.textTitle}>
                    About me
                </h3>
                <div className={styles.textDescription}>
                    I was born in Russia, Nizhniy Novgorod.
                    <br /><br />
                    I enjoy making meaningful design projects. Helping people get what they want through well made design is exciting to me, as well as learning new skills to achieve that goal.
                </div>
                <MainBtn link={'#!'} text={'My journey →'} />
            </div>
        </section>
    );
}
export default AboutMe;