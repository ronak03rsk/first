// Projects.js
import React from 'react';
import Balance from '../Assets/Balancebudd.png';
import Landing from '../Assets/Landingpage.png';
import Stopwatch from '../Assets/Stopwatch.png';
import Tictactoe from '../Assets/Tictactoe.png';

const Projects = () => {
    return (
        <section id='projects' className='min-h-screen pt-20 -mt-20'>
            <h2 className='text-base md:text-lg lg:text-3xl font-bold '>Projects</h2>
            {/* Add your project cards here */}
            {/* <div className='flex overflow-x-auto grid grid-cols-1 m-4 md:grid-cols-2 md:overflow-x-auto lg:grid-cols-3 lg:overflow-x-auto gap-4'>
                <div className='border border-indigo-400 rounded-md p-4'>
                    <h3 className='text-lg font-bold'>Project 1</h3>
                    <h4>BalanceBudd</h4>
                    <img src={Balance} alt="BalanceBudd" className="rounded-md h-32 w-32" />
                </div>
                <div className='border border-indigo-400 rounded-md p-4'>
                    <h3 className='text-lg font-bold'>Project 2</h3>
                    <h4>Landing Page</h4>
                    <img src={Landing} alt="Landing Page" className="rounded-md h-32 w-32" />
                </div>
                <div className='border border-indigo-400 rounded-md p-4'>
                    <h3 className='text-lg font-bold'>Project 3</h3>
                    <h4>Stopwatch</h4>
                    <img src={Stopwatch} alt="Stopwatch" className="rounded-md h-32 w-32" />
                </div>
                <div className='border border-indigo-400 rounded-md p-4'>
                    <h3 className='text-lg font-bold'>Project 4</h3>
                    <h4>Tic Tac Toe</h4>
                    <img src={Tictactoe} alt="Tic Tac Toe" className="rounded-md h-32 w-32" />
                </div>
            </div> */}
            <div className="items-center flex flex-nowrap overflow-x-auto gap-6 m-4">
                <div className="flex-none w-full md:w-1/4 lg:w-1/4">Project 1
                    <div className='border border-indigo-400 rounded-md p-4'>
                        <h3 className='text-lg font-bold my-4'>BalanceBudd</h3>
                        <a href='https://cmpn-codecell.github.io/Syrus-2024-Web2-BlackPearlTrouve/' target="_blank" rel="noopener noreferrer" className="block">
                        <img src={Balance} alt="BalanceBudd" className=" rounded-md h-50 w-50" />
                        </a>
                    </div>
                </div>
                <div className="flex-none w-full md:w-1/4 lg:w-1/4">Project 2
                    <div className='border border-indigo-400 rounded-md p-4'>
                        <h3 className='text-lg font-bold my-4'>Responsive Landing Page</h3>
                        <a href='https://ronak03rsk.github.io/PRODIGY_WD_01/' target="_blank" rel="noopener noreferrer" className="block">
                        <img src={Landing} alt="Landing Page" className="rounded-md h-50 w-50" />
                        </a>
                    </div>
                </div>
                <div className="flex-none w-full md:w-1/4 lg:w-1/4">Project 3
                    <div className='border border-indigo-400 rounded-md p-4'>
                        <h3 className='text-lg font-bold my-4'>Stopwatch</h3>
                        <a href='https://ronak03rsk.github.io/PRODIGY_WD_02/' target="_blank" rel="noopener noreferrer" className="block">
                        <img src={Stopwatch} alt="Stopwatch" className="rounded-md h-50 w-50" />
                        </a>
                    </div>
                </div>
                <div className="flex-none w-full md:w-1/4 lg:w-1/4">Project 4
                    <div className='border border-indigo-400 rounded-md p-4'>
                        <h3 className='text-lg font-bold my-4'>Tic Tac Toe</h3>
                        <a href='https://ronak03rsk.github.io/PRODIGY_WD_03/' target="_blank" rel="noopener noreferrer" className="block">
                        <img src={Tictactoe} alt="Tic Tac Toe" className="rounded-md h-50 w-50" />
                        </a>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Projects;


// import React, { useRef } from 'react';
// import arrowLeft from '../Assets/arrow-left_5083125.png';
// import arrowRight from '../Assets/arrow-right_5083126.png';
// import Balance from '../Assets/Balancebudd.png';
// import Landing from '../Assets/Landingpage.png';
// import Stopwatch from '../Assets/Stopwatch.png';
// import Tictactoe from '../Assets/Tictactoe.png';

// const Projects = () => {
//   const scrollContainer = useRef(null);

//   const scroll = (direction) => {
//     const { current } = scrollContainer;
//     if (direction === 'left') {
//       current.scrollLeft -= 200; // Adjust the value as needed
//     } else {
//       current.scrollLeft += 200; // Adjust the value as needed
//     }
//   };

//   return (
//     <section id='projects' className='min-h-screen flex items-center'>
//       <img src={arrowLeft} alt="Scroll Left" className='cursor-pointer' onClick={() => scroll('left')} />
//       <div ref={scrollContainer} className="flex overflow-x-auto gap-4 m-4">
//         {/* Project 1 */}
//         <div className="flex-none w-full md:w-auto lg:w-1/4">
//           <div className='border border-indigo-400 rounded-md p-4'>
//             <h3 className='text-lg font-bold'>BalanceBudd</h3>
//             <img src={Balance} alt="BalanceBudd" className="rounded-md h-32 w-32" />
//           </div>
//         </div>
//         {/* Project 2 */}
//         <div className="flex-none w-full md:w-auto lg:w-1/4">
//           <div className='border border-indigo-400 rounded-md p-4'>
//             <h3 className='text-lg font-bold'>Landing Page</h3>
//             <img src={Landing} alt="Landing Page" className="rounded-md h-32 w-32" />
//           </div>
//         </div>
//         {/* Project 3 */}
//         <div className="flex-none w-full md:w-auto lg:w-1/4">
//           <div className='border border-indigo-400 rounded-md p-4'>
//             <h3 className='text-lg font-bold'>Stopwatch</h3>
//             <img src={Stopwatch} alt="Stopwatch" className="rounded-md h-32 w-32" />
//           </div>
//         </div>
//         {/* Project 4 */}
//         <div className="flex-none w-full md:w-auto lg:w-1/4">
//           <div className='border border-indigo-400 rounded-md p-4'>
//             <h3 className='text-lg font-bold'>Tic Tac Toe</h3>
//             <img src={Tictactoe} alt="Tic Tac Toe" className="rounded-md h-32 w-32" />
//           </div>
//         </div>
//       </div>
//       <img src={arrowRight} alt="Scroll Right" className='cursor-pointer' onClick={() => scroll('right')} />
//     </section>
//   );
// };

// export default Projects;
