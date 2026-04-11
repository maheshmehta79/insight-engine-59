import StudyAbroadCountryPage from "@/components/education-loan/StudyAbroadCountryPage";
import { studyAbroadCountries } from "@/data/studyAbroadCountries";
import heroImg from "@/assets/study-netherlands-hero.png";

const StudyNetherlands = () => (
  <StudyAbroadCountryPage country={studyAbroadCountries.netherlands} heroImg={heroImg} />
);
export default StudyNetherlands;
