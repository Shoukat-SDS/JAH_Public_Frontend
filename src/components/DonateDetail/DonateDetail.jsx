// components/DonateDetail/DonateDetail.jsx
import React, { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import HeroSection from "../../components/HeroSection/HeroSection"
import itemsData from "../../data/itemsData"
import Swal from "sweetalert2"
import AOS from "aos"
import "aos/dist/aos.css"

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
    const [copiedField, setCopiedField] = useState("")

    useEffect(() => {
        AOS.init({ duration: 1000 })
    }, [])

    if (!item) return (
        <div className="container py-5 text-center">
            <h2 className="secondary">Item not found</h2>
            <Link to="/donate" className="btn btn-bg-primary text-white mt-3">
                Return to Donations
            </Link>
        </div>
    )

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

    const handleCopy = async (text, field) => {
        try {
            // If Clipboard API is available and allowed, use it
            if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
                await navigator.clipboard.writeText(text)
            } else {
                // Fallback for insecure contexts or older browsers:
                const textarea = document.createElement('textarea')
                textarea.value = text
                textarea.setAttribute('readonly', '')
                textarea.style.position = 'absolute'
                textarea.style.left = '-9999px'
                document.body.appendChild(textarea)
                textarea.select()
                document.execCommand('copy')
                document.body.removeChild(textarea)
            }

            setCopiedField(field)
            setTimeout(() => setCopiedField(""), 2000)

            Swal.fire({
                icon: "success",
                title: "Copied!",
                text: "The text has been copied to your clipboard",
                timer: 1500,
                toast: true,
                position: 'top-end',
                showConfirmButton: false
            })
        } catch (err) {
            console.error("Copy failed", err)
            Swal.fire({
                icon: "error",
                title: "Copy failed",
                text: "Could not copy to clipboard. Please copy manually.",
                toast: true,
                position: 'top-end',
                timer: 2000,
                showConfirmButton: false
            })
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
                <div className="row g-5 justify-content-center">
                    {/* Left Column */}
                    <div className="col-lg-5" data-aos="fade-right">
                        <div className="position-relative overflow-hidden rounded-4 shadow-lg h-100">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="img-fluid w-100"
                                style={{ 
                                    height: "100%", 
                                    minHeight: "400px",
                                    objectFit: "cover",
                                    transition: "transform 0.5s" 
                                }}
                                onMouseOver={(e) => e.target.style.transform = "scale(1.1)"}
                                onMouseOut={(e) => e.target.style.transform = "scale(1)"}
                            />
                            <div className="position-absolute bottom-0 start-0 w-100 p-4" 
                                style={{ background: "rgba(0,0,0,0.7)" }}>
                                <h2 className="text-white mb-2">{item.title}</h2>
                                <p className="text-light mb-0">
                                    Category: {Array.isArray(item.category) ? item.category.join(', ') : item.category}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="col-lg-7" data-aos="fade-left">
                        <div className="card border-0 shadow-lg">
                            <div className="card-body p-4">
                                <h4 className="secondary mb-4">Make Your Donation</h4>
                                
                                {/* Donation Type Selection */}
                                <div className="mb-4">
                                    <label className="form-label fw-medium primary">Type of Donation:</label>
                                    <select
                                        value={donationType}
                                        onChange={(e) => setDonationType(e.target.value)}
                                        className="form-select form-select-lg"
                                    >
                                        <option value="">Select donation type</option>
                                        {donationTypes.map(type => (
                                            <option key={type.id} value={type.id}>
                                                {type.label}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Bank Account Details */}
                                <div className="mb-4">
                                    <h5 className="primary mb-3">
                                        <i className="fas fa-university me-2"></i>
                                        Bank Account Details
                                    </h5>
                                    {bankAccounts.map((account, index) => (
                                        <div key={index} className="card bg-light border-0 mb-3">
                                            <div className="card-body">
                                                <h6 className="secondary mb-3">{account.bankName}</h6>
                                                
                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <div>
                                                        <small className="text-muted d-block">Account Title</small>
                                                        <strong>{account.accountTitle}</strong>
                                                    </div>
                                                    <button 
                                                        type="button"
                                                        aria-label="Copy account title"
                                                        className="btn btn-sm secondary"
                                                        onClick={() => handleCopy(account.accountTitle, 'title')}
                                                    >
                                                        <i className={`fas ${copiedField === 'title' ? 'fa-check' : 'fa-copy'}`}></i>
                                                    </button>
                                                </div>

                                                <div className="d-flex justify-content-between align-items-center mb-2">
                                                    <div>
                                                        <small className="text-muted d-block">Account Number</small>
                                                        <strong>{account.accountNumber}</strong>
                                                    </div>
                                                    <button 
                                                        type="button"
                                                        aria-label="Copy account number"
                                                        className="btn btn-sm secondary"
                                                        onClick={() => handleCopy(account.accountNumber, 'number')}
                                                    >
                                                        <i className={`fas ${copiedField === 'number' ? 'fa-check' : 'fa-copy'}`}></i>
                                                    </button>
                                                </div>

                                                <div className="d-flex justify-content-between align-items-center">
                                                    <div>
                                                        <small className="text-muted d-block">IBAN</small>
                                                        <strong>{account.iban}</strong>
                                                    </div>
                                                    <button 
                                                        type="button"
                                                        aria-label="Copy IBAN"
                                                        className="btn btn-sm secondary"
                                                        onClick={() => handleCopy(account.iban, 'iban')}
                                                    >
                                                        <i className={`fas ${copiedField === 'iban' ? 'fa-check' : 'fa-copy'}`}></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Invoice Upload */}
                                <div className="mb-4">
                                    <label className="form-label primary">
                                        <i className="fas fa-file-invoice me-2"></i>
                                        Upload Payment Invoice
                                    </label>
                                    <div className="input-group">
                                        <input
                                            type="file"
                                            onChange={handleInvoiceChange}
                                            className="form-control form-control-lg"
                                            accept="image/*,.pdf"
                                        />
                                    </div>
                                    {invoice && (
                                        <div className="alert alert-success mt-2 d-flex align-items-center">
                                            <i className="fas fa-check-circle me-2"></i>
                                            Invoice uploaded successfully
                                        </div>
                                    )}
                                </div>

                                {/* Submit Button */}
                                <button
                                    onClick={handleDonate}
                                    className="btn btn-bg-primary text-white w-100 py-3"
                                    disabled={!donationType || !invoice}
                                >
                                    <i className="fas fa-heart me-2"></i>
                                    {!donationType || !invoice ? 'Complete Required Fields' : 'Submit Donation'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DonateDetail
