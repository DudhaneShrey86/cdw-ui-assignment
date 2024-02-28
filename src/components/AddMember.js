import React, { useState } from 'react'

const AddMember = ({closeModal}) => {

  // can use this form to add a new member, maybe could use a context to fetch and update members
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('')

  const handleAddMember = (e) => {
    e.preventDefault()
    // just doing a console.log for now
    console.log('Member details: ', firstName, lastName, email, role)
    closeModal()
  }

  const handleClearForm = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setRole('')
  }

  return (
    <div className='add-member-div'>
      <div className='add-member-background' onClick={closeModal}></div>
      <div className='add-member-modal'>
        <h3 className='modal-title'>Add a Member</h3>
        <form onSubmit={handleAddMember}>
          <div className='form-input'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' name='firstName' placeholder='Enter first name' className='form-control' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className='form-input'>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' name='lastName' placeholder='Enter last name' className='form-control' value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className='form-input'>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' placeholder='Enter email ID' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='form-input'>
            <label>Role</label>
            <select className='form-control' value={role} onChange={(e) => setRole(e.target.value)}>
              <option value='' disabled selected>Select an option</option>
              <option value='admin'>Admin</option>
              <option value='member'>Member</option>
            </select>
          </div>
          <div className='form-actions'>
            <button type='submit' className='btn-primary'>Add <span className='mdi mdi-plus'></span> </button>
            <button type='button' className='btn-secondary' onClick={handleClearForm}>Clear</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddMember