import React from 'react'

function TableList() {
  return (
    <div className='text-white mt-10'>
      <table className='w-full items-center '>
        <thead>
            <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Fav</th>
            </tr>
        </thead>
        <tbody >
            <tr>
               <th className='px-3'>1</th>
               <td>John Doe</td>
               <td>Cyber Security Consultant</td>
               <td>Drawing</td> 
            </tr>
            <tr>
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
            </tr>
        
        </tbody>
      </table>
    </div>
  )
}

export default TableList
