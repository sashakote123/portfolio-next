import styles from './styles.module.css'

const SkillCard = ({ title, description }) => {
    return (
        <li className={styles.skillCard}>
            <h4 className={styles.cardTitle}>{title}</h4>
            <div className={styles.cardDescription}>{description}</div>
        </li>
    );
}
export default SkillCard;