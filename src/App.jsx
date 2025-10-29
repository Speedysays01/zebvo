// App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";
import AuthPage from "./pages/AuthPage";
import Navbar from "./components/Navbar"; // assuming you have this
import Faq from "./components/Faq";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
     <Route
    path="/"
    element={
      <>
        <Hero />
        <Faq />
        <Footer/>
      </>
    }
  />
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
    </Router>
  );
}

export default App;
