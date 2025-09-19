// components/Spinner/Spinner.jsx
import { useState, useEffect } from "react"

export default function Spinner() {
  const [loading, setLoading] = useState(true)

  // Example: spinner 2 sec ke liye dikhaye
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  if (!loading) return null

  return (
    <div
      id="spinner"
      className="show w-100 vh-100 bg-white position-fixed translate-middle top-50 start-50 d-flex align-items-center justify-content-center"
    >
      <div className="spinner-grow secondary" role="status"></div>
    </div>
  )
}
