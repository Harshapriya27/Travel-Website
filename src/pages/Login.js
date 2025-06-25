// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../store/authSlice';

// // Validation Schema
// const loginSchema = yup.object().shape({
//   email: yup.string().email('Invalid email').required('Email is required'),
//   password: yup.string()
//     .required('Password is required')
//     .min(6, 'Password must be at least 6 characters')
// });

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { 
//     register, 
//     handleSubmit, 
//     formState: { errors } 
//   } = useForm({
//     resolver: yupResolver(loginSchema)
//   });

//   const onSubmit = (data) => {
//     // Simulate login (replace with actual authentication logic)
//     const mockUser = {
//       id: '1',
//       email: data.email,
//       role: data.email === 'admin@example.com' ? 'admin' : 'user'
//     };

//     dispatch(login({
//       user: mockUser,
//       token: 'mock-token'
//     }));

//     navigate(mockUser.role === 'admin' ? '/admin' : '/');
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-md w-full space-y-8">
//         <div>
//           <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
//             Sign in to your account
//           </h2>
//         </div>
//         <form 
//           className="mt-8 space-y-6" 
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <div className="rounded-md shadow-sm -space-y-px">
//             <div>
//               <input
//                 {...register('email')}
//                 type="email"
//                 placeholder="Email address"
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.email.message}
//                 </p>
//               )}
//             </div>
//             <div>
//               <input
//                 {...register('password')}
//                 type="password"
//                 placeholder="Password"
//                 className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
//               />
//               {errors.password && (
//                 <p className="text-red-500 text-xs mt-1">
//                   {errors.password.message}
//                 </p>
//               )}
//             </div>
//           </div>
//           <div>
//             <button
//               type="submit"
//               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//             >
//               Sign in
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;


// import React from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../store/authSlice';
// import '../css/Login.css';

// // Validation Schema
// const loginSchema = yup.object().shape({
//   email: yup.string().email('Invalid email').required('Email is required'),
//   password: yup.string()
//     .required('Password is required')
//     .min(6, 'Password must be at least 6 characters')
// });

// const Login = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();
//   const { 
//     register, 
//     handleSubmit, 
//     formState: { errors } 
//   } = useForm({
//     resolver: yupResolver(loginSchema)
//   });

//   const onSubmit = (data) => {
//     // Simulate login (replace with actual authentication logic)
//     const mockUser = {
//       id: '1',
//       email: data.email,
//       role: data.email === 'admin@example.com' ? 'admin' : 'user'
//     };

//     dispatch(login({
//       user: mockUser,
//       token: 'mock-token'
//     }));

//     navigate(mockUser.role === 'admin' ? '/admin' : '/');
//   };

//   return (
//     <div className="login-container">
//       <div className="login-wrapper">
//         <div className="login-header">
//           <h2>Welcome Back</h2>
//           <p>Sign in to continue to your account</p>
//         </div>
//         <form 
//           className="login-form" 
//           onSubmit={handleSubmit(onSubmit)}
//         >
//           <div className="form-group">
//             <label htmlFor="email">Email Address</label>
//             <input
//               id="email"
//               {...register('email')}
//               type="email"
//               placeholder="Enter your email"
//               className={`form-input ${errors.email ? 'input-error' : ''}`}
//             />
//             {errors.email && (
//               <span className="error-message">
//                 {errors.email.message}
//               </span>
//             )}
//           </div>
          
//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               id="password"
//               {...register('password')}
//               type="password"
//               placeholder="Enter your password"
//               className={`form-input ${errors.password ? 'input-error' : ''}`}
//             />
//             {errors.password && (
//               <span className="error-message">
//                 {errors.password.message}
//               </span>
//             )}
//           </div>
          
//           <button
//             type="submit"
//             className="login-button"
//           >
//             Sign In
//           </button>

//           <div className="login-footer">
//             <p>Don't have an account? <a href="/signup">Sign Up</a></p>
//             <a href="/forgot-password">Forgot Password?</a>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../store/authSlice';
import '../css/Login.css';

// Validation Schema
const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters')
});

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { 
    register, 
    handleSubmit, 
    formState: { errors } 
  } = useForm({
    resolver: yupResolver(loginSchema)
  });

  const onSubmit = (data) => {
    // Simulate login (replace with actual authentication logic)
    const mockUser = {
      id: '1',
      email: data.email,
      role: data.email === 'admin@example.com' ? 'admin' : 'user'
    };

    dispatch(login({
      user: mockUser,
      token: 'mock-token'
    }));

    navigate(mockUser.role === 'admin' ? '/admin' : '/');
  };

  // New function to handle signup navigation
  const handleSignupClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
    navigate('/Register'); // Navigate to the register page
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-header">
          <h2>Welcome Back</h2>
          <p>Sign in to continue to your account</p>
        </div>
        <form 
          className="login-form" 
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              {...register('email')}
              type="email"
              placeholder="Enter your email"
              className={`form-input ${errors.email ? 'input-error' : ''}`}
            />
            {errors.email && (
              <span className="error-message">
                {errors.email.message}
              </span>
            )}
          </div>
          
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              {...register('password')}
              type="password"
              placeholder="Enter your password"
              className={`form-input ${errors.password ? 'input-error' : ''}`}
            />
            {errors.password && (
              <span className="error-message">
                {errors.password.message}
              </span>
            )}
          </div>
          
          <button
            type="submit"
            className="login-button"
          >
            Sign In
          </button>

          <div className="login-footer">
            <p>
              Don't have an account? 
              <a 
                href="/Register" 
                onClick={handleSignupClick}
              >
                Sign Up
              </a>
            </p>
            <a href="/forgot-password">Forgot Password?</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;