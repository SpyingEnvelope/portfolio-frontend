import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";

import AnimatedRoutes from "./components/AnimatedRoutes";
import ScrollToTop from "./components/util/ScrollToTop";
import MainNavigation from "./components/MainNavigation/MainNavigation";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <MainNavigation />
      <AnimatedRoutes />
      <Footer />
    </Router>
  );
}

export default App;
