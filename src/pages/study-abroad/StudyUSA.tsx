import StudyAbroadCountryPage from "@/components/education-loan/StudyAbroadCountryPage";
import { studyAbroadCountries } from "@/data/studyAbroadCountries";
import heroImg from "@/assets/study-usa-hero.png";

const StudyUSA = () => (
  <StudyAbroadCountryPage country={studyAbroadCountries.usa} heroImg={heroImg} />
);
export default StudyUSA;
