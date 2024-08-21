import React from "react";
import { UserData } from "../../types/UserManager";

export type UsersTableProps = {
    users: Array<UserData>
    onDelete: (id: number) => void
}

const UsersTable: React.FC<UsersTableProps> = ({ users, onDelete }) => {

    const showNoRecords = users.length <= 0

    return (
        <>
            <table className="hidden sm:table w-full bg-white rounded-lg overflow-hidden my-5">
                <thead>
                    <tr className=' bg-teal-400 uppercase'>
                        <th className="p-3 text-center">id</th>
                        <th className="p-3 text-left">name</th>
                        <th className="p-3 text-left">username</th>
                        <th className="p-3 text-left">email</th>
                        <th className="p-3 text-left">actions</th>
                    </tr>
                </thead>
                <tbody className='text-black'>
                    {showNoRecords ?
                        <tr>
                            <td colSpan={4}>No records found</td>
                        </tr>
                        :
                        users.map(user => (
                            <tr key={user.id} className='hover:bg-gray-100'>
                                <td className="border-grey-light border p-3 text-center">{user.id}</td>
                                <td className="border-grey-light border p-3">{user.name}</td>
                                <td className="border-grey-light border p-3">{user.username}</td>
                                <td className="border-grey-light border p-3">{user.email}</td>
                                <td className="border-grey-light border p-3 text-center">
                                    <button className='bg-red-500 font-bold rounded-lg text-white p-2 shadow-sm' onClick={() => onDelete(user.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div className='flex flex-col text-black sm:hidden'>
                {showNoRecords ?
                    <div className='bg-white mb-5 border rounded-lg p-3 text-lg font-bold text-center'>No records found</div>
                    :
                    users.map(user => (
                        <div className='bg-white mb-5 border rounded-lg overflow-hidden'>
                            <div>
                                <h3 className='bg-teal-400 uppercase text-white font-bold text-center p-1'>name</h3>
                                <span className='p-3 text-lg'>{user.name}</span>
                            </div>
                            <div>
                                <h3 className='bg-teal-400 uppercase text-white font-bold text-center p-1'>username</h3>
                                <span className='p-3 text-lg'>{user.username}</span>
                            </div>
                            <div>
                                <h3 className='bg-teal-400 uppercase text-white font-bold text-center p-1'>email</h3>
                                <span className='p-3 text-lg'>{user.email}</span>
                            </div>
                            <div className='flex flex-col'>
                                <h3 className='bg-teal-400 uppercase text-white font-bold text-center p-1'>Actions</h3>
                                <div className='p-3 flex flex-col'>
                                    <button className='bg-red-500 font-bold rounded-lg text-white p-2 shadow-sm' onClick={() => onDelete(user.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default UsersTable