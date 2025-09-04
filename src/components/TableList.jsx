import React from 'react'

function TableList() {

  const clients = [
    {id: 1,name : "John Doe", email: "John.Doe@gmail.com", job: "Developer", rate: "100", isactive: true},
    {id: 2,name : "John1 Doe", email: "John1.Doe@gmail.com", job: "Developer1", rate: "101", isactive: true},
    {id: 3,name : "John2 Doe", email: "John2.Doe@gmail.com", job: "Developer2", rate: "102", isactive: false}

  ]

  return (
    <div className='text-white mt-10'>
      <table className='w-full items-center '>
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Job</th>
                <th>Rate</th>
            </tr>
        </thead>
        <tbody >
          {clients.map=(client) => {
            <tr>
               <th className='px-3'>{client.id}</th>
               <td>{client.name}</td>
               <td>{client.email}</td>
               <td>{client.job}</td>
               <td>{client.rate}</td>
            </tr>
          }
          }
             {/* <tr>
               <th>2</th>
               <td>Marry Addams</td>
               <td>Manager Assistant</td>
               <td>Sleeping</td> 
            </tr>
            <tr>
               <th>3</th>
               <td>Enid Yukishima</td>
               <td>CEO</td>
               <td>Jogging</td> 
            </tr>  */}
      
        </tbody>
      </table>
    </div>
  )
}

export default TableList
