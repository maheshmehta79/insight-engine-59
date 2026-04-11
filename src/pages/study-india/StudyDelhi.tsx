import StudyIndiaCityPage from "@/components/education-loan/StudyIndiaCityPage";
import { indianCities } from "@/data/studyIndiaCities";
import heroImg from "@/assets/study-delhi-hero.png";

const StudyDelhi = () => (
  <StudyIndiaCityPage city={indianCities.delhi} heroImg={heroImg} />
);
export default StudyDelhi;
