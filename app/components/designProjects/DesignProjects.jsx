import Link from 'next/link';
import ProjectCard from '../projectCard/ProjectCard';
import styles from './styles.module.css'

import img1 from './../../sources/projects/1.jpg'
import img2 from './../../sources/projects/2.jpg'
import img3 from './../../sources/projects/3.jpg'
import img4 from './../../sources/projects/4.jpg'
import img5 from './../../sources/projects/5.jpg'
import img6 from './../../sources/projects/6.jpg'

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
        { id: 1, title: "“Sytaya Sova” pizzeria neapolitana rebranding project. Guidebook", height: 447, column: 1, image: img1 },
        { id: 4, title: "“YLETAЙ” Russian music festival visual identity redesign", height: 641, column: 1, image: img4 },//1650

    ],
    [
        { id: 2, title: "“Pro Skin” cosmetology clinic logo design and visual identity design. Logobook", height: 641, column: 2, image: img2 },
        { id: 5, title: "City postcards. Package design, photography project", height: 447, column: 2, image: img5 },//1588

    ],
    [
        { id: 3, title: "“ADANA” exclusive gift calendar design", height: 447, column: 3, image: img3 },
        { id: 6, title: "“VNE ZALA” sport’s cafe logo design and visual identity concept", height: 641, column: 3, image: img6 },

    ],
]

const DesignProjects = () => {
    return (
        <section id='projects' className={styles.projects}>
            <h3 className={styles.title}>My design projects</h3>
            <div className={styles.grid}>
                {resList.map((item, index) => {
                    return (
                        <ul className={styles.gridRow} key={index}>
                            {item.map(card => {
                                return <ProjectCard key={card.title} title={card.title} height={card.height} img={card.image} />
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