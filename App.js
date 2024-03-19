// App.js
import React from 'react';
import Header from './Header';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <About />
                <Projects />
                <Skills />
                <Contact />
            </main>
        </div>
    );
};

export default App;
