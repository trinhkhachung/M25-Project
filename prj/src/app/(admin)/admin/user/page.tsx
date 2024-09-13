"use client";

import axios from 'axios';
import React, { useState, useEffect } from 'react';

interface User {
  id: string;
  name?: string;
  email: string;
  address: string;
  blocked: boolean;
}

const UsersPage: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get<User[]>('http://localhost:8080/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleBlockToggle = (userId: string, isBlocked: boolean) => {
    axios.patch(`http://localhost:8080/users/${userId}`, {
      blocked: !isBlocked
    })
    .then(response => {
      setUsers(users.map(user => 
        user.id === userId ? { ...user, blocked: !isBlocked } : user
      ));
    })
    .catch(error => console.error('Error updating user:', error));
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <input 
        type="text" 
        placeholder="Search by name" 
        value={searchTerm} 
        onChange={handleSearch} 
        className="mb-4 p-2 border border-gray-300 rounded w-full"
      />
      <ul className="list-none p-0">
        {users
          .filter(user => user.name && user.name.toLowerCase().includes(searchTerm.toLowerCase()))
          .map(user => (
            <li key={user.id} className="bg-white p-4 mb-2 border rounded shadow">
              <div className="mb-2">
                <div className="font-bold">Name: {user.name}</div>
                <div>Email: {user.email}</div>
                <div>Address: {user.address}</div>
                <div>Blocked: {user.blocked ? 'Yes' : 'No'}</div>
              </div>
              <button 
                onClick={() => handleBlockToggle(user.id, user.blocked)}
                className={`py-2 px-4 rounded text-white ${user.blocked ? 'bg-green-500 hover:bg-green-600' : 'bg-red-500 hover:bg-red-600'}`}
              >
                {user.blocked ? 'Unblock' : 'Block'}
              </button>
            </li>
          ))
        }
      </ul>
    </div>
  );
};

export default UsersPage;
