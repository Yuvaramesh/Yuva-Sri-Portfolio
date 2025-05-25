import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import Education from "./sections/Education"; // Adjust the path as necessary
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";
import ResumeCard from "./sections/ResumeCard";
// import ChatResumeUI from "./sections/ChatResumeUI"; // Adjust the path as necessary
// import AchievementCard from "./sections/AchievementCard";
// import ChatwithResume from "./sections/ChatwithResume"; // Adjust the path as necessary
import Certificates from "./sections/Certificates"; // Adjust the path as necessary
import { DragCards } from "./components/DragCards";
const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <LogoShowcase />
    <FeatureCards />
    <Experience />
    <Education />
    <ResumeCard />
    {/* <ChatResumeUI /> */}
    {/* <ChatwithResume /> */}
    <DragCards />
    <Certificates />
    <Contact />
    <Footer />
  </>
);

export default App;
