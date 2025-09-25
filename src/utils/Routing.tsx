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
import SarthiCTraderPage from "../pages/SarthiCTraderPage/SarthiCTraderPage";
import SarthiTraderPage from "../pages/SarthiTraderPage/SarthiTraderPage";
import SarthiBotPage from "../pages/SarthiBotPage/SarthiBotPage";
import SarthiGo from "../pages/SarthiGo/SarthiGo";
import CfdsPage from "../pages/CfdsPage/CfdsPage";
import ForexMarket from "../pages/ForexMarket/ForexMarket";
import DerivedIndicesPage from "../pages/DerivedIndicesPage/DerivedIndicesPage";
import StocksPage from "../pages/StocksPage/StocksPage";
import StocksIndicesPage from "../pages/StocksIndicesPage/StocksIndicesPage";
import CommoditiesPage from "../pages/CommoditiesPage/CommoditiesPage";
import EtfPage from "../pages/EtfPage/EtfPage";
import CryptoPage from "../pages/CryptoPage/CryptoPage";
import PaymentMethodsPage from "../pages/PaymentMethodsPage/PaymentMethodsPage";
import TradingViewPage from "../pages/TradingViewPage/TradingViewPage";
import TradingCalculatorPage from "../pages/TradingCalculatorPage/TradingCalculatorPage";
import TradingCentralPage from "../pages/TradingCentralPage/TradingCentralPage";
import EconomicCalenderPage from "../pages/EconomicCalenderPage/EconomicCalenderPage";
import SpreadAdvantageHousPage from "../pages/SpreadAdvantageHousPage/SpreadAdvantageHousPage";
import OptionsPage from "../pages/OptionsPage/OptionsPage";
import Mt5SignalsPage from "../pages/Mt5SignalsPage/Mt5SignalsPage";

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
      <Route
        path="/trading-platforms/sarthi-nakala"
        element={<SarthiNakala />}
      />
      <Route
        path="/trading-platforms/sarthi-nakala"
        element={<SarthiNakala />}
      />
      <Route
        path="/trading-platforms/sarthi-ctrader"
        element={<SarthiCTraderPage />}
      />
      <Route
        path="/trading-platforms/sarthi-trader"
        element={<SarthiTraderPage />}
      />
      <Route path="/trading-platforms/sarthi-bot" element={<SarthiBotPage />} />
      <Route path="/trading-platforms/sarthi-go" element={<SarthiGo />} />

      <Route path="/trade/cfds" element={<CfdsPage />} />
      <Route path="/trade/options" element={<OptionsPage />} />

      <Route path="/markets/forex" element={<ForexMarket />} />
      <Route path="/markets/derived-indices" element={<DerivedIndicesPage />} />
      <Route path="/markets/stocks" element={<StocksPage />} />
      <Route path="/markets/stocks-indices" element={<StocksIndicesPage />} />
      <Route path="/markets/commodities" element={<CommoditiesPage />} />
      <Route path="/markets/crypto" element={<CryptoPage />} />
      <Route path="/markets/etf" element={<EtfPage />} />

      <Route path="/payment-methods" element={<PaymentMethodsPage />} />

      <Route path="/trading-view" element={<TradingViewPage />} />
      <Route path="/mt5-signals" element={<Mt5SignalsPage />} />
      <Route path="/trading-calculator" element={<TradingCalculatorPage />} />
      <Route path="/trading-central" element={<TradingCentralPage />} />
      <Route path="/economic-calendar" element={<EconomicCalenderPage />} />

      <Route path="/spread-advantage-hours" element={<SpreadAdvantageHousPage />} />
    </Routes>
  );
};

export default Routing;
