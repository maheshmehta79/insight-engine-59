import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DigitalBankingSection from "@/components/DigitalBankingSection";
import ProductCardsSection from "@/components/ProductCardsSection";
import CreditCardBanner from "@/components/CreditCardBanner";
import CreditScoreSection from "@/components/CreditScoreSection";
import EMICalculator from "@/components/EMICalculator";
import StatsSection from "@/components/StatsSection";
import BankingPartnersSection from "@/components/BankingPartnersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 [&>section]:py-10 [&>section]:md:py-14">
      <Navbar />
      <HeroSection />
      <CreditScoreSection />
      <DigitalBankingSection />
      <ProductCardsSection />
      <CreditCardBanner />
      <EMICalculator />
      <BankingPartnersSection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
