// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// // import '../css/Home.css';

// const travelVideos = [
//   '/videos/beach.mp4',
//   '/videos/mountain.mp4',
//   '/videos/city.mp4'
// ];

// const Home = () => {
//   const [searchData, setSearchData] = useState({
//     source: '',
//     destination: '',
//     checkIn: '',
//     checkOut: '',
//     travelers: 1
//   });

//   const handleSearchChange = (e) => {
//     const { name, value } = e.target;
//     setSearchData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Implement search logic
//     console.log(searchData);
//   };

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000
//   };

//   return (
//     <div className="home-container">
//       {/* Video Background Slider */}
//       <div className="video-slider">
//         <Slider {...sliderSettings}>
//           {travelVideos.map((video, index) => (
//             <div key={index} className="video-slide">
//               <video 
//                 src={video} 
//                 autoPlay 
//                 loop 
//                 muted 
//                 className="w-full h-screen object-cover"
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* Search Section */}
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-8 rounded-lg shadow-lg">
//         <form onSubmit={handleSearch} className="space-y-4">
//           <div className="grid grid-cols-2 gap-4">
//             <input 
//               type="text" 
//               name="source"
//               value={searchData.source}
//               onChange={handleSearchChange}
//               placeholder="Source"
//               className="p-2 border rounded"
//             />
//             <input 
//               type="text" 
//               name="destination"
//               value={searchData.destination}
//               onChange={handleSearchChange}
//               placeholder="Destination"
//               className="p-2 border rounded"
//             />
//           </div>
//           <div className="grid grid-cols-2 gap-4">
//             <input 
//               type="date" 
//               name="checkIn"
//               value={searchData.checkIn}
//               onChange={handleSearchChange}
//               placeholder="Check-in"
//               className="p-2 border rounded"
//             />
//             <input 
//               type="date" 
//               name="checkOut"
//               value={searchData.checkOut}
//               onChange={handleSearchChange}
//               placeholder="Check-out"
//               className="p-2 border rounded"
//             />
//           </div>
//           <div>
//             <input 
//               type="number" 
//               name="travelers"
//               value={searchData.travelers}
//               onChange={handleSearchChange}
//               placeholder="Number of Travelers"
//               min="1"
//               className="w-full p-2 border rounded"
//             />
//           </div>
//           <button 
//             type="submit" 
//             className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
//           >
//             Search Trips
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Home;


// import React, { useState } from 'react';
// import Slider from 'react-slick';
// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';
// import '../css/Home.css';

// const travelVideos = [
//   'https://www.youtube.com/watch?v=35npVaFGHMY',
//   '/videos/mountain.mp4',
//   '/videos/city.mp4'
// ];

// const Home = () => {
//   const [searchData, setSearchData] = useState({
//     source: '',
//     destination: '',
//     checkIn: '',
//     checkOut: '',
//     travelers: 1
//   });

//   const handleSearchChange = (e) => {
//     const { name, value } = e.target;
//     setSearchData(prev => ({
//       ...prev,
//       [name]: value
//     }));
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Implement search logic
//     console.log(searchData);
//   };

//   const sliderSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000
//   };

//   return (
//     <div className="travel-home-container">
//       {/* Video Background Slider */}
//       <div className="travel-video-slider">
//         <Slider {...sliderSettings}>
//           {travelVideos.map((video, index) => (
//             <div key={index} className="travel-video-slide">
//               <video 
//                 src={video} 
//                 autoPlay 
//                 loop 
//                 muted 
//                 className="travel-background-video"
//               />
//             </div>
//           ))}
//         </Slider>
//       </div>

