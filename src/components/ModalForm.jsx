import React from 'react'

function ModalForm({ isOpen, onClose, onSubmit, mode }) {

  return (
    <div>
      <dialog id="my_modal_3" className="modal" open={isOpen}>
        <div className="modal-box">
          <h3 className='font-bold text-lg py-4'>{mode === 'edit' ? 'Edit Client' : 'Client Details'}</h3>
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>

            <button>{mode === 'save' ? 'Save Changes' : 'Add Client'}</button>
          </form>
        </div>
      </dialog>
    </div>
  )
}

export default ModalForm
