import { Route, Routes } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import LoginPage from "../pages/LoginPage/LoginPage";
import RegisterPage from "../pages/RegisterPage/RegisterPage";
import WhoWeArePage from "../pages/WhoWeArePage/WhoWeArePage";
import WhyChooseUs from "../pages/WhyChooseUs/WhyChooseUs";
import SecureTrading from "../pages/SecureTrading/SecureTrading";
import CareersPage from "../pages/CareersPage/CareersPage";
import NewsroomPage from "../pages/NewsroomPage/NewsroomPage";
import GlossaryPage from "../pages/GlossaryPage/GlossaryPage";
import HelpCenterPage from "../pages/HelpCenterPage/HelpCenterPage";
import ContactUsPage from "../pages/ContactUsPage/ContactUsPage";
import SarthiMt5Page from "../pages/SarthiMt5Page/SarthiMt5Page";
import SarthiX from "../pages/SarthiX/SarthiX";
import SarthiNakala from "../pages/SarthiNakalaPage/SarthiNakalaPage";
import BlogPage from "../pages/BlogPage/BlogPage";

const Routing: React.FC = () => {
  return (
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/who-we-are" element={<WhoWeArePage />} />
        <Route path="/why-choose-us" element={<WhyChooseUs />} />
        <Route path="/secure-trading" element={<SecureTrading />} />
        <Route path="/careers" element={<CareersPage />} />
        <Route path="/newsroom" element={<NewsroomPage />} />


        <Route path="/blog" element={<BlogPage />} />
        <Route path="/glossary" element={<GlossaryPage />} />
        <Route path="/help-centre" element={<HelpCenterPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />

        <Route path="/trading-platforms/sarthi-mt5" element={<SarthiMt5Page />} />
        <Route path="/trading-platforms/sarthi-x" element={<SarthiX />} />
        <Route path="/trading-platforms/sarthi-nakala" element={<SarthiNakala />} />
      </Routes>
  );
};

export default Routing;
