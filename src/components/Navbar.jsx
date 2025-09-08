import React from 'react'

function Navbar({ onOpen }) {
    return (
        <div className='px-6 py-5 flex justify-between'>
            <div>
                <h1 className='font-bold text-white'>Clients</h1>
            </div>
            <div>
                <input type='text' placeholder='Search...' className='border py-1 px-2 text-white rounded-md w-48 md:w-auto' />
            </div>
            <div>
                <button className='text-white bg-yellow-500 font-bold shadow-2xl py-2 px-4 rounded-xs' onClick={onOpen}>Add Client</button>
            </div>
        </div>
    )
}

export default Navbar
