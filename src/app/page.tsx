import AboutSection from "@/components/about-section";
import ContactSection from "@/components/contact-section";
import Education from "@/components/education";
import ExperienceSection from "@/components/experience-section";
import FooterSection from "@/components/footer-section";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ProjectSection from "@/components/projects-section";
import DividerSection from "@/components/section-divider";


export default function Home() {
  return (
    <div className="max-w-3xl mx-auto flex flex-col items-center">
       <Header/>
       <HeroSection/>
       <AboutSection/>
       <DividerSection/>
       {/* <ExperienceSection/> */}
       <Education/>
       <DividerSection/>
       <ProjectSection/>
       <ContactSection/>
       <FooterSection/>
    </div>
  );
}
