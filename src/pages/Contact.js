// import React from 'react';
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';

// const contactSchema = yup.object().shape({
//   name: yup.string().required('Name is required'),
//   email: yup.string()
//     .email('Invalid email format')
//     .required('Email is required'),
//   phone: yup.string()
//     .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
//   message: yup.string()
//     .required('Message is required')
//     .min(10, 'Message must be at least 10 characters')
// });

// const Contact = () => {
//   const { 
//     register, 
//     handleSubmit, 
//     formState: { errors },
//     reset 
//   } = useForm({
//     resolver: yupResolver(contactSchema)
//   });

//   const onSubmit = (data) => {
//     // Implement contact form submission logic
//     console.log('Contact Form Submitted:', data);
//     alert('Thank you for your message. We will get back to you soon!');
//     reset();
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">
//         <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
//           Contact Us
//         </h1>

//         <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
//           <div>
//             <label className="block mb-2">Name</label>
//             <input
//               {...register('name')}
//               className={`w-full p-3 border rounded ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
//               placeholder="Your Name"
//             />
//             {errors.name && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.name.message}
//               </p>
//             )}
//           </div>

//           <div>
//             <label className="block mb-2">Email</label>
//             <input
//               {...register('email')}
//               type="email"
//               className={`w-full p-3 border rounded ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
//               placeholder="your.email@example.com"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.email.message}
//               </p>
//             )}
//           </div>

//           <div>
//             <label className="block mb-2">Phone</label>
//             <input
//               {...register('phone')}
//               type="tel"
//               className={`w-full p-3 border rounded ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
//               placeholder="1234567890"
//             />
//             {errors.phone && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.phone.message}
//               </p>
//             )}
//           </div>

//           <div>
//             <label className="block mb-2">Message</label>
//             <textarea
//               {...register('message')}
//               className={`w-full p-3 border rounded ${errors.message ? 'border-red-500' : 'border-gray-300'}`}
//               rows="4"
//               placeholder="Your message..."
//             />
//             {errors.message && (
//               <p className="text-red-500 text-sm mt-1">
//                 {errors.message.message}
//               </p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700 transition-colors"
//           >
//             Send Message
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Contact;


import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import '../css/Contact.css';

const contactSchema = yup.object().shape({
  name: yup.string().required('Name is required'),
  email: yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  phone: yup.string()
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),
  message: yup.string()
    .required('Message is required')
    .min(10, 'Message must be at least 10 characters')
});

const Contact = () => {
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm({
    resolver: yupResolver(contactSchema)
  });

  const onSubmit = (data) => {
    console.log('Contact Form Submitted:', data);
    alert('Thank you for your message. We will get back to you soon!');
    reset();
  };

  return (
    <div className="contact-wrapper">
      <div className="contact-container">
        <h1 className="contact-title">Get In Touch</h1>

        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <div className="form-group">
            <label className="form-label">Name</label>
            <input
              {...register('name')}
              className={`form-input ${errors.name ? 'input-error' : ''}`}
              placeholder="Enter your full name"
            />
            {errors.name && (
              <p className="error-message">{errors.name.message}</p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              {...register('email')}
              type="email"
              className={`form-input ${errors.email ? 'input-error' : ''}`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="error-message">{errors.email.message}</p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Phone Number</label>
            <input
              {...register('phone')}
              type="tel"
              className={`form-input ${errors.phone ? 'input-error' : ''}`}
              placeholder="Enter 10-digit phone number"
            />
            {errors.phone && (
              <p className="error-message">{errors.phone.message}</p>
            )}
          </div>

          <div className="form-group">
            <label className="form-label">Your Message</label>
            <textarea
              {...register('message')}
              className={`form-input form-textarea ${errors.message ? 'input-error' : ''}`}
              rows="4"
              placeholder="Write your message here..."
            />
            {errors.message && (
              <p className="error-message">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="submit-button"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;