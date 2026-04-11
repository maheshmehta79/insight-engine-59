import StudyAbroadCountryPage from "@/components/education-loan/StudyAbroadCountryPage";
import { studyAbroadCountries } from "@/data/studyAbroadCountries";
import heroImg from "@/assets/study-germany-hero.png";

const StudyGermany = () => (
  <StudyAbroadCountryPage country={studyAbroadCountries.germany} heroImg={heroImg} />
);
export default StudyGermany;
