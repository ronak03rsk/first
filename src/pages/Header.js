// Header.js
import React from 'react';

const Header = () => {
    return (
        <header class="bg-gray-800 text-white p-4">
            <nav>
                <ul className="list-none">
                    <li className="inline-block mr-4"><a href="#home" className="text-white no-underline hover:text-yellow-400">Home</a></li>
                    <li className="inline-block mr-4"><a href="#about" className="text-white no-underline hover:text-yellow-400">About</a></li>
                    <li className="inline-block mr-4"><a href="#projects" className="text-white no-underline hover:text-yellow-400">Projects</a></li>
                    <li className="inline-block mr-4"><a href="#skills" className="text-white no-underline hover:text-yellow-400">Skills</a></li>
                    <li className="inline-block mr-4"><a href="#contact" className="text-white no-underline hover:text-yellow-400">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
