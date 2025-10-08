// components/DonateItems/DonateItems.jsx
import React, { useEffect, useState } from "react"
import itemsData from "../../data/itemsData"
import { useNavigate } from "react-router-dom"

const DonateItems = ({ onDonate, category }) => {
  const navigate = useNavigate()
  const [selectedCategory, setSelectedCategory] = useState(category || "All")
  const [filteredItems, setFilteredItems] = useState(itemsData)

  // Check URL parameters for category filter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const urlCategory = urlParams.get('category')
    if (urlCategory && !category) {
      setSelectedCategory(urlCategory)
    }
  }, [])

  // 🔹 Jab bhi category prop change ho → filter update karo
  useEffect(() => {
    const effectiveCategory = category || selectedCategory
    if (effectiveCategory && effectiveCategory !== "All") {
      const filtered = itemsData.filter((item) =>
        Array.isArray(item.category)
          ? item.category.includes(effectiveCategory)
          : item.category === effectiveCategory
      )
      setFilteredItems(filtered)
      setSelectedCategory(effectiveCategory) // ensure UI bhi sync rahe
    } else {
      setFilteredItems(itemsData)
    }
  }, [category, selectedCategory])

  // 🔹 Categories sirf tab dikhani hain jab prop category na di ho
  const categories = [
    "All",
    ...new Set(itemsData.flatMap((item) => item.category)),
  ]

  // Handle manual category selection and update URL
  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat)
    // Update URL without page reload
    const url = new URL(window.location)
    if (cat === 'All') {
      url.searchParams.delete('category')
    } else {
      url.searchParams.set('category', cat)
    }
    window.history.replaceState({}, '', url)
  }

  return (
    <div className="container py-4">
      {/* Filter buttons sirf jab category prop na ho */}
      {!category && (
        <div className="d-flex justify-content-center gap-4 mb-4">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 rounded-pill border-0 transition-all ${
                selectedCategory === cat 
                  ? "btn btn-bg-primary text-white shadow" 
                  : "btn btn-light text-muted hover-shadow"
              }`}
              onClick={() => handleCategoryChange(cat)}
              style={{ transition: 'all 0.3s ease' }}
            >
              {cat === 'All' ? 'All Projects' : cat}
            </button>
          ))}
        </div>
      )}

      {/* Items Grid */}
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {filteredItems.map((item) => (
          <div className="col" key={item.id}>
            <div className="card h-100 position-relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={item.img}
                alt={item.title}
                style={{ aspectRatio: '16 / 9', objectFit: 'cover' }}
                className="card-img-top w-100 h-64 object-cover aspect-ratio-3"
              />
              <div className="overlay position-absolute inset-0 h-100 w-100 d-flex align-items-center justify-content-center transition-opacity">
                <button
                  onClick={() => navigate(`/donate/${item.id}`)}
                  className="btn btn-bg-primary text-white px-5 py-2 rounded-md shadow-md"
                >
                  Donate Now
                </button>
              </div>

              <div className="card-body text-center">
                <h5 className="card-title font-bold">{item.title}</h5>
                {item.price && (
                  <p className="card-text text-secondary">{item.price}</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DonateItems

