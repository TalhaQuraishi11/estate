import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "./styles/index.scss";
import ScrollToTop from "./components/common/ScrollTop";
import ScrollTopBehaviour from "./components/common/ScrollTopBehavier";

// Importing specific pages for routing
import RealEstate from "./pages/home/real-estate";
import AboutUsV2 from "./pages/pages-menu/about-us-v2";

import ServiceV2 from "./pages/pages-menu/service-v2";

import ServiceDetails from "./pages/pages-menu/service-details";
import TeamV1 from "./pages/pages-menu/team-v1";

import Testimonials from "./pages/pages-menu/testimonials";
import LogIn from "./pages/login";
import SignUp from "./pages/signup";
import NotFound from "./pages/404";
import DynamicPortfolioDetails from "./pages/portfolio/portfolio-single";
import DynamicBlogDetails from "./pages/blog/blog-single";
import ContactV1 from "./pages/contact/contact-v1";
import ContactV2 from "./pages/contact/contact-v2";
import ContactV3 from "./pages/contact/contact-v3";
import ContactV4 from "./pages/contact/contact-v4";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <div className="main-page-wrapper">
      <Router>
        <ScrollTopBehaviour />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<RealEstate />} />

          <Route path="pages-menu/about-us-v2" element={<AboutUsV2 />} />
       

          <Route path="pages-menu/service-v2" element={<ServiceV2 />} />
         
          <Route path="pages-menu/service-details" element={<ServiceDetails />} />

          <Route path="pages-menu/team-v1" element={<TeamV1 />} />

          
     

          <Route path="pages-menu/testimonials" element={<Testimonials />} />
          <Route path="login" element={<LogIn />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="404" element={<NotFound />} />

          <Route path="portfolio/:id" element={<DynamicPortfolioDetails />} />
          <Route path="blog/:id" element={<DynamicBlogDetails />} />
          <Route path="contact/contact-v1" element={<ContactV1 />} />
          <Route path="contact/contact-v2" element={<ContactV2 />} />
          <Route path="contact/contact-v3" element={<ContactV3 />} />
          <Route path="contact/contact-v4" element={<ContactV4 />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
