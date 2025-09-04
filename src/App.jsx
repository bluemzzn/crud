import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import TableList from './components/TableList'
import ModalForm from './components/ModalForm'

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [modalMode, setmodalMode] = useState('add');


  

  return (
    <>
      <Navbar />
      <TableList />
      <ModalForm />
    </>
  )
}

export default App
