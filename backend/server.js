// require('dotenv').config();
// const express = require('express');
// const bodyParser = require('body-parser');
// const nodemailer = require('nodemailer');
// const path = require('path');
// const cors = require('cors');

// const app = express();
// const port = process.env.PORT || 5000;

// // Middleware
// app.use(bodyParser.json());
// app.use(cors());

// // Serve static files from the React app
// app.use(express.static(path.join(__dirname, '..', 'build')));

// // Nodemailer transporter
// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: process.env.EMAIL_USER, // Use environment variable
//     pass: process.env.EMAIL_PASS  // Use environment variable
//   }
// });

// // Route to handle contact form submission
// app.post('/api/contact', (req, res) => {
//   const { name, email, message } = req.body;

//   // Simple validation
//   if (!name || !email || !message) {
//     return res.status(400).send('All fields are required.');
//   }

//   const mailOptions = {
//     from: email,
//     to: process.env.EMAIL_USER, // Use environment variable
//     subject: `Contact form submission from ${name}`,
//     text: message
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       return res.status(500).send('Error sending message.');
//     }
//     res.status(200).send('Message sent successfully');
//   });
// });

// // Catchall handler to serve the React app
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
