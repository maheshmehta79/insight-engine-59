import StudyIndiaCityPage from "@/components/education-loan/StudyIndiaCityPage";
import { indianCities } from "@/data/studyIndiaCities";
import heroImg from "@/assets/study-mumbai-hero.png";

const StudyMumbai = () => (
  <StudyIndiaCityPage city={indianCities.mumbai} heroImg={heroImg} />
);
export default StudyMumbai;
