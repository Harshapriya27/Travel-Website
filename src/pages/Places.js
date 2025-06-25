// import React, { useState } from 'react';
// // import '../css/Places.css';

// const placesData = [
//   { 
//     id: 1, 
//     name: 'Bali, Indonesia', 
//     description: 'Tropical paradise with beautiful beaches and vibrant culture.',
//     image: '/bali.jpg',
//     rating: 4.8
//   },
//   { 
//     id: 2, 
//     name: 'Paris, France', 
//     description: 'The city of love, art, and iconic landmarks.',
//     image: '/paris.jpg',
//     rating: 4.9
//   },
//   { 
//     id: 3, 
//     name: 'Tokyo, Japan', 
//     description: 'A blend of ultramodern and traditional experiences.',
//     image: '/tokyo.jpg',
//     rating: 4.7
//   }
// ];

// const Places = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredPlaces = placesData.filter(place => 
//     place.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-4xl font-bold text-center mb-8 text-blue-600">
//         Explore Destinations
//       </h1>

//       <div className="mb-8 max-w-lg mx-auto">
//         <input 
//           type="text"
//           placeholder="Search destinations..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//         />
//       </div>

//       <div className="grid md:grid-cols-3 gap-6">
//         {filteredPlaces.map((place) => (
//           <div 
//             key={place.id} 
//             className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow"
//           >
//             <img 
//               src={place.image} 
//               alt={place.name} 
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h2 className="text-2xl font-semibold mb-2">{place.name}</h2>
//               <p className="text-gray-600 mb-4">{place.description}</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-yellow-500">
//                   {'★'.repeat(Math.round(place.rating))}
//                 </span>
//                 <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
//                   Explore
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Places;


// import React, { useState } from 'react';
// import '../css/Places.css';

// const placesData = [
//   { 
//     id: 1, 
//     name: 'Santorini, Greece', 
//     description: 'Stunning whitewashed buildings and breathtaking Aegean Sea views.',
//     image: '/santorini.jpg',
//     rating: 4.9
//   },
//   { 
//     id: 2, 
//     name: 'Banff National Park, Canada', 
//     description: 'Majestic Rocky Mountains with turquoise lakes and pristine wilderness.',
//     image: '/banff.jpg',
//     rating: 4.8
//   },
//   { 
//     id: 3, 
//     name: 'Queenstown, New Zealand', 
//     description: 'Adventure capital with stunning landscapes and outdoor activities.',
//     image: '/queenstown.jpg',
//     rating: 4.7
//   },
//   { 
//     id: 4, 
//     name: 'Maldives', 
//     description: 'Tropical paradise with crystal-clear waters and overwater bungalows.',
//     image: '/maldives.jpg',
//     rating: 4.9
//   },
//   { 
//     id: 5, 
//     name: 'Kyoto, Japan', 
//     description: 'Ancient temples, traditional gardens, and rich cultural heritage.',
//     image: '/kyoto.jpg',
//     rating: 4.8
//   },
//   { 
//     id: 6, 
//     name: 'Machu Picchu, Peru', 
//     description: 'Iconic Incan citadel set high in the Andes Mountains.',
//     image: '/machu-picchu.jpg',
//     rating: 4.7
//   }
// ];

// const Places = () => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredPlaces = placesData.filter(place => 
//     place.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="destination-container-main">
//     <div className="destination-container">
//       <h1 className="destination-title">Discover Magical Destinations</h1>

//       <div className="search-wrapper">
//         <input 
//           type="text"
//           placeholder="Search your dream destination..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="destination-search"
//         />
//       </div>

//       <div className="destination-grid">
//         {filteredPlaces.map((place) => (
//           <div 
//             key={place.id} 
//             className="destination-card"
//           >
//             <div className="destination-image-wrapper">
//               <img 
//                 src={place.image} 
//                 alt={place.name} 
//                 className="destination-image"
//               />
//             </div>
//             <div className="destination-content">
//               <h2 className="destination-name">{place.name}</h2>
//               <p className="destination-description">{place.description}</p>
//               <div className="destination-footer">
//                 <span className="destination-rating">
//                   {'★'.repeat(Math.round(place.rating))}
//                 </span>
//                 <button className="destination-button">
//                   Explore Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Places;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../css/Places.css';

// import santoriniImage from '../images/santorini-greece.avif';
// import banffImage from '../images/banff-national-park-canada.jpg';
// import queenstownImage from '../images/queenstown.jpg';
// import maldivesImage from '../images/maldives.jpg';
// import kyotoImage from '../images/kyoto.jpg';
// import machuPicchuImage from '../images/machu-picchu.jpg';

