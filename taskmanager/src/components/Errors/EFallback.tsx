import React from 'react';

const EFallback: React.FC = () => {
    const fillColor = '#ffffff'
    return (
        <div className='flex flex-col h-full w-full bg-stone-800 text-white justify-center items-center'>
            <div className='mb-4'>
                <svg height="400px" width="400px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 29.78 29.78" xmlSpace="preserve">
                    <path fill={fillColor} d="M20.113 16.751l3.871 1.076-2.378-1.513 1.13-2.847-2.002 2.293-0.887-0.564-2.373 2.836c-1.061-1.507-0.125-4.272 1.326-6.913l1.76-1.812 2.587 1.618 0.834 3.569 4.969 1.367-3.945-2.202-0.797-3.493-2.787-1.747 1.497-1.541 2.65-2.122-3.259 1.135-0.338-0.131 2.519-4.929-3.617 4.505-2.735-1.056v-3.683l-1.214 4.518 4.362 1.67-2.451 2.545c-0.965 0.525-1.685 0.509-2.319 0.13l-0.32-0.692 2.606-2.086-3.075 1.071-1.862-4.024 0.898-1.956-1.972 1.405-5.69-1.253 5.655 2.358 0.718 1.552-3.878 0.825-2.076-2.593 0.984 2.825-1.631 0.347-3.717-2.392 1.641 1.872-2.487 1.991 3.242-1.13 0.865 0.987 5.018-1.055-0.201 2.725 1.296-2.955 1.473-0.31 1.458 3.151c0.117 0.621 0.168 1.193 0.141 1.692l-2.814-1.098 2.565 2.213c-0.379 0.806-1.198 1.137-2.571 0.725l-4.696-3.115-1.744 1.156-1.021-2.329 0.211 2.866-0.594 0.394-4.059-3.075 3.831 4.67 3.376-2.24c0.679 0.467 1.362 0.928 2.046 1.388l-0.756 2.598-3.037 1.261 3.985-0.236 0.845-2.929c0.355 0.236 0.711 0.472 1.068 0.707 3.085 4.727 3.554 11.793 0.121 11.006 0.566 2.407-1.512 4.23-3.416 5.049h12.029c-4.305-2.348-5.291-6.941-3.12-11.371l2.26-2.709z" />
                </svg>
            </div>
            <h1 className='text-9xl mb-4 font-extrabold'>Error</h1>
            <span className='mb-4 font-semibold'>Your page died</span>
        </div>
    );
};

export default EFallback;