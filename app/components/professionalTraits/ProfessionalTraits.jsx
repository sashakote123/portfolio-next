
import styles from './styles.module.css'
import SkillCard from './../skillCard/SkillCard'


const ProfessionalTraits = () => {
    const list = [
        {
            title: 'Values',
            description: [
                'In my work I follow a "from person to person" design approach, creating both visually attractive and thought through projects;',
                <br key="br1" />,
                <br key="br2" />,
                'Attentiveness to copyright, respect for the intellectual property of others.',
            ],
        },
        {
            title: 'Soft skills',
            description: [
                'A reasonable, friendly and consistent approach to solving problems;',
                <br key="br1" />,
                <br key="br2" />,
                'Ability to justify design decisions;',
                <br key="br3" />,
                <br key="br4" />,
                'Adaptability: ready to learn new solutions for unusual tasks.'],
        },
        {
            title: 'Hard skills',
            description: [
                'Photoshop, Illustrator, InDesign, Figma, AI tools;',
                <br key="br1" />,
                <br key="br2" />,
                'Traditional and digital art;',
                <br key="br3" />,
                    <br key="br 4" />,
'S ome experience in 3D (Blender) AfterEffects;',
                < br key = "br5" />,
                <br key="br6" />,  
'Fluent in English(B2 language level).',
            ],
        }]

    return (
        <section className={styles.traits}>
            <h3 className={styles.title}>Professional traits</h3>
            <ul className={styles.list}>
                {list.map((item) => <SkillCard key={item.title} title={item.title} description={item.description} />)}
            </ul>
        </section>
    );
}
export default ProfessionalTraits; 