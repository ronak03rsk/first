// import React, { useState } from 'react';

// const Contact = () => {
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const [status, setStatus] = useState('');

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData({
//             ...formData,
//             [name]: value
//         });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         // Send form data to the backend
//         try {
//             const response = await fetch('http://localhost:5000/api/contact', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             });

//             if (response.ok) {
//                 setStatus('Message sent successfully!');
//                 setFormData({ name: '', email: '', message: '' }); // Clear the form
//             } else {
//                 setStatus('Failed to send message.');
//             }
//         } catch (error) {
//             setStatus('Failed to send message.');
//         }
//     };

//     return (
//         <section id="contact">
//             <h2 className='text-base md:text-lg lg:text-xl font-bold'>Contact</h2>
//             <form className='flex flex-col gap-4 items-center' onSubmit={handleSubmit}>
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
//             </form>
//         </section>
//     );
// };

// export default Contact;



// Contact.js
import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Use relative path for the API endpoint
        const apiEndpoint = '/api/contact';

        try {
            const response = await fetch(apiEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('Message sent successfully!');
                setFormData({ name: '', email: '', message: '' }); // Clear the form
            } else {
                setStatus('Failed to send message.');
            }
        } catch (error) {
            setStatus('Failed to send message.');
        }
    };

    return (
        <section id="contact">
            <h2 className='text-base md:text-lg lg:text-xl font-bold'>Contact</h2>
            <form className='flex flex-col gap-4 items-center' onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id='name' 
                    name='name' 
                    value={formData.name}
                    onChange={handleChange}
                    placeholder='Your Name' 
                    className='justify-center border border-gray-400 rounded-md p-2 mx-6' 
                    required 
                />
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id='email' 
                    name='email' 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder='Your Email' 
                    className='border border-gray-400 rounded-md p-2 mx-6' 
                    required 
                />
                <label htmlFor="message">Message</label>
                <textarea 
                    id='message' 
                    name='message' 
                    value={formData.message}
                    onChange={handleChange}
                    placeholder='Your Message' 
                    className='border border-gray-400 rounded-md p-2 mx-6 ' 
                    required 
                ></textarea>
                <button type='submit' className='bg-blue-500 text-white py-2 rounded-md w-32 hover:bg-indigo-600 mb-3'>Send</button>
                {status && <p className="mt-2">{status}</p>}
            </form>
        </section>
    );
};

export default Contact;
