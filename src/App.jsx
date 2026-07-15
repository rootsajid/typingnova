import { Routes, Route } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./pages/Home/Home";
import Test from "./pages/Test/Test";
import Result from "./pages/Result/Result";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-[#09090b] text-white">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<Test />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;