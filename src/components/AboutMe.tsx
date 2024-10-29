// src/components/AboutMe.tsx
import React from 'react';
import './AboutMe.css'; // Pastikan untuk mengimpor file CSS di komponen ini

interface AboutMe {
  name: string;
}

const AboutMe: React.FC<AboutMe> = ({ name }) => {
  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="bg-gray-200 shadow-lg rounded-lg p-8 max-w-2xl mx-auto transform hover:scale-105 hover:shadow-2xl transition duration-500 ease-in-out">
        <div className="text-center">
          {/* Decorative Icon */}
          <div className="mb-4 text-5xl text-white">
            🌟
          </div>
          <h1 className="text-4xl font-bold mt-4 text-black drop-shadow-lg">{name}</h1>
          <p className="text-lg text-black mt-4 leading-relaxed">
          I am Muh. Rizqi Amanan Habibullah, a student of Universitas Pembangunan Nasional Veteran East Java majoring in Informatics. Someone who likes activities related to writing and can be developed into useful works such as copywriting. In addition, at school I focus on learning about UI/UX Design and Web Development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
