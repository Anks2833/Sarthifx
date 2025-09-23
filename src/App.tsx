import { useLocation } from "react-router-dom";
import Routing from "./utils/Routing";
import Navbar from "./components/Navbar/Navbar";
import ChatIcons from "./components/ChatIcons/ChatIcons";
import Footer from "./components/Footer/Footer";

const App = () => {
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/register"];
  const hiddenSideIconRoutes = ["/login", "/register"];

  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);
  const showSideIcons = !hiddenSideIconRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {showSideIcons && <ChatIcons />}
      <Routing />
      <Footer />
    </>
  );
};

export default App;
