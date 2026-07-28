import React, { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ScrollToTop from "./Components/ScrollToTop";

// Lazy-loaded pages
const Service = lazy(() => import("./Pages/Service"));
const Work = lazy(() => import("./Pages/Work"));
const About = lazy(() => import("./Pages/About"));
const Blog = lazy(() => import("./Pages/Blog"));
const BlogDetail = lazy(() => import("./Pages/BlogDetail"));
const Digital = lazy(() => import("./Pages/Digital"));
const Contact = lazy(() => import("./Pages/Contact"));
const Careers = lazy(() => import("./Pages/Career"));
const ApplyNow = lazy(() => import("./Components/ApplyNow"));
const Portfolio = lazy(() => import("./Pages/Portfolio"));
const DigitalMarketingPortfolio = lazy(
  () => import("./Pages/DigitalMarketingPortfolio"),
);
const PerformanceMarketingPortfolio = lazy(
  () => import("./Pages/PerformanceMarketingPortfolio"),
);
const BrandingPortfolio = lazy(() => import("./Pages/BrandingPortfolio"));
const UIUXPortfolio = lazy(() => import("./Pages/UIUXPortfolio"));
const CreativeDesignPortfolio = lazy(
  () => import("./Pages/CreativeDesignPortfolio"),
);

const App = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Suspense
        fallback={
          <div
            className="flex min-h-[60vh] items-center justify-center"
            role="status"
            aria-live="polite"
          >
            <p className="text-base font-medium text-gray-700">Loading...</p>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
          <Route path="/works" element={<Work />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Careers />} />
          <Route path="/applyNow" element={<ApplyNow />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route
            path="/portfolio/digital-marketing"
            element={<DigitalMarketingPortfolio />}
          />
          <Route
            path="/portfolio/performance-marketing"
            element={<PerformanceMarketingPortfolio />}
          />
          <Route path="/portfolio/branding" element={<BrandingPortfolio />} />
          <Route path="/portfolio/ui-ux" element={<UIUXPortfolio />} />
          <Route
            path="/portfolio/creative-design"
            element={<CreativeDesignPortfolio />}
          />

          {/* Redirect uppercase URL to the correct lowercase URL */}
          <Route path="/Digital" element={<Navigate to="/digital" replace />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
};

export default App;
