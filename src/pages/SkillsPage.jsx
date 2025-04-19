import React from 'react';
import FloatingNavbar from '../components/Navbar';
import { FaArrowRight } from 'react-icons/fa';


const skills = [
  { name: 'HTML', proficiency: 5 },
  { name: 'CSS', proficiency: 4 },
  { name: 'JavaScript', proficiency: 4 },
  { name: 'React', proficiency: 4 },
  { name: 'Node.js', proficiency: 3 },
  { name: 'Tailwind CSS', proficiency: 5 },
  { name: 'Python', proficiency: 3 },
  { name: 'SQL', proficiency: 3 },
];
const maxDots = 5;


const MySkillsPage = () => {

  return (

    <div className="relative min-h-screen bg-gradient-to-br from-black to-purple-900 p-8 sm:p-16 overflow-hidden">


      <div className="absolute top-24 sm:top-32 left-1/2 transform -translate-x-1/2 flex items-center justify-center space-x-4 z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
          MY SKILLS
        </h1>
        <FaArrowRight size={30} className="text-purple-300" />
      </div>


      <div className="relative mt-56 sm:mt-64 max-w-3xl mx-auto z-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-16 gap-y-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex items-center justify-between">
              <span className="text-lg text-purple-200 font-medium">{skill.name}</span>
              <div className="flex space-x-1.5">
                {Array.from({ length: maxDots }).map((_, i) => (
                  <span
                    key={i}
                    className={`
                      block w-3 h-3 rounded-full
                      ${i < skill.proficiency ? 'bg-purple-400' : 'bg-gray-700 opacity-50'}
                    `}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>


      <FloatingNavbar />

    </div>
  );
};

export default MySkillsPage;
