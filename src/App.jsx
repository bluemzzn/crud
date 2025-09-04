import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TableList from './components/TableList'
import ModalForm from './components/ModalForm'

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setmodalMode] = useState('add');

  const handleModal = (mode) => {
    setIsOpen(true);
  }

  const handleOpen = () => {
    if (modalMode === 'add') {
      console.log('modal mode add');
    }
    else {
      console.log('modal mode edit');

    }
  }

  return (
    <>
      <Navbar onOpen={() => handleOpen('add')} />
      <TableList />
      <ModalForm isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSubmit={handleSubmit}
      />
    </>
  )
}

export default App
