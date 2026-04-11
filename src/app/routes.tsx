import { createBrowserRouter } from "react-router";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileAppDevelopment from "./pages/services/MobileAppDevelopment";
import SoftwareDevelopment from "./pages/services/SoftwareDevelopment";
import UIUXDesign from "./pages/services/UIUXDesign";
import CloudDevOps from "./pages/services/CloudDevOps";
import Cybersecurity from "./pages/services/Cybersecurity";
import AIDataSolutions from "./pages/services/AIDataSolutions";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import Portfolio from "./pages/Portfolio";
import Industries from "./pages/Industries";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import FAQ from "./pages/FAQ";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import NotFound from "./pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "services", Component: Services },
      { path: "services/web-development", Component: WebDevelopment },
      { path: "services/mobile-app-development", Component: MobileAppDevelopment },
      { path: "services/software-development", Component: SoftwareDevelopment },
      { path: "services/ui-ux-design", Component: UIUXDesign },
      { path: "services/cloud-devops", Component: CloudDevOps },
      { path: "services/cybersecurity", Component: Cybersecurity },
      { path: "services/ai-data-solutions", Component: AIDataSolutions },
      { path: "services/digital-marketing", Component: DigitalMarketing },
      { path: "portfolio", Component: Portfolio },
      { path: "industries", Component: Industries },
      { path: "blog", Component: Blog },
      { path: "contact", Component: Contact },
      { path: "testimonials", Component: Testimonials },
      { path: "faq", Component: FAQ },
      { path: "careers", Component: Careers },
      { path: "privacy", Component: Privacy },
      { path: "terms", Component: Terms },
      { path: "*", Component: NotFound },
    ],
  },
]);