//       {/* Search Section */}
//       <div className="travel-search-overlay">
//         <form onSubmit={handleSearch} className="travel-search-form">
//           <div className="travel-input-grid">
//             <input 
//               type="text" 
//               name="source"
//               value={searchData.source}
//               onChange={handleSearchChange}
//               placeholder="Source"
//               className="travel-input-field"
//             />
//             <input 
//               type="text" 
//               name="destination"
//               value={searchData.destination}
//               onChange={handleSearchChange}
//               placeholder="Destination"
//               className="travel-input-field"
//             />
//           </div>
//           <div className="travel-input-grid">
//             <input 
//               type="date" 
//               name="checkIn"
//               value={searchData.checkIn}
//               onChange={handleSearchChange}
//               placeholder="Check-in"
//               className="travel-input-field"
//             />
//             <input 
//               type="date" 
//               name="checkOut"
//               value={searchData.checkOut}
//               onChange={handleSearchChange}
//               placeholder="Check-out"
//               className="travel-input-field"
//             />
//           </div>
//           <div className="mt-4">
//             <input 
//               type="number" 
//               name="travelers"
//               value={searchData.travelers}
//               onChange={handleSearchChange}
//               placeholder="Number of Travelers"
//               min="1"
//               className="travel-input-field w-full"
//             />
//           </div>
//           <button 
//             type="submit" 
//             className="travel-search-button"
//           >
//             Search Trips
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../css/Home.css";
// import v1 from "../videos/v1.mp4";
// import v2 from "../videos/v2.mp4";
// import v3 from "../videos/v3.mp4";
// import v4 from "../videos/v4.mp4";
// import v5 from "../videos/v5.mp4";
// import v6 from "../videos/v6.mp4";
// import v7 from "../videos/v7.mp4";
// import v8 from "../videos/v8.mp4";

// const travelVideos = [
//   { type: "video", url: v1 },
//   { type: "video", url: v2 },
//   { type: "video", url: v3 },
//   { type: "video", url: v4 },
//   { type: "video", url: v5 },
//   { type: "video", url: v6 },
//   { type: "video", url: v7 },
//   { type: "video", url: v8 }
// ];

// const Home = () => {
//   const [searchData, setSearchData] = useState({
//     source: "",
//     destination: "",
//     checkIn: "",
//     checkOut: "",
//     travelers: 1,
//   });

//   const handleSearchChange = (e) => {
//     const { name, value } = e.target;
//     setSearchData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Implement search logic
//     console.log(searchData);
//   };

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     fade: true,
//     cssEase: 'linear'
//   };

//   return (
//     <div className="travel-home-wrapper">
//       <div className="travel-video-slider-container">
//         <Slider {...sliderSettings}>
//           {travelVideos.map((video, index) => (
//             <div key={index} className="travel-video-slide">
//               {video.type === "youtube" ? (
//                 <iframe
//                   src={video.url}
//                   title={`video-${index}`}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="travel-background-media"
//                 ></iframe>
//               ) : (
//                 <video
//                   src={video.url}
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="travel-background-media"
//                 />
//               )}
//             </div>
//           ))}
//         </Slider>
        
//         <div className="travel-search-overlay">
//           <div className="travel-search-content">
//             <h1 className="travel-search-title">Find Your Perfect Journey</h1>
//             <form onSubmit={handleSearch} className="travel-search-form">
//               <div className="travel-input-row">
//                 <input
//                   type="text"
//                   name="source"
//                   value={searchData.source}
//                   onChange={handleSearchChange}
//                   placeholder="From"
//                   className="travel-input-field"
//                 />
//                 <input
//                   type="text"
//                   name="destination"
//                   value={searchData.destination}
//                   onChange={handleSearchChange}
//                   placeholder="To"
//                   className="travel-input-field"
//                 />
//               </div>
//               <div className="travel-input-row">
//                 <input
//                   type="date"
//                   name="checkIn"
//                   value={searchData.checkIn}
//                   onChange={handleSearchChange}
//                   placeholder="Check-in"
//                   className="travel-input-field"
//                 />
//                 <input
//                   type="date"
//                   name="checkOut"
//                   value={searchData.checkOut}
//                   onChange={handleSearchChange}
//                   placeholder="Check-out"
//                   className="travel-input-field"
//                 />
//               </div>
//               <div className="travel-input-row">
//                 <input
//                   type="number"
//                   name="travelers"
//                   value={searchData.travelers}
//                   onChange={handleSearchChange}
//                   placeholder="Travelers"
//                   min="1"
//                   className="travel-input-field travel-travelers-input"
//                 />
//               </div>
//               <button type="submit" className="travel-search-button">
//                 Search Trips
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "../css/Home.css";
// import v1 from "../videos/v1.mp4";
// import v2 from "../videos/v2.mp4";
// import v3 from "../videos/v3.mp4";
// import v4 from "../videos/v4.mp4";
// import v5 from "../videos/v5.mp4";
// import v6 from "../videos/v6.mp4";
// import v7 from "../videos/v7.mp4";
// import v8 from "../videos/v8.mp4";

