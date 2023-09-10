import './App.css';
import Navbar from './components/navbar';
import Loader from "./components/loader";
// import Footer from "./components/footer";
import Homepage from './pages/homepage';
import Form from "./pages/form";
import Successful from './pages/successful';
import WebTeam from './pages/webteam';
import AboutUs from './pages/aboutus';
import Contact from './pages/contact';
import TermsConditions from './pages/termsConditions';
import PrivacyPolicy from './pages/privacyPolicy';
import ShippingDelivery from './pages/shippingDelivery';
import CancellationRefund from './pages/cancellationRefund';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {
  const [loading, setLoading] = useState(false)

  return (
    <BrowserRouter>
      <Navbar />
      {loading ? <Loader /> : <></>}

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Form loading={loading} setLoading={setLoading} />} />
        <Route path="/web-team" element={<WebTeam />} />
        <Route path="/success" element={<Successful setLoading={setLoading} />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/terms-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/shipping-delivery" element={<ShippingDelivery />} />
        <Route path="/cancellation-refund" element={<CancellationRefund />} />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
