import StudyIndiaCityPage from "@/components/education-loan/StudyIndiaCityPage";
import { indianCities } from "@/data/studyIndiaCities";
import heroImg from "@/assets/study-kolkata-hero.png";

const StudyKolkata = () => (
  <StudyIndiaCityPage city={indianCities.kolkata} heroImg={heroImg} />
);
export default StudyKolkata;
