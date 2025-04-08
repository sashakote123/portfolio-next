import styles from './styles.module.css'
import MainBtn from './../mainBtn/MainBtn'
import Image from 'next/image';

const ProjectCard = ({ title, img, height }) => {
    return (
        <li className={styles.card} style={{ height: `${height}px` }}>
            <div className={styles.imageWrapper}>
                <Image
                    src={img}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <div className={styles.desc}>
                <div className={styles.title}>{title}</div>
                <MainBtn link='#!' text='Full project on Behance' />
            </div>

        </li>
    );
}
export default ProjectCard;