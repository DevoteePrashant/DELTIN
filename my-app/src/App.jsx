
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home.jsx"
import About from "./pages/About.jsx"
import Products from "./pages/Products.jsx"
import SingleProduct from "./pages/SingleProduct.jsx"
import Services from "./pages/Services.jsx"
import Blog from "./pages/Blog.jsx"
import SingleBlog from "./pages/SingleBlog.jsx"
import Inquiry from "./pages/Inquiry.jsx"
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx"
import TermsConditions from "./pages/TermsConditions.jsx"
import Explore from "./pages/Explore.jsx"
import Footer from "./components/Footer.jsx"
import "./index.css"

const App = () => {
  return (
    <Router>
    <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/SingleProduct" element={<SingleProduct />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/SingleBlog" element={<SingleBlog />} />
          <Route path="/inquiry" element={<Inquiry />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>

      {/* Footer */}
      {/* <div className="relative z-10">
        <Footer />
      </div> */}
    </Router>
  )
}

export default App

