import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { register as registerAction } from '../store/authSlice';
import '../css/Register.css';

// Validation Schema
const registerSchema = yup.object().shape({
  firstName: yup
    .string()
    .required('First Name is required')
    .min(2, 'First Name must be at least 2 characters')
    .max(50, 'First Name must not exceed 50 characters')
    .matches(/^[a-zA-Z]+$/, 'First Name must contain only letters'),

  lastName: yup
    .string()
    .required('Last Name is required')
    .min(2, 'Last Name must be at least 2 characters')
    .max(50, 'Last Name must not exceed 50 characters')
    .matches(/^[a-zA-Z]+$/, 'Last Name must contain only letters'),

  email: yup
    .string()
    .required('Email is required')
    .email('Invalid email format')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Email is not valid'
    ),

  phone: yup
    .string()
    .required('Phone number is required')
    .matches(/^[0-9]{10}$/, 'Phone number must be 10 digits'),

  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password must be at least 8 characters')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must include uppercase, lowercase, number, and special character'
    ),

  confirmPassword: yup
    .string()
    .required('Confirm Password is required')
    .oneOf([yup.ref('password'), null], 'Passwords must match'),

  age: yup
    .number()
    .required('Age is required')
    .positive('Age must be a positive number')
    .integer('Age must be an integer')
    .min(18, 'You must be at least 18 years old')
    .max(120, 'Invalid age'),

  gender: yup
    .string()
    .required('Gender is required')
    .oneOf(['male', 'female', 'other'], 'Invalid gender selection')
});

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [registrationError, setRegistrationError] = useState(null);

  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset 
  } = useForm({
    resolver: yupResolver(registerSchema)
  });

  const onSubmit = async (data) => {
    try {
      // Remove confirmPassword from data before sending
      const { confirmPassword, ...submitData } = data;

      // Generate a unique user ID
      const userId = Date.now().toString();

      // Prepare user object
      const userObject = {
        ...submitData,
        id: userId,
        role: 'user', // Default role
        registrationDate: new Date().toISOString()
      };

      // Dispatch registration action
      dispatch(registerAction({
        user: userObject,
        token: `user_token_${userId}`
      }));

      // Store user in localStorage for admin access
      const existingUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
      const updatedUsers = [...existingUsers, userObject];
      localStorage.setItem('registeredUsers', JSON.stringify(updatedUsers));

      // Reset form and navigate
      reset();
      setRegistrationError(null);
      navigate('/login');
    } catch (error) {
      setRegistrationError('Registration failed. Please try again.');
      console.error('Registration Error:', error);
    }
  };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Create Your Account
//           </h2>
//         </div>
        
//         {registrationError && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
//             {registrationError}
//           </div>
//         )}

//         <form 
//           className="mt-8 space-y-6" 
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <div className="grid grid-cols-2 gap-4">
//             {/* First Name */}
//             <div>
//               <input
//                 {...register('firstName')}
//                 placeholder="First Name"
//                 className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//               {errors.firstName && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.firstName.message}
//                 </p>
//               )}
//             </div>

//             {/* Last Name */}
//             <div>
//               <input
//                 {...register('lastName')}
//                 placeholder="Last Name"
//                 className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//               {errors.lastName && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.lastName.message}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Email */}
//           <div>
//             <input
//               {...register('email')}
//               type="email"
//               placeholder="Email Address"
//               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-xs mt-1">
//                 {errors.email.message}
//               </p>
//             )}
//           </div>

//           {/* Phone */}
//           <div>
//             <input
//               {...register('phone')}
//               type="tel"
//               placeholder="Phone Number"
//               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//             {errors.phone && (
//               <p className="text-red-500 text-xs mt-1">
//                 {errors.phone.message}
//               </p>
//             )}
//           </div>

//           {/* Password */}
//           <div>
//             <input
//               {...register('password')}
//               type="password"
//               placeholder="Password"
//               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//             {errors.password && (
//               <p className="text-red-500 text-xs mt-1">
//                 {errors.password.message}
//               </p>
//             )}
//           </div>

//           {/* Confirm Password */}
//           <div>
//             <input
//               {...register('confirmPassword')}
//               type="password"
//               placeholder="Confirm Password"
//               className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//             />
//             {errors.confirmPassword && (
//               <p className="text-red-500 text-xs mt-1">
//                 {errors.confirmPassword.message}
//               </p>
//             )}
//           </div>

//           {/* Age and Gender */}
//           <div className="grid grid-cols-2 gap-4">
//             <div>
//               <input
//                 {...register('age')}
//                 type="number"
//                 placeholder="Age"
//                 className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               />
//               {errors.age && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.age.message}
//                 </p>
//               )}
//             </div>
//             <div>
//               <select
//                 {...register('gender')}
//                 className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//               >
//                 <option value="">Select Gender</option>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//                 <option value="other">Other</option>
//               </select>
//               {errors.gender && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.gender.message}
//                 </p>
//               )}
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Register
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };


return (
  <div className="registration-container">
    <div className="registration-card">
      <h2 className="registration-title">
        Create Your Account
      </h2>
      
      {registrationError && (
        <div className="error-alert" role="alert">
          {registrationError}
        </div>
      )}

      <form 
        className="registration-form" 
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="form-grid">
          {/* First Name */}
          <div>
            <input
              {...register('firstName')}
              placeholder="First Name"
              className="form-input"
            />
            {errors.firstName && (
              <p className="form-error">
                {errors.firstName.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <input
              {...register('lastName')}
              placeholder="Last Name"
              className="form-input"
            />
            {errors.lastName && (
              <p className="form-error">
                {errors.lastName.message}
              </p>
            )}
          </div>
        </div>

        {/* Email */}
        <div>
          <input
            {...register('email')}
            type="email"
            placeholder="Email Address"
            className="form-input"
          />
          {errors.email && (
            <p className="form-error">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <input
            {...register('phone')}
            type="tel"
            placeholder="Phone Number"
            className="form-input"
          />
          {errors.phone && (
            <p className="form-error">
              {errors.phone.message}
            </p>
          )}
        </div>

        {/* Password */}
        <div>
          <input
            {...register('password')}
            type="password"
            placeholder="Password"
            className="form-input"
          />
          {errors.password && (
            <p className="form-error">
              {errors.password.message}
            </p>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <input
            {...register('confirmPassword')}
            type="password"
            placeholder="Confirm Password"
            className="form-input"
          />
          {errors.confirmPassword && (
            <p className="form-error">
              {errors.confirmPassword.message}
            </p>
          )}
        </div>

        {/* Age and Gender */}
        <div className="form-grid">
          <div>
            <input
              {...register('age')}
              type="number"
              placeholder="Age"
              className="form-input"
            />
            {errors.age && (
              <p className="form-error">
                {errors.age.message}
              </p>
            )}
          </div>
          <div>
            <select
              {...register('gender')}
              className="form-input gender-select"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && (
              <p className="form-error">
                {errors.gender.message}
              </p>
            )}
          </div>
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="submit-button"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  </div>
);
};
export default Register;