import React from 'react';
import { FaCode, FaReact, FaChartLine } from 'react-icons/fa'; // Import icons


function Work() {
  return (
    <div className="min-h-screen text-white py-20 px-4 relative">
      {/* Section Title */}
      <h2 className="text-4xl md:text-7xl font-semibold text-center mb-12 leading-tight">
        My Expertise
      </h2>

      {/* Cards Container */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-0 max-w-5xl mx-auto mt-20" >
        {/* Card 1 */}
        <div className="relative drop-shadow-xl w-full h-80 overflow-hidden border-2 border-white">
          <div className="absolute flex flex-col items-start justify-center text-white px-4 inset-0 z-10">
            <div className="flex items-center mb-4">
              <FaCode className="text-4xl mr-4" />
              <h3 className="text-xl font-bold">
                Software <br /> Development
              </h3>
            </div>
            <p className="text-sm leading-tight">
              Experienced in both functional and OOP paradigms, with skills in Python, Java, and JavaScript. I love functional programming for efficient solutions and create solutions for diverse needs.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative drop-shadow-xl w-full h-80 overflow-hidden border-2 border-white">
          <div className="absolute flex flex-col items-start justify-center text-white px-4 inset-0 z-10">
            <div className="flex items-center mb-4">
              <FaReact className="text-4xl mr-4" />
              <h3 className="text-xl font-bold">
                Frontend Dev <br /> React, NextJS
              </h3>
            </div>
            <p className="text-sm leading-tight">
              With extensive experience in frontend development, I have worked on 10+ freelance projects. I specialize in building responsive and interactive user interfaces using HTML, CSS, JavaScript , React and integrating backend services .
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative drop-shadow-xl w-full h-80 overflow-hidden border-2 border-white">
          <div className="absolute flex flex-col items-start justify-center text-white px-4 inset-0 z-10">
            <div className="flex items-center mb-4">
              <FaChartLine className="text-4xl mr-4" />
              <h3 className="text-xl font-bold">
                Data Science and <br /> Machine Learning
              </h3>
            </div>
            <p className="text-sm leading-tight">
              Experienced in using data analysis techniques and machine learning algorithms to extract insights, build predictive models, and support decision-making processes in various industries.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default Work;
