import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css'
import Spinner from './components/Spinner/Spinner'
import Home from "./pages/Home/Home"
import Layout from "./components/Layout/Layout"
import About from "./pages/About/About"
import Activities from "./pages/Activites/Activities"
import Blog from "./pages/Blog/Blog"
import Team from "./pages/Team/Team"
import Contact from "./pages/Contact/Contact"
import Error from "./pages/Error/Error"
import Donate from "./pages/Donate/Donate"
import DonateDetail from "./components/DonateDetail/DonateDetail"
import ProjectDetails from "./pages/ProjectDetails/PorjectDetails"
import Projects from "./pages/Projects/Projects"

function App() {


  return (
    <>
      <Spinner />
      <Router>
        <Routes>
          {/* Layout ke andar pages */}
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/donate/:id" element={<DonateDetail />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/project-details" element={<ProjectDetails />} />
            <Route path="*" element={<Error />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
