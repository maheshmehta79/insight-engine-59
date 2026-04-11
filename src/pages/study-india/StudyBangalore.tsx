import StudyIndiaCityPage from "@/components/education-loan/StudyIndiaCityPage";
import { indianCities } from "@/data/studyIndiaCities";
import heroImg from "@/assets/study-bangalore-hero.png";

const StudyBangalore = () => (
  <StudyIndiaCityPage city={indianCities.bangalore} heroImg={heroImg} />
);
export default StudyBangalore;
