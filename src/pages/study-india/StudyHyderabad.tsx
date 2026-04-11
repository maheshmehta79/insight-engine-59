import StudyIndiaCityPage from "@/components/education-loan/StudyIndiaCityPage";
import { indianCities } from "@/data/studyIndiaCities";
import heroImg from "@/assets/study-hyderabad-hero.png";

const StudyHyderabad = () => (
  <StudyIndiaCityPage city={indianCities.hyderabad} heroImg={heroImg} />
);
export default StudyHyderabad;
