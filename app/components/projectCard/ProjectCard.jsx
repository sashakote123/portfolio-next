import styles from './styles.module.css'
import MainBtn from './../mainBtn/MainBtn'

const ProjectCard = ({ title, img, height }) => {
    return (
        <li className={styles.card} style={{ height: `${height}px` }}>
            <div className={styles.title}>{title}</div>
            <MainBtn link='#!' text='Full project on Behance' />
        </li>
    );
}
export default ProjectCard;