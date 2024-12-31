import React from "react";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';


const Resume = () => (
    
     
  <section  className="p-4">
    <h2 className="text-2xl mb-2">Resume</h2>
    <a
      href="./public/assets/Resume.pdf"
      download
      className="border border-white text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black transition duration-300"
    >
      Download My Resume
    </a>
  </section>
);

export default Resume;
