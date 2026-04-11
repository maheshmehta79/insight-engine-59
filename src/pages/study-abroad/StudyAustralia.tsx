import StudyAbroadCountryPage from "@/components/education-loan/StudyAbroadCountryPage";
import { studyAbroadCountries } from "@/data/studyAbroadCountries";
import heroImg from "@/assets/study-australia-hero.png";

const StudyAustralia = () => (
  <StudyAbroadCountryPage country={studyAbroadCountries.australia} heroImg={heroImg} />
);
export default StudyAustralia;
