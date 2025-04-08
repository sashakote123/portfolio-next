import Image from 'next/image';
import styles from './styles.module.css'
import img from './../../sources/headerImage.png'


const TitlePage = () => {
    return (
        <section className={styles.section}>
            <div className={styles.sectionContainer}>
                <Image className={styles.image} src={img} alt='image' />
                <div className={styles.textInfo}>
                    <h3 className={styles.description}>Designer portfolio</h3>
                    <h1 className={styles.name}>SIGRIANSKAYA YANA</h1>
                    <h2 className={styles.portfolio}>Сreating aesthetically pleasing and needed projects 
                        using a "Person-To-Person" approach in design.</h2>
                </div>
            </div>
            <div className={styles.sliderContainer}>
                <div className={styles.slider}>
                    BRAND DESIGN VISUAL IDENTITY LOGO DESIGN ILLUSTRATION AND ART PRINT DESIGN PACKAGING DESIGN USER INTERFACE
                    &nbsp;•&nbsp;
                    BRAND DESIGN VISUAL IDENTITY LOGO DESIGN ILLUSTRATION AND ART PRINT DESIGN PACKAGING DESIGN USER INTERFACE
                </div>
            </div>
        </section>
    );
}
export default TitlePage;