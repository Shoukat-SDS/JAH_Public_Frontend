// data/departmentsData.js
import causeImage from '../assets/causeImage.png'

const departmentsData = [
  {
    id: "education",
    title: "Education",
    desc: "Integrating Islamic values with modern education across multiple campuses.",
    image: causeImage,
    sections: [
      {
        heading: "Overview",
        content: `
          Our Education Department runs across four main campuses located in Azizabad, 
          FB Area, Surjani Town, and Soldier Bazaar (Dar-ul-Hadith Rahmaniya). 
          We provide a balanced curriculum that includes both Islamic studies and 
          modern academic subjects, preparing students to succeed in both worlds.
        `,
      },
      {
        heading: "Programs Offered",
        list: [
          "Diploma in Arabic Language",
          "Adult Education Programs (Taleem-ul-Balighan)",
          "Scholarships for deserving students",
          "Skill Development Courses for youth and adults",
        ],
      },
      {
        heading: "Vision",
        content: `
          Our educational vision ensures that every student receives not only 
          academic excellence but also moral and spiritual guidance rooted in Islamic values.
        `,
      },
    ],
  },
  {
    id: "welfare",
    title: "Welfare",
    desc: "Serving humanity through healthcare, aid, and empowerment programs.",
    image: causeImage,
    sections: [
      {
        heading: "Overview",
        content: `
          Our Welfare Department focuses on uplifting underprivileged families and individuals 
          through various humanitarian initiatives that combine compassion, care, and empowerment.
        `,
      },
      {
        heading: "Major Welfare Initiatives",
        list: [
          "Free Medical Dispensary (Azizabad): Treating over 200 patients daily with free OPD and medicines.",
          "Bait-us-Salaam Eye Clinic: Comprehensive eye examinations and affordable treatments at just Rs.50, including eyeglasses and eye drops when needed.",
          "Orphan, Widow, and Disabled Support Program",
          "Monthly Ration Distribution for needy families",
          "Employment & Skill Programs to empower the jobless",
          "Debt Relief Assistance for those in financial hardship",
        ],
      },
      {
        heading: "Future Plans",
        list: [
          "Establish a fully equipped Medical Laboratory",
          "Set up an Eye Surgery Unit for advanced community care",
        ],
      },
    ],
  },
  {
    id: "masajid",
    title: "Masajid",
    desc: "Developing and sustaining masajid as centers of worship and learning.",
    image: causeImage,
    sections: [
      {
        heading: "Overview",
        content: `
          Our Masajid serve as the spiritual and communal heart of our mission. 
          We manage and support multiple mosques across Karachi, providing spaces 
          for worship, learning, and community development.
        `,
      },
      {
        heading: "Key Masajid Managed",
        list: [
          "Jamia Masjid Sufaid, Soldier Bazaar — Monthly expense: Rs. 300,000",
          "Jamia Masjid Bait-us-Salaam, Azizabad — Monthly expense: Rs. 5,000,000",
          "Jamia Masjid Ilyas, Ayesha Manzil",
          "Jamia Masjid Markaz-ul-Furqan, Dastagir FB Area Block 7",
          "Masjid & Madrasa Hasnain bin Ali, KBR Society",
          "Jamia Masjid Abu Hurairah, Surjani Town",
          "Jamia Masjid Ali bin Khaflan, Shireen Jinnah Colony, Keamari",
          "Jamia Masjid Allah Wali, Allah Wala Town, Korangi",
          "Jamia Masjid & Madrasa Abdul Mateen, Mianwali Colony, Banaras",
          "Jamia Masjid & Madrasa Abdul Mateen, Golimar",
        ],
      },
      {
        heading: "Future Plans",
        list: [
          "Solar Power Systems installation for all masajid",
          "R.O. Plants to provide clean drinking water to worshippers",
        ],
      },
    ],
  },
]

export default departmentsData
