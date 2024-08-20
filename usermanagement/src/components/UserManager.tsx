import React, { useEffect, useState } from 'react';
import '../tailwind.css'

type UserData = {
  name: {
    first: string
    last: string
  },
  login: {
    uuid: string
    username: string
    password: string
  },
  email: string
  id: {
    name: string
    value: string
  },
  cell: string
}

const UserManager: React.FC = () => {

  const [isLoading, setIsLoading] = useState(true)
  const [users, setUsers] = useState<Array<UserData>>([])

  useEffect(() => {
    fetch("https://randomuser.me/api/?format=json&inc=name,login,id,email,picture,cell&results=20&noinfo")
      .then((response) => response.json())
      .then((data) => {
        console.log(data)
        setUsers(data.results)
        setIsLoading(false)
      })
  }, [])

  return (
    <div>
      <h1>User Management</h1>
      <div>
        <table className="flex-auto border-collapse border border-slate-500">
          <thead>
            <tr>
              <th className="border border-slate-600">Name</th>
              <th className="border border-slate-600">username</th>
              <th className="border border-slate-600">email</th>
              <th className="border border-slate-600">cell</th>
            </tr>
          </thead>
          <tbody>
            {isLoading ?
              <tr>
                <td colSpan={2}>Loading...</td>
              </tr>
              :
              users.map(user => (
                <tr key={user.login.uuid}>
                  <td className="border border-slate-700">{`${user.name.first} ${user.name.last}`}</td>
                  <td className="border border-slate-700">{user.login.username}</td>
                  <td className="border border-slate-700">{user.email}</td>
                  <td className="border border-slate-700">{user.cell}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserManager;