// components/DonateDetail/DonateDetail.jsx
import React, { useState } from "react"
import { useParams } from "react-router-dom"
import HeroSection from "../../components/HeroSection/HeroSection"
import itemsData from "../../data/itemsData"
import Swal from "sweetalert2";

const donationTypes = [
    { id: 'sadaqa-wajiba', label: 'Sadaqa-e-Wajiba' },
    { id: 'sadaqa-nafila', label: 'Sadaqa-e-Naafila' },
    { id: 'zakat', label: 'Zakat' },
    { id: 'sadqa-fitr', label: 'Sadaqa-tul-fitr' }
]

const bankAccounts = [
    {
        bankName: 'United Bank Limited (UBL)',
        accountTitle: 'JAMAT E AHLE HADIS KARACHI (JAH)',
        accountNumber: '325408976',
        iban: 'PK40UNIL0109000325408976'
    }
]

const DonateDetail = () => {
    const { id } = useParams()
    const item = itemsData.find((i) => i.id === Number(id))

    const [donationType, setDonationType] = useState("")
    const [invoice, setInvoice] = useState(null)

    if (!item) return <p className="text-center py-20">Item not found</p>

    const handleInvoiceChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onload = (e) => {
                const base64String = e.target.result
                setInvoice(base64String)
                // Store in localStorage
                localStorage.setItem('lastInvoice', base64String)
            }
            reader.readAsDataURL(file)
        }
    }

    const handleDonate = () => {
        if (!donationType) {
            Swal.fire({
                icon: "warning",
                title: "Missing Donation Type",
                text: "Please select a donation type",
            });
            return;
        }
        if (!invoice) {
            Swal.fire({
                icon: "error",
                title: "No Invoice",
                text: "Please upload an invoice",
            });
            return;
        }

        // Here you would typically send this to your backend
        const donationData = {
            itemId: item.id,
            itemTitle: item.title,
            donationType,
            invoice,
            timestamp: new Date().toISOString(),
        };

        console.log("Donation data to be saved:", donationData);

        Swal.fire({
            icon: "success",
            title: "Donation Recorded!",
            text: "✅ Donation recorded successfully!",
            timer: 2000,
            showConfirmButton: false,
        });

        // Reset form
        setDonationType("");
        setInvoice(null);
        // Clear from localStorage
        localStorage.removeItem("lastInvoice");
    };

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
                        <h2 className="fw-bold mb-2 primary">{item.title}</h2>

                        <p className="secondary mb-3">
                            <strong className="text-muted fs-6">Category:</strong> {item.category}
                        </p>

                        <div className="mb-3">
                            <label className="form-label fw-medium primary">Type of Donation:</label>
                            <select
                                value={donationType}
                                onChange={(e) => setDonationType(e.target.value)}
                                className="form-select"
                            >
                                <option value="">Select donation type</option>
                                {donationTypes.map(type => (
                                    <option key={type.id} value={type.id}>
                                        {type.label}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="bank-accounts mb-3">
                            <h5 className="fw-bold mb-3 primary">Bank Account Details:</h5>
                            {bankAccounts.map((account, index) => (
                                <div key={index} className="card mb-3 border-primary border-opacity-25">
                                    <div className="card-body">
                                        <h6 className="card-title fw-bold secondary">{account.bankName}</h6>
                                        <p className="card-text mb-1">
                                            <small className="text-muted">Account Title:</small> {account.accountTitle}
                                        </p>
                                        <p className="card-text mb-1">
                                            <small className="text-muted">Account Number:</small> {account.accountNumber}
                                        </p>
                                        <p className="card-text mb-0">
                                            <small className="text-muted">IBAN:</small> {account.iban}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="mb-4">
                            <label className="form-label fw-medium primary">Upload Invoice:</label>
                            <input
                                type="file"
                                onChange={handleInvoiceChange}
                                className="form-control"
                                accept="image/*,.pdf"
                            />
                            {invoice && (
                                <small className="text-success d-block mt-2">
                                    ✓ Invoice uploaded successfully
                                </small>
                            )}
                        </div>

                        <button
                            onClick={handleDonate}
                            className="btn btn-bg-primary text-white fw-bold px-4 py-2"
                            disabled={!donationType || !invoice}
                        >
                            SUBMIT DONATION
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonateDetail
