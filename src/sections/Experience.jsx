import React from 'react';
import { Timeline } from '../components/timeline';

// Importing images from the assets/Skills/Web folder
import Company from '../assets/Skills/Web/Company.png';
import Swastika from '../assets/Skills/Web/Swastika.png';
import Weather from '../assets/Skills/Web/Weather.png';
import Withyou from '../assets/Skills/Web/Withyou.png';

// Importing images from the assets/Skills/Data-analysis folder
import Analysis1 from '../assets/Skills/Data-analysis/Data_Analysis-1.png';
import Analysis2 from '../assets/Skills/Data-analysis/Data_Analysis-5.png';
import Analysis3 from '../assets/Skills/Data-analysis/Data_Analysis-3.png';
import Analysis4 from '../assets/Skills/Data-analysis/Data_Analysis-4.png';
// Importing images from the assets/Skills/ML folder
import ML1 from '../assets/Skills/ML/ML-1.png';
import ML2 from '../assets/Skills/ML/ML-2.png';
import ML3 from '../assets/Skills/ML/ML-3.png';
import ML4 from '../assets/Skills/ML/ML-4.png';

function Experience() {
    const data = [
        {
            title: '2+ years in Front End Development',
            content: (
                <div>
                    <p className="text-white text-xs md:text-xl font-normal mb-8" style={{ lineHeight: '1.8' }}>
                        I began my front-end development journey with HTML and CSS, and now work proficiently with React and Next.js. Through freelance projects, I’ve honed my skills in creating dynamic, responsive web applications. I also have a basic understanding of backend development, allowing me to build integrated full-stack solutions.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {[Company, Swastika, Weather, Withyou].map((item, index) => (
                            <img
                                key={index}
                                src={item}
                                alt={`Startup template ${index + 1}`}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                        ))}
                    </div>
                </div>
            ),
        },
        {
            title: '20+ Projects In Data Analysis and Data Science',
            content: (
                <div>
                    <p className="text-white text-xs md:text-xl font-normal " style={{ lineHeight: '1.8' }}>
                        I have worked on over 20 data analysis and data science projects, developing skills in data preprocessing, visualization, and deriving actionable insights.
                    </p>
                    <p className="text-white text-xs md:text-xl font-normal mb-8" style={{ lineHeight: '1.8' }}>
                        These projects include working with datasets in Python, using libraries like Pandas, Matplotlib, and Seaborn, and deploying machine learning models.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        {[Analysis1, Analysis2, Analysis3, Analysis4].map((item, index) => (
                            <img
                                key={index}
                                src={item}
                                alt={`Data Analysis template ${index + 1}`}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                        ))}
                    </div>
                </div>
            ),
        },
        {
            title: '10+ Python and Machine Learning Projects',
            content: (
                <div>
                   
                    <div >
                    
                    <p className="text-white text-xs md:text-xl font-normal mb-8" style={{ lineHeight: '1.8' }}>
                    I’ve worked on 10+ Python and machine learning projects, focusing on building models, deploying solutions, and applying tools like TensorFlow and Scikit-learn to solve real-world problems. These projects have enhanced my skills in Python programming and machine learning techniques.
                    </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[ML1, ML2, ML3, ML4].map((item, index) => (
                            <img
                                key={index}
                                src={item}
                                alt={`ML template ${index + 1}`}
                                className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
                            />
                        ))}
                    </div>
                </div>
            ),
        },
    ];

    return (
        <>
            <div className="w-full  bg-grid-black/[0.2] relative flex items-center justify-center">
                {/* Radial gradient for the container to give a faded look */}
                <div className="absolute pointer-events-none inset-0 flex items-center justify-center  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                <Timeline data={data} className=" " />
            </div>
        </>
    );
}

export default Experience;