// const travelVideos = [
//   { type: "video", url: v1 },
//   { type: "video", url: v2 },
//   { type: "video", url: v3 },
//   { type: "video", url: v4 },
//   { type: "video", url: v5 },
//   { type: "video", url: v6 },
//   { type: "video", url: v7 },
//   { type: "video", url: v8 }
// ];

// const Home = () => {
//   const [searchData, setSearchData] = useState({
//     source: "",
//     destination: "",
//     checkIn: "",
//     checkOut: "",
//     travelers: 1,
//   });

//   const handleSearchChange = (e) => {
//     const { name, value } = e.target;
//     setSearchData((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     // Implement search logic
//     console.log(searchData);
//   };

//   const sliderSettings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     fade: true,
//     cssEase: 'linear'
//   };

//   return (
//     <div className="travel-home-wrapper">
//       <div className="travel-video-slider-container">
//         <Slider {...sliderSettings}>
//           {travelVideos.map((video, index) => (
//             <div key={index} className="travel-video-slide">
//               {video.type === "youtube" ? (
//                 <iframe
//                   src={video.url}
//                   title={`video-${index}`}
//                   frameBorder="0"
//                   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//                   allowFullScreen
//                   className="travel-background-media"
//                 ></iframe>
//               ) : (
//                 <video
//                   src={video.url}
//                   autoPlay
//                   loop
//                   muted
//                   playsInline
//                   className="travel-background-media"
//                 />
//               )}
//             </div>
//           ))}
//         </Slider>
        
//         <div className="travel-search-overlay">
//           <div className="travel-search-content">
//             <h1 className="travel-search-title">Find Your Perfect Journey</h1>
//             <form onSubmit={handleSearch} className="travel-search-form">
//               <div className="travel-search-inputs">
//                 <div className="travel-input-group">
//                   <label htmlFor="source" className="travel-input-label">Source</label>
//                   <input
//                     id="source"
//                     type="text"
//                     name="source"
//                     value={searchData.source}
//                     onChange={handleSearchChange}
//                     placeholder="Enter source"
//                     className="travel-input-field"
//                   />
//                 </div>
//                 <div className="travel-input-group">
//                   <label htmlFor="destination" className="travel-input-label">Destination</label>
//                   <input
//                     id="destination"
//                     type="text"
//                     name="destination"
//                     value={searchData.destination}
//                     onChange={handleSearchChange}
//                     placeholder="Enter destination"
//                     className="travel-input-field"
//                   />
//                 </div>
//                 <div className="travel-input-group">
//                   <label htmlFor="checkIn" className="travel-input-label">Check-in</label>
//                   <input
//                     id="checkIn"
//                     type="date"
//                     name="checkIn"
//                     value={searchData.checkIn}
//                     onChange={handleSearchChange}
//                     className="travel-input-field"
//                   />
//                 </div>
//                 <div className="travel-input-group">
//                   <label htmlFor="checkOut" className="travel-input-label">Check-out</label>
//                   <input
//                     id="checkOut"
//                     type="date"
//                     name="checkOut"
//                     value={searchData.checkOut}
//                     onChange={handleSearchChange}
//                     className="travel-input-field"
//                   />
//                 </div>
//                 <div className="travel-input-group">
//                   <label htmlFor="travelers" className="travel-input-label">Travelers</label>
//                   <input
//                     id="travelers"
//                     type="number"
//                     name="travelers"
//                     value={searchData.travelers}
//                     onChange={handleSearchChange}
//                     placeholder="Travelers"
//                     min="1"
//                     className="travel-input-field"
//                   />
//                 </div>
//               </div>
//               <button type="submit" className="travel-search-button">
//                 Search Trips
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../css/Home.css";
import { setSearchData } from '../store/travelSearchSlice';
import v1 from "../videos/v1.mp4";
import v2 from "../videos/v2.mp4";
// import v3 from "../videos/v3.mp4";
import v4 from "../videos/v4.mp4";
import v5 from "../videos/v5.mp4";
import v6 from "../videos/v6.mp4";
import v7 from "../videos/v7.mp4";
import v8 from "../videos/v8.mp4";

