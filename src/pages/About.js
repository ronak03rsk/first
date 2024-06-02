// About.js
import React from 'react';
import profile from '../Assets/profile.png';

const About = () => {
    return (
        <section id='about'className='min-h-screen p-2 my-12 mx-2 flex items-center justify-center lg:my-20'>
            <div className=' flex-shrink-0 justify-center'>
                <img src={profile} alt="Profile" className="rounded-full h-32 w-32 md:h-64 md:w-64" />
            </div>
            <div className='text-center ml-7 justify-center'>
                <h2 className="text-base md:text-lg lg:text-xl font-bold">About Me</h2>
                {/* <h3 className='text-md font-bold '>Ronak Katariya</h3> */}
                <p className='leading-loose text-wrap'>I am Ronak Katariya, an enthusiastic person who is eager to learn and evolve. I am a 
                    confident person, good in communication. I like browsing about the recent trends in the 
                    field of Technology and Finance. I like DSA and SQL. I am currently exploring the field
                    of Cybersecurity, AI along with Web Development. 
                </p>
            </div>
        </section>
    );
};

export default About;
