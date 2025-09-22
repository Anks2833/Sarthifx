import { useLocation } from "react-router-dom";
import Routing from "./utils/Routing";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
  const location = useLocation();

  const hideNavbarRoutes = ["/login", "/register"];

  const shouldShowNavbar = !hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      <Routing />
    </>
  );
};

export default App;
