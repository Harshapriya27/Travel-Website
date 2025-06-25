// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';

// const AdminDashboard = () => {
//   const [travelers, setTravelers] = useState([
//     { id: 1, name: 'John Doe', email: 'john@example.com', destination: 'Bali', phone: '+1234567890' },
//     { id: 2, name: 'Jane Smith', email: 'jane@example.com', destination: 'Paris', phone: '+0987654321' }
//   ]);

//   const [editingTraveler, setEditingTraveler] = useState(null);
//   const { register, handleSubmit, reset, setValue } = useForm();

//   const handleDelete = (id) => {
//     setTravelers(travelers.filter(traveler => traveler.id !== id));
//   };

//   const handleEdit = (traveler) => {
//     setEditingTraveler(traveler);
//     // Populate form with existing traveler data
//     setValue('name', traveler.name);
//     setValue('email', traveler.email);
//     setValue('destination', traveler.destination);
//     setValue('phone', traveler.phone);
//   };

//   const onSubmit = (data) => {
//     if (editingTraveler) {
//       // Update existing traveler
//       setTravelers(travelers.map(traveler => 
//         traveler.id === editingTraveler.id 
//           ? { ...traveler, ...data } 
//           : traveler
//       ));
//     } else {
//       // Add new traveler
//       const newTraveler = {
//         ...data,
//         id: travelers.length + 1
//       };
//       setTravelers([...travelers, newTraveler]);
//     }

//     // Reset form and editing state
//     reset();
//     setEditingTraveler(null);
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
//       {/* Traveler Form */}
//       <div className="mb-8 bg-white shadow-md rounded px-8 pt-6 pb-8">
//         <h2 className="text-2xl mb-4">
//           {editingTraveler ? 'Edit Traveler' : 'Add New Traveler'}
//         </h2>
//         <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Name
//             </label>
//             <input
//               {...register('name', { required: true })}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
//               placeholder="Traveler Name"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Email
//             </label>
//             <input
//               {...register('email', { required: true })}
//               type="email"
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
//               placeholder="Email Address"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Destination
//             </label>
//             <input
//               {...register('destination', { required: true })}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
//               placeholder="Travel Destination"
//             />
//           </div>
//           <div>
//             <label className="block text-gray-700 text-sm font-bold mb-2">
//               Phone
//             </label>
//             <input
//               {...register('phone')}
//               className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
//               placeholder="Phone Number"
//             />
//           </div>
//           <div className="col-span-2">
//             <button 
//               type="submit" 
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//             >
//               {editingTraveler ? 'Update Traveler' : 'Add Traveler'}
//             </button>
//             {editingTraveler && (
//               <button 
//                 type="button" 
//                 onClick={() => {
//                   reset();
//                   setEditingTraveler(null);
//                 }}
//                 className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
//               >
//                 Cancel
//               </button>
//             )}
//           </div>
//         </form>
//       </div>

//       {/* Travelers Table */}
//       <div className="bg-white shadow-md rounded">
//         <table className="w-full border-collapse">
//           <thead>
//             <tr className="bg-gray-200">
//               <th className="border p-3 text-left">ID</th>
//               <th className="border p-3 text-left">Name</th>
//               <th className="border p-3 text-left">Email</th>
//               <th className="border p-3 text-left">Destination</th>
//               <th className="border p-3 text-left">Phone</th>
//               <th className="border p-3 text-left">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {travelers.map((traveler) => (
//               <tr key={traveler.id} className="hover:bg-gray-100">
//                 <td className="border p-3">{traveler.id}</td>
//                 <td className="border p-3">{traveler.name}</td>
//                 <td className="border p-3">{traveler.email}</td>
//                 <td className="border p-3">{traveler.destination}</td>
//                 <td className="border p-3">{traveler.phone}</td>
//                 <td className="border p-3">
//                   <div className="flex space-x-2">
//                     <button 
//                       onClick={() => handleEdit(traveler)}
//                       className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded text-xs"
//                     >
//                       Edit
//                     </button>
//                     <button 
//                       onClick={() => handleDelete(traveler.id)}
//                       className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs"
//                     >
//                       Delete
//                     </button>
//                   </div>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;

import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

