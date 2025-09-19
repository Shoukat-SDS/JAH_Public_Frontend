// data/departmentsData.js
import causeImage from '../assets/causeImage.png'

const departmentsData = [
  {
    id: "education",
    title: "Education",
    desc: "Delivering both Islamic and modern education through dedicated campuses.",
    image: causeImage,
    details: `
      Our Education Department ensures access to quality learning that blends 
      religious and contemporary studies. We run schools, madaris, and adult 
      learning programs to empower students with both faith and knowledge.
    `,
  },
  {
    id: "welfare",
    title: "Welfare",
    desc: "Empowering families with health, food, and financial assistance.",
    image: causeImage,
    details: `
      The Welfare Department provides free healthcare facilities, ration 
      distribution, widow and orphan support, as well as micro-finance programs 
      to uplift underprivileged communities.
    `,
  },
  {
    id: "masajid",
    title: "Masajid",
    desc: "Building, maintaining, and serving community mosques.",
    image: causeImage,
    details: `
      Our Masajid Department is devoted to constructing and maintaining mosques, 
      ensuring they remain centers of worship, learning, and community guidance 
      for all believers.
    `,
  },
]

export default departmentsData
