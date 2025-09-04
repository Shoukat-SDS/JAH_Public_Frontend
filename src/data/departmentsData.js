// src/data/departmentsData.js
// import eduImg from "../assets/education.jpg"
// import welfareImg from "../assets/welfare.jpg"
// import masjidImg from "../assets/masjid.jpg"
import causeImage from '../assets/causeImage.png'

const departmentsData = [
  {
    id: "education",
    title: "Education",
    desc: "Providing quality Islamic and modern education across multiple campuses.",
    image: causeImage,
    details: `
      Our Education department is focused on religious and worldly education. 
      We run schools, madaris, and learning centers for both children and adults.
    `,
  },
  {
    id: "welfare",
    title: "Welfare",
    desc: "Supporting the community through health, food, and financial aid.",
    image: causeImage,
    details: `
      The Welfare department provides free dispensaries, ration distribution, 
      and support programs for underprivileged families.
    `,
  },
  {
    id: "masajid",
    title: "Masajid",
    desc: "Building and maintaining mosques for the community.",
    image: causeImage,
    details: `
      Our Masajid department is responsible for mosque construction, 
      maintenance, and religious gatherings for the community.
    `,
  },
]

export default departmentsData
