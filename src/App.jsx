import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TableList from './components/TableList'
import ModalForm from './components/ModalForm'

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setModalMode] = useState('add');

  const handleOpen = (mode) => {
    setIsOpen(true);
  }

  const handleSubmit = () => {
    if (modalMode === 'add') {
      console.log('modal mode add');
    }
    else {
      console.log('modal mode edit');

    }
  }
  return (
    <div className='bg-[#07071c] h-screen'>
      <Navbar onOpen={() => handleOpen('add')} />
      <TableList />
      <ModalForm isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
      />
    </div>
  )
}

export default App
