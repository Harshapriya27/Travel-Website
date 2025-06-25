// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from '../store/authSlice';
// import '../css/Navbar.css';

// const Navbar = () => {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
//   const user = useSelector((state) => state.auth.user);

//   const handleLogout = () => {
//     dispatch(logout());
//     navigate('/login');
//   };

//   return (
//     <nav className="bg-blue-600 text-white p-4 flex justify-between items-center">
//       <div className="logo text-2xl font-bold">
//         <Link to="/">Travel Buddy</Link>
//       </div>
//       <div className="nav-links flex space-x-4">
//         <Link to="/" className="hover:text-blue-200">Home</Link>
//         <Link to="/about" className="hover:text-blue-200">About</Link>
//         <Link to="/places" className="hover:text-blue-200">Places</Link>
//         <Link to="/contact" className="hover:text-blue-200">Contact</Link>
        
//         {!isAuthenticated ? (
//           <>
//             <Link to="/login" className="hover:text-blue-200">Login</Link>
//             {/* <Link to="/register" className="hover:text-blue-200">Register</Link> */}
//           </>
//         ) : (
//           <>
//             {user?.role === 'admin' && (
//               <Link to="/admin" className="hover:text-blue-200">Admin Dashboard</Link>
//             )}
//             <button 
//               onClick={handleLogout} 
//               className="hover:text-blue-200"
//             >
//               Logout
//             </button>
//           </>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import '../css/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="navbar-container">
      <div className="navbar-brand">
        <Link to="/" className="navbar-logo">Travel Buddy</Link>
      </div>
      <div className="navbar-menu">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/about" className="navbar-link">About</Link>
        <Link to="/places" className="navbar-link">Places</Link>
        <Link to="/contact" className="navbar-link">Contact</Link>
        
        {!isAuthenticated ? (
          <div className="navbar-auth-links">
            <Link to="/login" className="navbar-link navbar-login">Login</Link>
          </div>
        ) : (
          <div className="navbar-auth-links">
            {user?.role === 'admin' && (
              <Link to="/admin" className="navbar-link navbar-admin">Admin Dashboard</Link>
            )}
            <button 
              onClick={handleLogout} 
              className="navbar-link navbar-logout"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;