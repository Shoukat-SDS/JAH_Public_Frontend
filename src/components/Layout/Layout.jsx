// component/Layout/Layout.jsx
import { Outlet } from "react-router-dom"
import Topbar from "../Topbar/Topbar"
import Footer from "../Footer/Footer"
import BackToTop from "../BackToTop/BackToTop"

export default function Layout() {
  return (
    <>
      {/* Topbar fixed-top */}
      <Topbar />

      {/* Yahan pages ka content render hoga */}
      <main>
        <Outlet />
      </main>

      {/* Common components */}
      <Footer />
      <BackToTop />
    </>
  )
}
