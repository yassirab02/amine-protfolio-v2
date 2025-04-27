import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import StillsPage from "./pages/StillsPage";
import MotionPage from "./pages/MotionPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import PortfolioPage from "./pages/PortfolioPage";
import NotFoundPage from "./pages/NotFoundPage";
import { AnimatePresence } from "framer-motion";
import { SpeedInsights } from "@vercel/speed-insights/react";

function App() {
  return (
    <>
      <SpeedInsights />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="stills" element={<StillsPage />} />
            <Route path="motion" element={<MotionPage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="portfolio" element={<PortfolioPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
