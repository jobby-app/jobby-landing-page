import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { CookieBanner } from "./components/CookieBanner";
import { Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { CookiePolicy } from "./pages/legal/CookiePolicy";
import { PrivacyPolicy } from "./pages/legal/PrivacyPolicy";
import { TermsOfService } from "./pages/legal/TermsOfService";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
      </main>
      <Footer />
      <CookieBanner />
    </>
  );
}
