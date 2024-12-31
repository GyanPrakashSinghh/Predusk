import React, { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx'; // Assuming Button component exists

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);
  const [showMoreSkills, setShowMoreSkills] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('pgyan18@gmail.com');
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Hi, I’m Gyan Prakash Singh</p>
              <p className="grid-subtext">
                I am currently pursuing my B.Tech from IIT Jammu. I am proficient at developing interactive web applications and I am currently working on developing a deep learning model details of which can be found below in the project 
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable applications.My skills are:-
              </p>
              <div>
                {showMoreSkills ? (
                  <>
                    <ul className="text-white-600"> 
                      <li>Programming Languages: C/C++, Python, JavaScript</li>
                      <li>Web Development: Tailwind, React.js, Gsap, Three.js</li>
                      <li>Git</li>
                      <li>Github</li>
                      <li>AWS</li>
                      <li>Data Structures and Algorithms</li>
                      <li>Databases: MongoDB, SQL, MySQL</li>
                      <li>Libraries: NumPy, Pandas, Matplotlib, TensorFlow, Keras</li>
                      <li>Deep Learning</li>
                    </ul>
                    <button 
                      onClick={() => setShowMoreSkills(false)} 
                      className="text-white hover:text-blue-500"
                    >
                      Show Less
                    </button>
                  </>
                ) : (
                  <span> 
                    <button 
                      onClick={() => setShowMoreSkills(true)} 
                      className="text-gray-500 hover:text-blue-500"
                    > See More
                    </button>
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Lucknow, India and open to remote worldwide and in-office work in India.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building things through code. Programming isn&apos;t just my
                profession—it&apos;s my passion. I enjoy exploring new technologies, and enhancing my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />
            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">pgyan18@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;