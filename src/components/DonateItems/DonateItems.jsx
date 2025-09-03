import React, { useState } from "react"
import itemsData from "../../data/itemsData"
import { useNavigate } from "react-router-dom"

const categories = ["All", "Welfare", "Education"]

const DonateItems = ({ onDonate }) => {
    const navigate = useNavigate()
    const [selectedCategory, setSelectedCategory] = useState("All")

    const categories = [
        "All",
        ...new Set(itemsData.flatMap((item) => item.category)),
    ]

    const filteredItems =
    selectedCategory === "All"
      ? itemsData
      : itemsData.filter((item) =>
          Array.isArray(item.category)
            ? item.category.includes(selectedCategory)
            : item.category === selectedCategory
        )

    return (
        <div className="container py-1">
            <div className="d-flex justify-content-center gap-4 mb-3">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        className={`px-4 py-2 rounded-md ${selectedCategory === cat
                            ? "btn btn-success"
                            : "btn btn-light"
                            }`}
                        onClick={() => setSelectedCategory(cat)}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                {filteredItems.map((item) => (
                    <div className="col" key={item.id}>
                        <div className="card h-100 position-relative rounded-xl overflow-hidden shadow-lg">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="card-img-top w-100 h-64 object-cover"
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
