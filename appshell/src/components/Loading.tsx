import React from 'react'
import Spinner from './Spinner'

const Loading = () => {

    return (
        <div className='flex flexcol h-full v-full bg-black text-white justify-center items-center'>
            <Spinner effect='beatFade' />
        </div>
    )
}

export default Loading