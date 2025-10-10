// data/itemsData.js
import AdultEducationProgtram from '../assets/Adult-Education-Progtram.jpg'
import BaitussalamSchool from '../assets/Baitussalam-School.jpg'
import FreeMedicalDispensory from '../assets/Free-Medical-Dispensory.jpg'
import MosqueDevelopment from '../assets/Mousue-Development.jpg'
import BaitussalamEyeClinic from '../assets/Baitussalam-Eye-Clinic.jpg'
import Solar from '../assets/Solar.jpg'
import RO from '../assets/Ro.jpg'
import ScholorShip from '../assets/Scholorship.jpg'

const itemsData = [
  // --- Education ---
  {
    id: 1,
    title: "Baitusslam School",
    category: ["Education"],
    img: BaitussalamSchool,
    desc: "Providing quality Islamic and modern education for children.",
    slug: "baitussalam-school",
  },
  {
    id: 2,
    title: "Baitusslam Madrassa",
    category: ["Education"],
    img: AdultEducationProgtram,
    desc: "Focused on Islamic studies and Quranic education.",
    slug: "baitussalam-madrassa",
  },
  {
    id: 3,
    title: "Student Sponsorship",
    category: ["Education"],
    img: ScholorShip,
    desc: "Sponsor tuition, books, and uniforms for a deserving student.",
    slug: "student-sponsorship",
  },

  // --- Masajid ---
  {
    id: 4,
    title: "Masjid Baitussalam",
    category: ["Welfare"],
    img: MosqueDevelopment,
    desc: "A mosque serving the Azizabad community for prayers and gatherings.",
    slug: "masjid-baitussalam",
  },
  {
    id: 5,
    title: "Monthly Masjid Support",
    category: ["Welfare"],
    img: MosqueDevelopment,
    desc: "Cover operational expenses like electricity, water, and maintenance.",
    slug: "monthly-masjid-support",
  },
  {
    id: 6,
    title: "Solar System Fund",
    category: ["Welfare"],
    img: Solar,
    desc: "Help install solar energy systems in masajid for sustainability.",
    slug: "solar-system-fund",
  },
  {
    id: 7,
    title: "RO Plant Installation",
    category: ["Welfare"],
    img: RO,
    desc: "Sponsor clean water facilities for worshippers.",
    slug: "ro-plant-installation",
  },

  // --- Welfare ---
 
  {
    id: 10,
    title: "Free Dispensary Fund",
    category: ["Welfare", "Health"],
    img: FreeMedicalDispensory,
    desc: "Help provide free medicines and healthcare for patients.",
    slug: "free-dispensary-fund",
  },
  {
    id: 11,
    title: "Eye Clinic Donation",
    category: ["Welfare", "Health"],
    img: BaitussalamEyeClinic,
    desc: "Support affordable eye care and treatment for the poor.",
    slug: "eye-clinic-donation",
  },

  // --- Health ---
  {
    id: 14,
    title: "Medical Lab Equipment",
    category: ["Welfare", "Health"],
    img: BaitussalamEyeClinic,
    desc: "Help establish a diagnostic laboratory for community healthcare.",
    slug: "medical-lab-equipment",
  },
]

export default itemsData
