import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Technology from "./Pages/Technology";
import Software from "./Pages/Software";
import Course from "./Pages/Course";
import All from "./Pages/All";
import Search from "./Pages/Search";
import Authenticate from "./Pages/Authenticate";
import ProductDetail from "./Pages/ProductDetail";

function AppContent() {
  const location = useLocation();
  const isCompact = ["/cart", "/profile"].includes(location.pathname);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar variant={isCompact ? "compact" : "full"} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/software" element={<Software />} />
          <Route path="/course" element={<Course />} />
          <Route path="/all" element={<All />} />
          <Route path="/search" element={<Search />} />
          <Route path="/:type/:id" element={<ProductDetail />} />
          <Route path="/authenticate" element={<Authenticate />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
