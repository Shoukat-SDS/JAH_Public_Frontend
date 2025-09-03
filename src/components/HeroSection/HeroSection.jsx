import { Link } from "react-router-dom"

export default function HeroSection({ title, breadcrumbs = [] }) {
    return (
        <div className="container-fluid hero-header">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <div className="hero-header-inner" data-aos="zoom-in"
                            data-aos-delay="100">
                            <h1 className="display-5 text-dark">{title}</h1>
                            <ol className="breadcrumb mb-0">
                                {breadcrumbs.map((item, index) => (
                                    <li
                                        key={index}
                                        className={`breadcrumb-item ${index === breadcrumbs.length - 1 ? "text-dark" : ""
                                            }`}
                                        aria-current={
                                            index === breadcrumbs.length - 1 ? "page" : undefined
                                        }
                                    >
                                        {item.path ? <Link to={item.path} className="primary text-decoration-none">{item.label}</Link> : item.label}
                                    </li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
