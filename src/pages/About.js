// import React from 'react';
// import '../css/About.css';

// const About = () => {
//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
//           About Travel Buddy
//         </h1>
        
//         <div className="grid md:grid-cols-2 gap-8">
//           <div>
//             <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
//             <p className="text-gray-700 mb-4">
//               Travel Buddy was founded in 2024 with a simple mission: to make travel 
//               accessible, enjoyable, and memorable for everyone. We believe that 
//               traveling is not just about destinations, but about experiences.
//             </p>
//           </div>
          
//           <div>
//             <h2 className="text-2xl font-semibold mb-4">Our Vision</h2>
//             <p className="text-gray-700 mb-4">
//               We aim to connect travelers with unique destinations, provide 
//               personalized travel experiences, and create a community of 
//               adventurers who share a passion for exploring the world.
//             </p>
//           </div>
//         </div>

//         <div className="mt-8 text-center">
//           <h2 className="text-3xl font-bold mb-6 text-blue-600">
//             Our Team
//           </h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {[
//               { name: 'John Doe', role: 'Founder', image: '/placeholder-1.jpg' },
//               { name: 'Jane Smith', role: 'Chief Travel Officer', image: '/placeholder-2.jpg' },
//               { name: 'Mike Johnson', role: 'Customer Experience', image: '/placeholder-3.jpg' }
//             ].map((member, index) => (
//               <div 
//                 key={index} 
//                 className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow"
//               >
//                 <img 
//                   src={member.image} 
//                   alt={member.name} 
//                   className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
//                 />
//                 <h3 className="text-xl font-semibold text-center">{member.name}</h3>
//                 <p className="text-gray-600 text-center">{member.role}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;


import React from 'react';
import '../css/About.css';
import harshita from '../images/Harshita.webp';
import arjun from '../images/Arjun.jpg';
import bindu from '../images/Bindu.jpg';

const About = () => {
  return (
    <div className="travel-buddy-about-wrapper">
      <div className="about-content-container">
        <h1 className="about-main-title">About Travel Buddy</h1>
        
        <div className="about-story-vision-grid">
          <div className="about-story-section">
            <h2 className="about-section-heading">Our Story</h2>
            <p className="about-description">
              Travel Buddy was founded in 2024 with a simple mission: to make travel 
              accessible, enjoyable, and memorable for everyone. We believe that 
              traveling is not just about destinations, but about experiences.
            </p>
          </div>
          
          <div className="about-vision-section">
            <h2 className="about-section-heading">Our Vision</h2>
            <p className="about-description">
              We aim to connect travelers with unique destinations, provide 
              personalized travel experiences, and create a community of 
              adventurers who share a passion for exploring the world.
            </p>
          </div>
        </div>

        <div className="about-team-section">
          <h2 className="about-team-title">Our Team</h2>
          <div className="about-team-grid">
            {[
              { name: 'Harshita', role: 'Founder', image: harshita },
              { name: 'Arjun', role: 'Chief Travel Officer', image: arjun },
              { name: 'Bindu ', role: 'Customer Experience', image: bindu }
            ].map((member, index) => (
              <div 
                key={index} 
                className="about-team-member-card"
              >
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="about-team-member-image"
                />
                <h3 className="about-team-member-name">{member.name}</h3>
                <p className="about-team-member-role">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;