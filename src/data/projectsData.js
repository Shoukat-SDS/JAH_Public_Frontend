// data/projectsData.js
import AdultEducationProgtram from '../assets/Adult-Education-Progtram.jpg'
import BaitussalamSchool from '../assets/Baitussalam-School.jpg'
import FreeMedicalDispensory from '../assets/Free-Medical-Dispensory.jpg'
import MosqueDevelopment from '../assets/Mousue-Development.jpg'
import BaitussalamEyeClinic from '../assets/Baitussalam-Eye-Clinic.jpg'
import Solar from '../assets/Solar.jpg'
import RO from '../assets/Ro.jpg'
import ScholorShip from '../assets/Scholorship.jpg'

const projectsData = [
    {
        id: 1,
        icon: "FaSchool",
        title: "Religious & Modern Education",
        desc: "Delivering a balanced blend of Islamic knowledge and modern academics through our four campuses across Karachi, nurturing students spiritually and intellectually.",
        image: BaitussalamSchool,
    },
    {
        id: 2,
        icon: "FaMosque",
        title: "Mosques Development",
        desc: "Building, maintaining, and supporting mosques across various communities, ensuring they remain centers of worship, learning, and guidance.",
        image: MosqueDevelopment,
    },
    {
        id: 3,
        icon: "FaClinicMedical",
        title: "Free Medical Dispensary",
        desc: "Providing free OPD consultations and medicines daily, benefitting nearly 200 patients with accessible primary healthcare.",
        image: FreeMedicalDispensory,
    },
    {
        id: 4,
        icon: "FaEye",
        title: "Baitussalam Eye Clinic",
        desc: "Offering affordable eye checkups for just Rs.50, providing prescription glasses, and distributing free eye drops to those in need.",
        image: BaitussalamEyeClinic,
    },
    {
        id: 5,
        icon: "FaBookOpen",
        title: "Adult Education Program",
        desc: "Education for uneducated adults",
        details: "Literacy and basic Islamic education classes in community masajid to promote lifelong learning and empowerment.",
        image: AdultEducationProgtram,
    },
    {
        id: 6,
        icon: "FaGraduationCap",
        title: "Scholarship Initiative",
        desc: "Education for deserving students",
        details: "Offering full and partial scholarships to underprivileged students across all campuses.",
        image: ScholorShip,
    },
    {
        id: 7,
        icon: "FaSolarPanel",
        title: "Solar System Installation",
        desc: "Renewable energy for masajid",
        details: "Implementing solar power systems across all masajid to ensure uninterrupted worship and sustainability.",
        image: Solar,
    },
    {
        id: 8,
        icon: "FaWater",
        title: "R.O. Water Plant Project",
        desc: "Clean water for worshippers",
        details: "Installing Reverse Osmosis (R.O.) plants in masajid for free and safe drinking water.",
        image: RO,
    },
    // {
    //     id: 9,
    //     icon: "FaHandsHelping",
    //     title: "Orphan & Widow Support Program",
    //     desc: "Financial and moral support",
    //     details: "Providing monthly financial assistance, food, and counseling to orphans, widows, and disabled individuals.",
    //     image: causeImage,
    // },
    // {
    //     id: 10,
    //     icon: "FaHandHoldingUsd",
    //     title: "Ration Distribution Drive",
    //     desc: "Monthly food packages",
    //     details: "Supplying essential food items to low-income families on a regular basis.",
    //     image: causeImage,
    // },
    // {
    //     id: 11,
    //     icon: "FaBriefcase",
    //     title: "Employment & Skill Development",
    //     desc: "Empowering jobless individuals",
    //     details: "Launching training programs to teach employable skills to both men and women.",
    //     image: causeImage,
    // },
    // {
    //     id: 12,
    //     icon: "FaHandHoldingUsd",
    //     title: "Debt Relief Program",
    //     desc: "Helping people in debt",
    //     details: "Providing financial support to help individuals clear their debts and rebuild their lives.",
    //     image: causeImage,
    // }
]

export default projectsData