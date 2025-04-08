import Link from 'next/link';
import ProjectCard from '../projectCard/ProjectCard';
import styles from './styles.module.css'

const list = [
    { id: 1, title: "1. Short project description", height: 550, column: 1 },
    { id: 2, title: "2. Short project description", height: 384, column: 2 },
    { id: 3, title: "3. Short project description", height: 652, column: 3 },
    { id: 4, title: "4. Short project description", height: 550, column: 1 },
    { id: 5, title: "5. Short project description", height: 552, column: 2 },
    { id: 6, title: "6. Short project description", height: 552, column: 3 },
    { id: 7, title: "7. Short project description", height: 550, column: 1 },
    { id: 8, title: "8. Short project description", height: 652, column: 2 },
    { id: 9, title: "9. Short project description", height: 384, column: 3 },
]

const resList = [
    [
        { id: 1, title: "1. Short project description", height: 529, column: 1 },
        { id: 4, title: "4. Short project description", height: 529, column: 1 },//1650
        { id: 7, title: "7. Short project description", height: 529, column: 1 },
    ],
    [
        { id: 2, title: "2. Short project description", height: 384, column: 2 },
        { id: 5, title: "5. Short project description", height: 552, column: 2 },//1588
        { id: 8, title: "8. Short project description", height: 652, column: 2 },
    ],
    [
        { id: 3, title: "3. Short project description", height: 652, column: 3 },
        { id: 6, title: "6. Short project description", height: 552, column: 3 },
        { id: 9, title: "9. Short project description", height: 384, column: 3 },
    ],
]

const DesignProjects = () => {
    return (
        <section className={styles.projects}>
            <h3 className={styles.title}>My design projects</h3>
            <div className={styles.grid}>
                {resList.map((item, index) => {
                    return (
                        <ul className={styles.gridRow} key={index}>
                            {item.map(card => {
                                return <ProjectCard key={card.title} title={card.title} height={card.height} />
                            })}
                        </ul>
                    )
                })}
            </div>
            <Link className={styles.btn} href={'/contacts'}>Contacts →</Link>
        </section>
    );
}
export default DesignProjects;