// const placesData = [
//   { 
//     id: 1, 
//     name: 'Santorini, Greece', 
//     description: 'Stunning whitewashed buildings and breathtaking Aegean Sea views.',
//     image: santoriniImage,
//     rating: 4.9,
//     exploreUrl: 'https://www.santorini.net/'
//   },
//   { 
//     id: 2, 
//     name: 'Banff National Park, Canada', 
//     description: 'Majestic Rocky Mountains with turquoise lakes and pristine wilderness.',
//     image: banffImage,
//     rating: 4.8,
//     exploreUrl: 'https://www.banffnationalpark.com/'
//   },
//   { 
//     id: 3, 
//     name: 'Queenstown, New Zealand', 
//     description: 'Adventure capital with stunning landscapes and outdoor activities.',
//     image: queenstownImage,
//     rating: 4.7,
//     exploreUrl: 'https://www.queenstownnz.co.nz/'
//   },
//   { 
//     id: 4, 
//     name: 'Maldives', 
//     description: 'Tropical paradise with crystal-clear waters and overwater bungalows.',
//     image: maldivesImage,
//     rating: 4.9,
//     exploreUrl: 'https://visitmaldives.com/'
//   },
//   { 
//     id: 5, 
//     name: 'Kyoto, Japan', 
//     description: 'Ancient temples, traditional gardens, and rich cultural heritage.',
//     image: kyotoImage,
//     rating: 4.8,
//     exploreUrl: 'https://www.japan-guide.com/e/e2164.html'
//   },
//   { 
//     id: 6, 
//     name: 'Machu Picchu, Peru', 
//     description: 'Iconic Incan citadel set high in the Andes Mountains.',
//     image: machuPicchuImage,
//     rating: 4.7,
//     exploreUrl: 'https://www.peru.travel/en/machu-picchu'
//   }
// ];

// const Places = () => {
//   const navigate = useNavigate();
//   const [searchTerm, setSearchTerm] = useState('');

//   const filteredPlaces = placesData.filter(place => 
//     place.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleExploreClick = (url) => {
//     // Open the URL in a new tab
//     window.open(url, '_blank', 'noopener,noreferrer');
//   };

//   return (
//     <div className="destination-container-main">
//     <div className="destination-container">
//       <h1 className="destination-title">Discover Magical Destinations</h1>

//       <div className="search-wrapper">
//         <input 
//           type="text"
//           placeholder="Search your dream destination..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//           className="destination-search"
//         />
//       </div>

//       <div className="destination-grid">
//         {filteredPlaces.map((place) => (
//           <div 
//             key={place.id} 
//             className="destination-card"
//           >
//             <div className="destination-image-wrapper">
//               <img 
//                 src={place.image} 
//                 alt={place.name} 
//                 className="destination-image"
//               />
//             </div>
//             <div className="destination-content">
//               <h2 className="destination-name">{place.name}</h2>
//               <p className="destination-description">{place.description}</p>
//               <div className="destination-footer">
//                 <span className="destination-rating">
//                   {'★'.repeat(Math.round(place.rating))}
//                 </span>
//                 <button 
//                   className="destination-button"
//                   onClick={() => handleExploreClick(place.exploreUrl)}
//                 >
//                   Explore Now
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Places;


import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { addSearchedDestination } from '../store/travelSearchSlice';
import '../css/Places.css';

import santoriniImage from '../images/santorini-greece.avif';
import banffImage from '../images/banff-national-park-canada.jpg';
import queenstownImage from '../images/queenstown.jpg';
import maldivesImage from '../images/maldives.jpg';
import kyotoImage from '../images/kyoto.jpg';
import machuPicchuImage from '../images/machu-picchu.jpg';
import tajMahalImage from '../images/tajMahalImage.jpg';
import jaipurImage from '../images/jaipurImage.jpg';
import keralaBackwatersImage from '../images/keralaBackwatersImage.jpg';
import varanasiImage from '../images/varanasiImage.jpg';
import lehLadakhImage from '../images/lehLadakhImage.jpg';
import goaImage from '../images/goaImage.jpg';

