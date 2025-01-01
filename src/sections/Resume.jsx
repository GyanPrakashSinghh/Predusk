import React from "react";
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';


const Resume = () => (
    
     
  <section  className="p-4">
    <h2 className="text-2xl mb-2">Resume</h2>
    <a
      href="https://drive.google.com/file/d/1NtdXDSJbUDycdTvIMfOPv8L8ceKQ41dp/view?usp=drive_link"
      download
      className="border border-white text-white py-2 px-4 rounded-lg hover:bg-white hover:text-black transition duration-300"
    >
      View My Resume
    </a>
  </section>
);

export default Resume;
