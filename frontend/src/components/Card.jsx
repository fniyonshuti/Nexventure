import React from 'react'

const Card = ({img,fullname,jobtitle,description,buttoncontent}) => {
  return (
    <div className="max-w-sm w-full bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
      <img
        className="w-full h-48 object-cover"
        src={img}
        alt="Profile"
      />
      <div className="p-4">
        <h1 className="text-2xl font-semibold text-gray-900">{fullname}</h1>
        <h2 className="text-xl font-bold text-gray-800">{jobtitle}</h2>
        <p className="mt-2 text-gray-600">{description}</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            {buttoncontent}
        </button>
      </div>
    </div>
  );
  
}

export default Card