const placesData = [
  { 
    id: 1, 
    name: 'Taj Mahal, India', 
    description: 'Iconic white marble mausoleum and symbol of love in Agra.',
    image: tajMahalImage,
    rating: 5.0,
    exploreUrl: 'https://www.tajmahal.gov.in/'
  },
  { 
    id: 2, 
    name: 'Jaipur, India', 
    description: 'The Pink City with grand palaces, forts, and vibrant markets.',
    image: jaipurImage,
    rating: 4.8,
    exploreUrl: 'https://tourism.rajasthan.gov.in/jaipur.html'
  },
  { 
    id: 3, 
    name: 'Kerala Backwaters, India', 
    description: 'Serene network of lagoons, lakes, and canals with lush greenery.',
    image: keralaBackwatersImage,
    rating: 4.9,
    exploreUrl: 'https://www.keralatourism.org/'
  },
  { 
    id: 4, 
    name: 'Varanasi, India', 
    description: 'Spiritual city with sacred ghats along the Ganges River.',
    image: varanasiImage,
    rating: 4.7,
    exploreUrl: 'https://varanasi.nic.in/'
  },
  { 
    id: 5, 
    name: 'Leh-Ladakh, India', 
    description: 'Stunning Himalayan landscapes with high-altitude lakes and monasteries.',
    image: lehLadakhImage,
    rating: 4.9,
    exploreUrl: 'https://www.getyourguide.com/ladakh-l120700/tours-tc1/?cmp=bing&ad_id=78615286504565&adgroup_id=1257841953389582&bid_match_type=bb&campaign_id=710159066&device=c&feed_item_id=&keyword=-l120700%2F&loc_interest_ms=133548&loc_physical_ms=155300&match_type=b&msclkid=52e244c8b2b61baefc1a2390a2ee32c9&network=o&partner_id=CD951&target_id=dat-2330414895350500&utm_adgroup=lc%3D120700%3Aladakh%7Cfn%3Df1%7Cagt%3Ddsa&utm_campaign=dc%3D55%3Ain%7Clc%3D120700%3Aladakh%7Cct%3Dcore%7Cln%3D29%3Aen%7Ctc%3Dall&utm_keyword=-l120700%2F&utm_medium=paid_search&utm_query=ladakh%20travel%20agency&utm_source=bing'
  },
  { 
    id: 6, 
    name: 'Goa, India', 
    description: 'Famous for its beaches, nightlife, and Portuguese heritage.',
    image: goaImage,
    rating: 4.8,
    exploreUrl: 'https://www.goatourism.gov.in/'
  },
  { 
    id: 7, 
    name: 'Santorini, Greece', 
    description: 'Stunning whitewashed buildings and breathtaking Aegean Sea views.',
    image: santoriniImage,
    rating: 4.9,
    exploreUrl: 'https://www.santorini.net/'
  },
  { 
    id: 8, 
    name: 'Banff National Park, Canada', 
    description: 'Majestic Rocky Mountains with turquoise lakes and pristine wilderness.',
    image: banffImage,
    rating: 4.8,
    exploreUrl: 'https://www.banffnationalpark.com/'
  },
  { 
    id: 9, 
    name: 'Queenstown, New Zealand', 
    description: 'Adventure capital with stunning landscapes and outdoor activities.',
    image: queenstownImage,
    rating: 4.7,
    exploreUrl: 'https://www.queenstownnz.co.nz/'
  },
  { 
    id: 10, 
    name: 'Maldives', 
    description: 'Tropical paradise with crystal-clear waters and overwater bungalows.',
    image: maldivesImage,
    rating: 4.9,
    exploreUrl: 'https://visitmaldives.com/'
  },
  { 
    id: 11, 
    name: 'Kyoto, Japan', 
    description: 'Ancient temples, traditional gardens, and rich cultural heritage.',
    image: kyotoImage,
    rating: 4.8,
    exploreUrl: 'https://www.japan-guide.com/e/e2164.html'
  },
  { 
    id: 12, 
    name: 'Machu Picchu, Peru', 
    description: 'Iconic Incan citadel set high in the Andes Mountains.',
    image: machuPicchuImage,
    rating: 4.7,
    exploreUrl: 'https://www.peru.travel/en/machu-picchu'
  }
];

const Places = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const searchData = useSelector(state => state.travelSearch.searchData);

  const [searchTerm, setSearchTerm] = useState('');

  // Use search destination from navigation state or Redux search data
  useEffect(() => {
    if (location.state?.searchDestination) {
      setSearchTerm(location.state.searchDestination);
    } else if (searchData?.destination) {
      setSearchTerm(searchData.destination);
    }
  }, [location.state, searchData]);

  const filteredPlaces = placesData.filter(place => 
    place.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleExploreClick = (place) => {
    // Open the URL in a new tab
    window.open(place.exploreUrl, '_blank', 'noopener,noreferrer');
    
    // Add to searched destinations in Redux store
    dispatch(addSearchedDestination(place));
  };

  return (
    <div className="destination-container-main">
      <div className="destination-container">
        <h1 className="destination-title">Discover Magical Destinations</h1>

        <div className="search-wrapper">
          <input 
            type="text"
            placeholder="Search your dream destination..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="destination-search"
          />
        </div>

        <div className="destination-grid">
          {filteredPlaces.map((place) => (
            <div 
              key={place.id} 
              className="destination-card"
            >
              <div className="destination-image-wrapper">
                <img 
                  src={place.image} 
                  alt={place.name} 
                  className="destination-image"
                />
              </div>
              <div className="destination-content">
                <h2 className="destination-name">{place.name}</h2>
                <p className="destination-description">{place.description}</p>
                <div className="destination-footer">
                  <span className="destination-rating">
                    {'★'.repeat(Math.round(place.rating))}
                  </span>
                  <button 
                    className="destination-button"
                    onClick={() => handleExploreClick(place)}
                  >
                    Explore Now
                  </button>
                </div>
                <button 
      className="book"
      onClick={() => navigate('/booking', { state: { place } })}
    >
      Book
    </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;