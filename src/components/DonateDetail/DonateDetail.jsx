import React, { useState } from "react"
import { useParams } from "react-router-dom"
import HeroSection from "../../components/HeroSection/HeroSection"
import itemsData from "../../data/itemsData"

const DonateDetail = () => {
    const { id } = useParams()
    const item = itemsData.find((i) => i.id === Number(id))

    const [amount, setAmount] = useState("")

    if (!item) return <p className="text-center py-20">Item not found</p>

    const handleDonate = () => {
        alert(`✅ You donated ${amount} to ${item.title}`)
        setAmount("")
    }

    return (
        <div>
            <HeroSection
                title={item.title}
                breadcrumbs={[
                    { label: "Home", path: "/" },
                    { label: "Donation", path: "/donate" },
                    { label: item.title },
                ]}
            />

            <div className="container py-5">
                <div className="row align-items-center g-5">
                    {/* Left Image */}
                    <div className="col-md-6">
                        <img
                            src={item.img}
                            alt={item.title}
                            className="img-fluid rounded shadow"
                            style={{ height: "320px", objectFit: "cover", width: "100%" }}
                        />
                    </div>

                    {/* Right Details */}
                    <div className="col-md-6">
                        <h2 className="fw-bold mb-4 primary">{item.title}</h2>

                        {item.price && (
                            <p className="secondary mb-2">
                                <strong className="text-muted fs-6">Suggested:</strong> {item.price}
                            </p>
                        )}

                        <div className="my-3">
                            <label className="form-label fw-medium primary">Amount:</label>
                            <input
                                type="number"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)}
                                className="form-control"
                                placeholder="Enter amount"
                            />
                        </div>

                        <button
                            onClick={handleDonate}
                            className="btn btn-bg-primary text-white fw-bold px-4 py-2"
                        >
                            DONATE
                        </button>
                        <p className="secondary my-2">
                            <strong className="text-muted fs-6">Category:</strong> {item.category}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonateDetail
