import React from 'react'

function TableList({onOpen}) {

  const clients = [
    { id: 1, name: "John Doe", email: "John.Doe@gmail.com", job: "Developer", rate: "100", isactive: true },
    { id: 2, name: "John1 Doe", email: "John1.Doe@gmail.com", job: "Developer1", rate: "101", isactive: true },
    { id: 3, name: "John2 Doe", email: "John2.Doe@gmail.com", job: "Developer2", rate: "102", isactive: false }
  ]

  return (
    <div className='text-white mt-10 flex justify-center items-center'>
      <table className='table-auto w-full border-separate'>
        <thead>
          <tr>
            <th></th>
            <th className='px-4 py-3'>Name</th>
            <th className='px-4 py-3'>Email</th>
            <th className='px-4 py-3'>Job</th>
            <th className='px-4 py-3'>Rate</th>
            <th className='px-4 py-3'>Status</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client) => (
            <tr key={client.id}>
              <th className='px-2 py-3'>{client.id}</th>
              <td className='py-4 px-2'>{client.name}</td>
              <td className='py-4 px-2'>{client.email}</td>
              <td className='py-4 px-2'>{client.job}</td>
              <td className='py-4 px-2'>{client.rate}</td>
              <td className='py-0 px-3 w-6'>
                <button className={`button rounded-full w-20 ${client.isactive ? 'Online btn-green' : 'Offline btn-red'}`}>
                  {client.isactive ? 'Online' : 'Offline'}
                </button>
              </td>
              <td className='py-0 px-3 w-5'>
                <button className='inline-block rounded-2xl py-2 px-3 btn-update' onClick={onOpen}>Update</button>
              </td>
              <td className='py-0 px-3 w-5'>
                <button className='inline-block rounded-2xl py-2 px-3 btn-delete' onClick={onOpen}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TableList
