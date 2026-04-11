import StudyIndiaCityPage from "@/components/education-loan/StudyIndiaCityPage";
import { indianCities } from "@/data/studyIndiaCities";
import heroImg from "@/assets/study-chennai-hero.png";

const StudyChennai = () => (
  <StudyIndiaCityPage city={indianCities.chennai} heroImg={heroImg} />
);
export default StudyChennai;
