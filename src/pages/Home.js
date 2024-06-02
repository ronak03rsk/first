// Home.js
import React from 'react';
import profile from '../Assets/profile.png';

const Home = () => {
    return (
        <section id='home' className='min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500 text-white flex items-center justify-center py-12 lg:py-20'>
            <div className='lg:text-3xl'>
                <h2 className="text-base text-xl md:text-lg lg:text-3xl font-bold">Hey There,This is</h2>
                <p className='text-md'>Ronak Katariya</p>
                <p className='text-md'>I am a Full Stack Developer</p>
            </div>
            <div>
                <img src={profile} alt="Profile" className="mx-auto rounded-full h-32 w-32 ml-4 md:ml-12 md:h-64 md:w-64" />
            </div>
        </section>
    );
}

export default Home;