import React, { useEffect } from 'react';
import '../index.scss'
import { useSelector, useDispatch } from 'react-redux';
import { GlobalState } from '../store';
import { UserData } from '../types/UserManager';
import { fetchUserInitialState } from '../store/UserManager/userManagerSlice';
import UsersTable from './UserManager/UsersTable';

const UserManager: React.FC = () => {
  const dispatch = useDispatch()
  const users = useSelector<GlobalState, Array<UserData>>((state) => state.userManager)

  useEffect(() => {
    if (users.length >= 0)
      dispatch<any>(fetchUserInitialState())
  }, [])

  const handleDelete = (id: number) => {
    alert('deleting: ' + id)
  }

  return (
    <div className='flex flex-col h-dvh p-8 items-center bg-stone-800 text-white overflow-y-auto'>
      <h1 className='mb-4 font-extrabold text-5xl'>User Management</h1>
      <div className='container'>
        <UsersTable users={users} onDelete={handleDelete} />
      </div>
    </div>
  );
};

export default UserManager;