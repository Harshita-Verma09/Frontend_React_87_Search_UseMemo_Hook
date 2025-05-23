import React, { useMemo, useState } from 'react';

const users = [
  { id: 1, name: "Charu" },
  { id: 2, name: "Ram" },
  { id: 3, name: "Riya" },
  { id: 4, name: "Shreya" },
  { id: 5, name: "Shyam" },
  { id: 6, name: "Raju" },
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filterUsers = useMemo(() => {
    console.log("Filtering....");
    return users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6">🔍 Search Users</h1>
      <input
        type="text"
        placeholder="Type a name..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        className="w-full max-w-md px-4 py-2 mb-6 text-white bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <ul className="w-full max-w-md">
        {filterUsers.length > 0 ? (
          filterUsers.map(user => (
            <li
              key={user.id}
              className="px-4 py-2 bg-gray-800 border-b border-gray-700 rounded hover:bg-gray-700 transition duration-200"
            >
              {user.name}
            </li>
          ))
        ) : (
          <li className="px-4 py-2 text-gray-400">No users found</li>
        )}
      </ul>
    </div>
  );
};

export default Search;
