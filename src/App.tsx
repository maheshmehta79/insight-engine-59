import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index.tsx";
import PersonalLoan from "./pages/PersonalLoan.tsx";
import EducationLoan from "./pages/EducationLoan.tsx";
import HomeLoan from "./pages/HomeLoan.tsx";
import UsedCarLoan from "./pages/UsedCarLoan.tsx";
import LoanAgainstProperty from "./pages/LoanAgainstProperty.tsx";
import CarLoan from "./pages/CarLoan.tsx";
import TwoWheelerLoan from "./pages/TwoWheelerLoan.tsx";
import BusinessLoan from "./pages/BusinessLoan.tsx";
import MicroLoan from "./pages/MicroLoan.tsx";
import GoldLoan from "./pages/GoldLoan.tsx";
import CreditCards from "./pages/CreditCards.tsx";
import AboutUs from "./pages/AboutUs.tsx";
import ContactUs from "./pages/ContactUs.tsx";
import CreditScore from "./pages/CreditScore.tsx";
import Calculators from "./pages/Calculators.tsx";
import NotFound from "./pages/NotFound.tsx";
import ProductCalculator from "./pages/ProductCalculator.tsx";
import Login from "./pages/Login.tsx";
import CreduAIChat from "./components/CreduAIChat";
import StudyIndia from "./pages/study-abroad/StudyIndia.tsx";
import StudyAustralia from "./pages/study-abroad/StudyAustralia.tsx";
import StudyFrance from "./pages/study-abroad/StudyFrance.tsx";
import StudyGermany from "./pages/study-abroad/StudyGermany.tsx";
import StudyUSA from "./pages/study-abroad/StudyUSA.tsx";
import StudyUK from "./pages/study-abroad/StudyUK.tsx";
import StudyNetherlands from "./pages/study-abroad/StudyNetherlands.tsx";
import StudyNewZealand from "./pages/study-abroad/StudyNewZealand.tsx";
import StudyIreland from "./pages/study-abroad/StudyIreland.tsx";
import StudySweden from "./pages/study-abroad/StudySweden.tsx";
import StudyDelhi from "./pages/study-india/StudyDelhi.tsx";
import StudyMumbai from "./pages/study-india/StudyMumbai.tsx";
import StudyChennai from "./pages/study-india/StudyChennai.tsx";
import StudyKolkata from "./pages/study-india/StudyKolkata.tsx";
import StudyBangalore from "./pages/study-india/StudyBangalore.tsx";
import StudyHyderabad from "./pages/study-india/StudyHyderabad.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/login" element={<Login />} />
            <Route path="/personal-loan" element={<PersonalLoan />} />
            <Route path="/education-loan" element={<EducationLoan />} />
            <Route path="/home-loan" element={<HomeLoan />} />
            <Route path="/loan-against-property" element={<LoanAgainstProperty />} />
            <Route path="/car-loan" element={<CarLoan />} />
            <Route path="/used-car-loan" element={<UsedCarLoan />} />
            <Route path="/two-wheeler-loan" element={<TwoWheelerLoan />} />
            <Route path="/business-loan" element={<BusinessLoan />} />
            <Route path="/micro-loan" element={<MicroLoan />} />
            <Route path="/gold-loan" element={<GoldLoan />} />
            <Route path="/credit-cards" element={<CreditCards />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/credit-score" element={<CreditScore />} />
            <Route path="/calculators" element={<Calculators />} />
            <Route path="/calculator/:slug" element={<ProductCalculator />} />
            <Route path="/study-in-india" element={<StudyIndia />} />
            <Route path="/study-in-india/delhi" element={<StudyDelhi />} />
            <Route path="/study-in-india/mumbai" element={<StudyMumbai />} />
            <Route path="/study-in-india/chennai" element={<StudyChennai />} />
            <Route path="/study-in-india/kolkata" element={<StudyKolkata />} />
            <Route path="/study-in-india/bangalore" element={<StudyBangalore />} />
            <Route path="/study-in-india/hyderabad" element={<StudyHyderabad />} />
            <Route path="/study-abroad/australia" element={<StudyAustralia />} />
            <Route path="/study-abroad/france" element={<StudyFrance />} />
            <Route path="/study-abroad/germany" element={<StudyGermany />} />
            <Route path="/study-abroad/usa" element={<StudyUSA />} />
            <Route path="/study-abroad/uk" element={<StudyUK />} />
            <Route path="/study-abroad/netherlands" element={<StudyNetherlands />} />
            <Route path="/study-abroad/new-zealand" element={<StudyNewZealand />} />
            <Route path="/study-abroad/ireland" element={<StudyIreland />} />
            <Route path="/study-abroad/sweden" element={<StudySweden />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CreduAIChat />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
