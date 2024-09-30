// Header.js
import React from 'react';

const Header = () => {
    return (
        <header className="bg-gray-900 text-white p-4 w-full fixed">
            <nav className='flex items-center justify-between'>
                <h1 className="text-2xl font-bold text-left ">Ronak Katariya</h1>
                <ul className="list-none">
                    <li className="inline-block mr-4"><a href="#home" className="text-white no-underline hover:text-blue-400">Home</a></li>
                    <li className="inline-block mr-4"><a href="#about" className="text-white no-underline hover:text-blue-400">About</a></li>
                    <li className="inline-block mr-4"><a href="#projects" className="text-white no-underline hover:text-blue-400">Projects</a></li>
                    <li className="inline-block mr-4"><a href="#skills" className="text-white no-underline hover:text-blue-400">Skills</a></li>
                    <li className="inline-block mr-4"><a href="#connect" className="text-white no-underline hover:text-blue-400">Connect</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
