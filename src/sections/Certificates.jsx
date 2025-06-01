import { InfiniteMovingCards } from "../components/InfiniteMovingCards";

const certificates_name = [
  "Cisco Python",
  "Dark Hash PaperExpo",
  "Dark Hash connexion",
  "HackOdyssey24 50K Prize",
  "PSGiTech Hackathon",
  "All rounder of AI&DS",
  "Google Cloud Digital Leader",
  "Mepco Competition",
  "REDHAT Workshop",
  "AIVORA Name Creation",
  "Infosys Agile",
  "NASA Hackathon",
  "SkillRack",
  "Java SkillRack",
  "Infosys Data Science",
  "Infosys AI",
  "CISCO Packet Tracer",
  "Flask Python",
  "GUVI Python",
  "IIT Bombay",
  "Google Digital Garage",
  "AICTE UHV",
  "KIMO With AI",
  "Kongunadu Competition",
  "Python for ML",
  "IIT Madras Python Workshop",
  "MIeTY Cyber Security",
  "Intro to DL",
  "Achiever in KYLA",
  "KIMO with GenAI",
  "Coursera MS Excel",
  "SkilUP Python",
];

const certificates = Array.from({ length: 32 }, (_, i) => ({
  id: i,
  image: `/certificates/image${i + 1}.png`,
  caption: certificates_name[i],
}));

export default function Certificates() {
  return (
    <div className="bg-black py-10">
      <h2 className="text-center text-2xl font-semibold text-white mb-6">
        My Certificates
      </h2>
      <InfiniteMovingCards
        items={certificates}
        speed="normal"
        direction="left"
      />
    </div>
  );
}
