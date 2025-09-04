import React from 'react'

function Navbar() {
return (
    <div className='px-2.5 mt-4 mx-3 flex justify-between'>
        <div>
            <h1 className='font-bold text-white'>Clients</h1>
        </div>
        <div>
            <input type='text' placeholder='Search...' className='border py-1 px-2 text-white rounded-md w-48 md:w-auto' />
        </div>
        <div>
            <button className='text-white btn-red shadow-2xl py-2 px-4 rounded-xs'>buttons</button>

        </div>
    </div>
)
}

export default Navbar
