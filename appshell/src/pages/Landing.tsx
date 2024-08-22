import React from 'react';
import { Link } from 'react-router-dom';
import { paths } from '../router';

const Landing: React.FC = () => {

    return (
        <div className='flex flex-col h-full w-full bg-stone-800 text-white items-center'>
            <div className='flex flex-col mt-[25%] items-center'>
                <h1 className='text-5xl mb-8 font-extrabold'>Micro Front-End Architecture</h1>
                <Link className='bg-emerald-500 p-5 text-xl font-bold border-white border hover:bg-emerald-700' to={paths.RESPONSES}>Check Test Responses</Link>
            </div>
        </div>
    );
};

export default Landing;