const travelVideos = [
  { type: "video", url: v1 },
  { type: "video", url: v2 },
  // { type: "video", url: v3 },
  { type: "video", url: v4 },
  { type: "video", url: v5 },
  { type: "video", url: v6 },
  { type: "video", url: v7 },
  { type: "video", url: v8 }
];

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [searchData, setLocalSearchData] = useState({
    source: "",
    destination: "",
    checkIn: "",
    checkOut: "",
    travelers: 1,
  });

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setLocalSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    
    // Dispatch the search data to Redux store
    dispatch(setSearchData(searchData));
    
    // Navigate to Places page with the destination
    navigate('/places', { state: { searchDestination: searchData.destination } });
  };

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: 'linear'
  };

  return (
    <div className="travel-home-wrapper">
      <div className="travel-video-slider-container">
        <Slider {...sliderSettings}>
          {travelVideos.map((video, index) => (
            <div key={index} className="travel-video-slide">
              {video.type === "youtube" ? (
                <iframe
                  src={video.url}
                  title={`video-${index}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="travel-background-media"
                ></iframe>
              ) : (
                <video
                  src={video.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="travel-background-media"
                />
              )}
            </div>
          ))}
        </Slider>
        
        <div className="travel-search-overlay">
          <div className="travel-search-content">
            <h1 className="travel-search-title">Find Your Perfect Journey</h1>
            <form onSubmit={handleSearch} className="travel-search-form">
              <div className="travel-search-inputs">
                <div className="travel-input-group">
                  <label htmlFor="source" className="travel-input-label">Source</label>
                  <input
                    id="source"
                    type="text"
                    name="source"
                    value={searchData.source}
                    onChange={handleSearchChange}
                    placeholder="Enter source"
                    className="travel-input-field"
                  />
                </div>
                <div className="travel-input-group">
                  <label htmlFor="destination" className="travel-input-label">Destination</label>
                  <input
                    id="destination"
                    type="text"
                    name="destination"
                    value={searchData.destination}
                    onChange={handleSearchChange}
                    placeholder="Enter destination"
                    className="travel-input-field"
                  />
                </div>
                <div className="travel-input-group">
                  <label htmlFor="checkIn" className="travel-input-label">Check-in</label>
                  <input
                    id="checkIn"
                    type="date"
                    name="checkIn"
                    value={searchData.checkIn}
                    onChange={handleSearchChange}
                    className="travel-input-field"
                  />
                </div>
                <div className="travel-input-group">
                  <label htmlFor="checkOut" className="travel-input-label">Check-out</label>
                  <input
                    id="checkOut"
                    type="date"
                    name="checkOut"
                    value={searchData.checkOut}
                    onChange={handleSearchChange}
                    className="travel-input-field"
                  />
                </div>
                <div className="travel-input-group">
                  <label htmlFor="travelers" className="travel-input-label">Travelers</label>
                  <input
                    id="travelers"
                    type="number"
                    name="travelers"
                    value={searchData.travelers}
                    onChange={handleSearchChange}
                    placeholder="Travelers"
                    min="1"
                    className="travel-input-field"
                  />
                </div>
              </div>
              <button type="submit" className="travel-search-button">
                Search Trips
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;