// // import React, { useState } from 'react';

// // const Contact = () => {
// //     const [formData, setFormData] = useState({
// //         name: '',
// //         email: '',
// //         message: ''
// //     });

// //     const [status, setStatus] = useState('');

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData({
// //             ...formData,
// //             [name]: value
// //         });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         // Send form data to the backend
// //         try {
// //             const response = await fetch('http://localhost:5000/api/contact', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                 },
// //                 body: JSON.stringify(formData)
// //             });

// //             if (response.ok) {
// //                 setStatus('Message sent successfully!');
// //                 setFormData({ name: '', email: '', message: '' }); // Clear the form
// //             } else {
// //                 setStatus('Failed to send message.');
// //             }
// //         } catch (error) {
// //             setStatus('Failed to send message.');
// //         }
// //     };

// //     return (
// //         <section id="contact">
// //             <h2 className='text-base md:text-lg lg:text-xl font-bold'>Contact</h2>
// //             <form className='flex flex-col gap-4 items-center' onSubmit={handleSubmit}>
// //                 <label htmlFor="name">Name</label>
// //                 <input 
// //                     type="text" 
// //                     id='name' 
// //                     name='name' 
// //                     value={formData.name}
// //                     onChange={handleChange}
// //                     placeholder='Your Name' 
// //                     className='justify-center border border-gray-400 rounded-md p-2 mx-6' 
// //                     required 
// //                 />
// //                 <label htmlFor="email">Email</label>
// //                 <input 
// //                     type="email" 
// //                     id='email' 
// //                     name='email' 
// //                     value={formData.email}
// //                     onChange={handleChange}
// //                     placeholder='Your Email' 
// //                     className='border border-gray-400 rounded-md p-2 mx-6' 
// //                     required 
// //                 />
// //                 <label htmlFor="message">Message</label>
// //                 <textarea 
// //                     id='message' 
// //                     name='message' 
// //                     value={formData.message}
// //                     onChange={handleChange}
// //                     placeholder='Your Message' 
// //                     className='border border-gray-400 rounded-md p-2 mx-6 ' 
// //                     required 
// //                 ></textarea>
// //                 <button type='submit' className='bg-blue-500 text-white py-2 rounded-md w-32 hover:bg-indigo-600 mb-3'>Send</button>
// //                 {status && <p className="mt-2">{status}</p>}
// //             </form>
// //         </section>
// //     );
// // };

// // export default Contact;



// // Contact.js
// import React, { useState } from 'react';

// // const Contact = () => {
// //     const [formData, setFormData] = useState({
// //         name: '',
// //         email: '',
// //         message: ''
// //     });

// //     const [status, setStatus] = useState('');

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData({
// //             ...formData,
// //             [name]: value
// //         });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         // Use relative path for the API endpoint
// //         const apiEndpoint = '/api/contact';

// //         try {
// //             const response = await fetch(apiEndpoint, {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json'
// //                 },
// //                 body: JSON.stringify(formData)
// //             });

// //             if (response.ok) {
// //                 setStatus('Message sent successfully!');
// //                 setFormData({ name: '', email: '', message: '' }); // Clear the form
// //             } else {
// //                 setStatus('Failed to send message.');
// //             }
// //         } catch (error) {
// //             setStatus('Failed to send message.');
// //         }
// //     };

//     return (
//         <section id="contact">
//             <h2 className='text-base md:text-lg lg:text-xl font-bold'>Contact</h2>
//             {/* <form className='flex flex-col gap-4 items-center' onSubmit={handleSubmit}>
//                 <label htmlFor="name">Name</label>
//                 <input 
//                     type="text" 
//                     id='name' 
//                     name='name' 
//                     value={formData.name}
//                     onChange={handleChange}
//                     placeholder='Your Name' 
//                     className='justify-center border border-gray-400 rounded-md p-2 mx-6' 
//                     required 
//                 />
//                 <label htmlFor="email">Email</label>
//                 <input 
//                     type="email" 
//                     id='email' 
//                     name='email' 
//                     value={formData.email}
//                     onChange={handleChange}
//                     placeholder='Your Email' 
//                     className='border border-gray-400 rounded-md p-2 mx-6' 
//                     required 
//                 />
//                 <label htmlFor="message">Message</label>
//                 <textarea 
//                     id='message' 
//                     name='message' 
//                     value={formData.message}
//                     onChange={handleChange}
//                     placeholder='Your Message' 
//                     className='border border-gray-400 rounded-md p-2 mx-6 ' 
//                     required 
//                 ></textarea>
//                 <button type='submit' className='bg-blue-500 text-white py-2 rounded-md w-32 hover:bg-indigo-600 mb-3'>Send</button>
//                 {status && <p className="mt-2">{status}</p>}
//             </form> */}
//         </section>
//     );
// };

// export default Contact;

import React from 'react';
import linkedin from '../Assets/linkedin.png';
import mail from '../Assets/gmail.png';
import github from '../Assets/github.png';

const Connect = () => {
    return(
        <section id="connect">
            <h2 className='text-base md:text-lg lg:text-xl font-bold my-8 p-8'>Connect</h2>
            {/* you can connect with me on linkedin mail-id github X */}
            <div className='flex flex justify-center gap-4 items-center m-4'>
                <a href="https://www.linkedin.com/in/ronak-katariya-2b3b4a1b9/" target="_blank" rel="noopener noreferrer" className='block'>
                    <img src={linkedin} alt="linkedin" className='w-10 h-10 inline-block mr-2' />
                </a>
                <h3 className='text-lg font-bold'>LinkedIn</h3>
                <a href="mailto:ronakkatariya03@gmail.com" className='block'>
                    <img src={mail} alt="mail" className='w-20 h-20 inline-block mr-2' />
                </a>
                <h3 className='text-lg font-bold'>Mail</h3>
                <a href="https://github.com/ronak03rsk" target="_blank" rel="noopener noreferrer" className="block">
                    <img src={github} alt="github" className='w-20 h-20 inline-block mr-2' />
                </a>
                <h3 className='text-lg font-bold'>GitHub</h3>
            </div>
        </section>
    );
};

export default Connect;