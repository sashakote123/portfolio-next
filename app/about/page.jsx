import Image from 'next/image';
import styles from './styles.module.css'
import img from './../sources/timeLine.svg'


const timelineData = [
    {
        id: 1,
        year: "2003",
        leftContent: "The year, when I was born",
        description: "Russia, Nizhniy Novgorod."
    },
    {
        id: 2,
        year: "2020",
        leftContent: "High school graduation",
        description: (
            <>
                I graduated highschool with flying colors, receiving a golden medal (a highest mark of distinction among school students in Russia).
                <br /><br />
                Enrolled in a Kozma Minin University to obtain a higher education in Graphic Design.
                <br /><br />
                Took 2 courses in the specialization "Graphic Design" at the University of California CalArts.
            </>
        )
    },
    {
        id: 3,
        year: "2021",
        leftContent: "My first job",
        description: "I worked as a Russian language teacher in 2 online schools."
    },
    {
        id: 4,
        year: "2022",
        leftContent: "Additional education: first design course",
        description: "Completed the course 'Fundamentals of Graphic Design', Granich School."
    },
    {
        id: 5,
        year: "2023",
        leftContent: "Advanced training",
        description: (
            <>
                Certificate of advanced training "Leadership among young people. Trajectory of young leadership".
                <br /><br />
                Certificate of advanced training in AI "Neurodesigner", "Logomachine" design studio.
            </>
        )
    },
    {
        id: 6,
        year: "2024",
        leftContent: "Graduation",
        description: "Received a bachelor's degree in the specialty 'Designer'."
    },
    {
        id: 7,
        year: "2024",
        leftContent: "First job as a designer",
        description: "Started working in the creative printing workshop 'Old School', developing in the field of design of printed products."
    }
];

const AboutPage = () => {
    return (
        <section className={styles.aboutPage}>
            <h2 className={styles.title}>About me and my journey</h2>
            <h4 className={styles.titleDescription}>I was born in Russia, Nizhniy Novgorod.
                <br /><br />

                I enjoy making meaningful design projects. The idea of helping people get what they want through well made design is exciting to me, as well as learning new skills to achieve that goal.</h4>
            <div className={styles.timeLine}>

                <table className={styles.table}>
                    <tbody>
                        {timelineData.map((item) => (
                            <tr key={item.id} className={styles.row}>
                                <th className={styles.leftCell}>
                                    {item.leftContent}
                                </th>
                                <td className={styles.rightCell}>
                                    <div className={styles.year}>{item.year}</div>
                                    <div className={styles.description}>{item.description}</div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                <ul className={styles.oneColList}>
                    {timelineData.map(item => {
                        return <li className={styles.lineCell} key={item.id}>

                            <div className={styles.year}>{item.year}</div>
                            <div className={styles.lineTitle}>{item.leftContent}</div>
                            <div className={styles.description}>{item.description}</div>
                        </li>
                    })}
                </ul>
                {/* <ul className={styles.leftColumn}>
                    <li>The year,when I was born</li>
                    <li>High school graduation</li>
                    <li>My first job</li>
                    <li>Additional education: first design course</li>
                    <li>Advanced training</li>
                    <li>Graduation</li>
                    <li>First job as a designer</li>
                </ul> */}
                {/* <Image className={styles.line} src={img} alt='line' /> */}
                {/* <ul className={styles.rightColumn}>
                    <li>
                        <div className={styles.year}>2003</div>
                        <div className={styles.description}>
                            Russia, Nizhniy Novgorod.</div>
                    </li>
                    <li>
                        <div className={styles.year}>2020</div>
                        <div className={styles.description}>
                            I graduated highschool with flying colors, receiving a golden medal (a highest mark of distinction among school students in Russia).
                            <br /><br />
                            Enrolled in a Kozma Minin University to obtain a higher education in Graphic Design;
                            <br /><br />
                            Took 2 courses in the specialization "Graphic Design" at the University of California CalArts.</div>
                    </li>
                    <li>
                        <div className={styles.year}>2021</div>
                        <div className={styles.description}>
                            I worked as a Russian language teacherin 2 online schools.
                        </div>
                    </li>
                    <li>
                        <div className={styles.year}>2022</div>
                        <div className={styles.description}>
                            Completed the course “Fundamentals of Graphic Design”, Granich School.
                        </div>
                    </li>
                    <li>
                        <div className={styles.year}>2023</div>
                        <div className={styles.description}>
                            Certificate of advanced training "eadership among young people. Trajectory of young leadership";
                            <br /><br />
                            Certificate of advanced training in AI “Neurodesigner", "Logomachine" design studio.
                        </div>
                    </li>
                    <li>
                        <div className={styles.year}>2024</div>
                        <div className={styles.description}>
                            Received a bachelor’s degree in the specialty "Designer";
                        </div>
                    </li>
                    <li>
                        <div className={styles.year}>2024</div>
                        <div className={styles.description}>
                            Started working in the creative printing workshop "Old School", developing in the field of design of printed products.
                        </div>
                    </li>

                </ul> */}
                <a className={styles.btn} href="/contacts">Contacts →</a>
            </div>
        </section>
    );
}

export default AboutPage;