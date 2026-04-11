import StudyAbroadCountryPage from "@/components/education-loan/StudyAbroadCountryPage";
import { studyAbroadCountries } from "@/data/studyAbroadCountries";
import heroImg from "@/assets/study-sweden-hero.png";

const StudySweden = () => (
  <StudyAbroadCountryPage country={studyAbroadCountries.sweden} heroImg={heroImg} />
);
export default StudySweden;
