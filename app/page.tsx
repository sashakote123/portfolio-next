import Image from "next/image";
import TitlePage from './components/titlePage/TitlePage'
import AboutMe from './components/aboutMe/AboutMe'
import ProfessionalTraits from './components/professionalTraits/ProfessionalTraits'
import DesignProjects from './components/designProjects/DesignProjects'


export default function Home() {
  return (
    <div >
      <TitlePage />
      <AboutMe />
      <ProfessionalTraits />
      <DesignProjects />
    </div>
  );
}