const AdminDashboard = () => {
  const searchedDestinations = useSelector(state => state.travelSearch.searchedDestinations);
  
  const [travelers, setTravelers] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', destination: 'Bali', phone: '+1234567890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', destination: 'Paris', phone: '+0987654321' }
  ]);

  const [destinations, setDestinations] = useState([]);
  
  // Update destinations when searchedDestinations changes
  useEffect(() => {
    if (searchedDestinations.length > 0) {
      setDestinations(searchedDestinations);
    }
  }, [searchedDestinations]);

  const [editingTraveler, setEditingTraveler] = useState(null);
  const { register, handleSubmit, reset, setValue } = useForm();

  const handleDelete = (id) => {
    setTravelers(travelers.filter(traveler => traveler.id !== id));
  };

  const handleEdit = (traveler) => {
    setEditingTraveler(traveler);
    // Populate form with existing traveler data
    setValue('name', traveler.name);
    setValue('email', traveler.email);
    setValue('destination', traveler.destination);
    setValue('phone', traveler.phone);
  };

  const onSubmit = (data) => {
    if (editingTraveler) {
      // Update existing traveler
      setTravelers(travelers.map(traveler => 
        traveler.id === editingTraveler.id 
          ? { ...traveler, ...data } 
          : traveler
      ));
    } else {
      // Add new traveler
      const newTraveler = {
        ...data,
        id: travelers.length + 1
      };
      setTravelers([...travelers, newTraveler]);
    }

    // Reset form and editing state
    reset();
    setEditingTraveler(null);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      {/* Existing Traveler Form */}
      {/* ... (previous form code remains the same) ... */}

             {/* Traveler Form */}
       <div className="mb-8 bg-white shadow-md rounded px-8 pt-6 pb-8">
         <h2 className="text-2xl mb-4">
           {editingTraveler ? 'Edit Traveler' : 'Add New Traveler'}
         </h2>
         <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
           <div>
             <label className="block text-gray-700 text-sm font-bold mb-2">
               Name
             </label>
             <input
              {...register('name', { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              placeholder="Traveler Name"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              {...register('email', { required: true })}
              type="email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              placeholder="Email Address"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Destination
            </label>
            <input
              {...register('destination', { required: true })}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              placeholder="Travel Destination"
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone
            </label>
            <input
              {...register('phone')}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700"
              placeholder="Phone Number"
            />
          </div>
          <div className="col-span-2">
            <button 
              type="submit" 
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {editingTraveler ? 'Update Traveler' : 'Add Traveler'}
            </button>
            {editingTraveler && (
              <button 
                type="button" 
                onClick={() => {
                  reset();
                  setEditingTraveler(null);
                }}
                className="ml-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

       {/* Travelers Table */}
       <div className="bg-white shadow-md rounded">
         <table className="w-full border-collapse">
           <thead>
             <tr className="bg-gray-200">
               <th className="border p-3 text-left">ID</th>
               <th className="border p-3 text-left">Name</th>
               <th className="border p-3 text-left">Email</th>
               <th className="border p-3 text-left">Destination</th>
               <th className="border p-3 text-left">Phone</th>
               <th className="border p-3 text-left">Actions</th>
             </tr>
           </thead>
           <tbody>
             {travelers.map((traveler) => (
              <tr key={traveler.id} className="hover:bg-gray-100">
                <td className="border p-3">{traveler.id}</td>
                <td className="border p-3">{traveler.name}</td>
                <td className="border p-3">{traveler.email}</td>
                <td className="border p-3">{traveler.destination}</td>
                <td className="border p-3">{traveler.phone}</td>
                <td className="border p-3">
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => handleEdit(traveler)}
                      className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded text-xs"
                    >
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(traveler.id)}
                      className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded text-xs"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {/* Searched Destinations Section */}
      {destinations.length > 0 && (
        <div className="mt-8 bg-white shadow-md rounded">
          <h2 className="text-2xl p-4 border-b">Recently Searched Destinations</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-3 text-left">Name</th>
                <th className="border p-3 text-left">Description</th>
                <th className="border p-3 text-left">Rating</th>
              </tr>
            </thead>
            <tbody>
              {destinations.map((destination, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="border p-3">{destination.name}</td>
                  <td className="border p-3">{destination.description}</td>
                  <td className="border p-3">
                    {'★'.repeat(Math.round(destination.rating))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;