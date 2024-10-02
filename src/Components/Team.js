import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import member1 from '../Assets/member1.jpg'
import member2 from '../Assets/member2.jpg'
import member3 from '../Assets/member3.jpg'
import member4 from '../Assets/member4.jpg'

const teamMembers = [
  { name: 'Danny Hayes', role: 'MASTER', image: member1, animation: 'fade-up'  },
  { name: 'Molly Watts', role: 'TAILOR', image: member2 , animation: 'fade-down' },
  { name: 'Daniel Grant', role: 'TAILOR', image: member3 , animation: 'fade-up' },
  { name: 'Julia Garner', role: 'TAILOR', image: member4 , animation: 'fade-down' },
];

const SocialIcon = ({ Icon }) => (
  <Icon className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
);

const TeamMember = ({ name, role, image, animation  }) => (
  <div className="flex flex-col" data-aos={animation}>
    <img src={image} alt={name} className="w-full h-[400px] object-cover" loading='lazy'/>
    <div className="bg-black text-white p-4">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-red-500 text-sm">{role}</p>
      <div className="flex space-x-3 mt-2">
      <FaFacebook />
      <FaTwitter />
        <GrInstagram />
      </div>
    </div>
  </div>
);

const TeamMetro = () => (
  <div className="container mx-auto px-4 bg-black pb-16">
     <h2 className="text-red-500 font-bold uppercase text-[40px] text-center" data-aos="fade-down">Our Team</h2>
     <h1 className="text-4xl font-bold text-white text-center mb-14" data-aos="fade-down">Meet Our Expert Team</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {teamMembers.map((member) => (
        <TeamMember key={member.name} {...member} />
      ))}
    </div>
  </div>
);

export default TeamMetro;