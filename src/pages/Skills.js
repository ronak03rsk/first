// Skills.js
import React from 'react';
import htmlpic from '../Assets/htmllogo.png'
import csspic from '../Assets/csslogo.jpg'
import jspic from '../Assets/jslogo.png'
import reactpic from '../Assets/reactlogo.png'
import nodepic from '../Assets/nodelogo.png'
import cprogram from '../Assets/clogo.jpg'
import c_program from '../Assets/c++logo.png'
import javapic from '../Assets/javalogo.png'
import pythonpic from '../Assets/pythonlogo.png'
import sqlpic from '../Assets/sqllogo.png'

const Skills = () => {
    return (
        <section id='skills'  className='min-h-screen pt-20 -mt-20'>
            <h2 className='text-base md:text-lg lg:text-3xl font-bold mb-8'>Skills</h2>
            <h3 className='text-base md:text-lg lg:text-2xl font-bold mt-4 mb-2'>Frontend</h3>
            <div className='flex flex-wrap justify-center'>
                <div className='m-4'>
                    <img src={htmlpic} alt='html' className='w-20 h-20' />
                    <p>HTML</p>
                </div>
                <div className='m-4'>
                    <img src={csspic} alt='css' className='w-20 h-20' />
                    <p>CSS</p>
                </div>
                <div className='m-4'>
                    <img src={jspic} alt='js' className='w-20 h-20' />
                    <p>JavaScript</p>
                </div>
                <div className='m-4'>
                    <img src={reactpic} alt='react' className='w-20 h-20' />
                    <p>React</p>
                </div>
            </div>
            <h3 className='text-base md:text-lg lg:text-2xl font-bold mt-4 mb-2'>Backend</h3>
            <div className='flex flex-wrap justify-center'>
                <div className='m-4'>
                    <img src={nodepic} alt='node' className='w-20 h-20' />
                    <p>Node.js</p>
                </div>
            </div>
            <h3 className='text-base md:text-lg lg:text-2xl font-bold mt-4 mb-2'>Programming Languages</h3>
            <div className='flex flex-wrap justify-center'>
                <div className='m-4'>
                    <img src={cprogram} alt='c' className='w-20 h-20' />
                    <p>C</p>
                </div>
                <div className='m-4'>
                    <img src={c_program} alt='c++' className='w-20 h-20' />
                    <p>C++</p>
                </div>
                <div className='m-4'>
                    <img src={javapic} alt='java' className='w-20 h-20' />
                    <p>Java</p>
                </div>
                <div className='m-4'>
                    <img src={pythonpic} alt='python' className='w-20 h-20' />
                    <p>Python</p>
                </div>
            </div>
            <h3 className='text-base md:text-lg lg:text-2xl font-bold mt-4 mb-2'>Database</h3>
            <div className='flex flex-wrap justify-center'>
                <div className='m-4'>
                    <img src={sqlpic} alt='sql' className='w-20 h-20' />
                    <p>SQL</p>
                </div>
            </div>
        </section>
    );
};

export default Skills;
