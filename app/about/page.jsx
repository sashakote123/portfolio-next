import Image from 'next/image';
import styles from './styles.module.css'
import img from './../sources/timeLine.svg'

const AboutPage = () => {
    return (
        <section className={styles.aboutPage}>
            <h2 className={styles.title}>About me and my journey</h2>
            <h4 className={styles.titleDescription}>I was born in Russia, Nizhniy Novgorod.
                <br /><br />

                I enjoy making meaningful design projects. The idea of helping people get what they want through well made design is exciting to me, as well as learning new skills to achieve that goal.</h4>
            <div className={styles.timeLine}>

                <table>
                    <tbody className={styles.table}>
                        <tr>
                            <th className={styles.left} >The year,when I was born</th>
                            <th className={styles.column}>
                                <div className={styles.year}>2003</div>
                                <div className={styles.description}>
                                    Russia, Nizhniy Novgorod.</div>
                            </th>
                        </tr>
                        <tr>
                            <th className={styles.left}>High school graduation</th>
                            <th className={styles.column}>
                                <div className={styles.year}>2020</div>
                                <div className={styles.description}>
                                    I graduated highschool with flying colors, receiving a golden medal (a highest mark of distinction among school students in Russia).
                                    <br /><br />
                                    Enrolled in a Kozma Minin University to obtain a higher education in Graphic Design;
                                    <br /><br />
                                    Took 2 courses in the specialization "Graphic Design" at the University of California CalArts.</div>
                            </th>
                        </tr>
                        <tr>
                            <th className={styles.left}>My first job</th>
                            <th className={styles.column}>
                                <div className={styles.year}>2021</div>
                                <div className={styles.description}>
                                    I worked as a Russian language teacherin 2 online schools.
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th className={styles.left}>Additional education: first design course</th>
                            <th className={styles.column}>
                                <div className={styles.year}>2022</div>
                                <div className={styles.description}>
                                    Completed the course “Fundamentals of Graphic Design”, Granich School.
                                </div>
                            </th>
                        </tr>
                        <tr >
                            <th className={styles.left}>Advanced training</th>
                            <th className={styles.column}>
                                <div className={styles.year}>2023</div>
                                <div className={styles.description}>
                                    Certificate of advanced training "eadership among young people. Trajectory of young leadership";
                                    <br /><br />
                                    Certificate of advanced training in AI “Neurodesigner", "Logomachine" design studio.
                                </div>
                            </th>
                        </tr>
                        <tr >
                            <th className={styles.left}>Graduation</th>
                            <th className={styles.column}>
                                <div className={styles.year}>2024</div>
                                <div className={styles.description}>
                                    Received a bachelor’s degree in the specialty "Designer";
                                </div>
                            </th>
                        </tr>
                        <tr >
                            <th className={styles.left}>First job as a designer</th>
                            <th className={styles.column}>
                                <div className={styles.year}>2024</div>
                                <div className={styles.description}>
                                    Started working in the creative printing workshop "Old School", developing in the field of design of printed products.
                                </div>
                            </th>
                        </tr>
                    </tbody>
                </table>


                {/* <ul className={styles.leftColumn}>
                    <li>The year,when I was born</li>
                    <li>High school graduation</li>
                    <li>My first job</li>
                    <li>Additional education: first design course</li>
                    <li>Advanced training</li>
                    <li>Graduation</li>
                    <li>First job as a designer</li>
                </ul> */}
                <Image className={styles.line} src={img} alt='line' />
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