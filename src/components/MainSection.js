import React, { useState } from 'react'
import MemberCard from './MemberCard'
import '../styles/MainSection.scss'
import AddMember from './AddMember'

const MainSection = ({members}) => {

  // using this boolean state to hide/show the add members form
  const [showAddForm, setShowAddForm] = useState(false)

  // has two sections for admin and members
  const admins = members.filter(member => member.role === 'admin').map(member => <MemberCard key={member.email} memberInfo={member} />)
  const users = members.filter(member => member.role === 'member').map(member => <MemberCard key={member.email} memberInfo={member} />)

  return (
    <div id="main-section">
      <div className='role-section'>
        <h3 className='role-title'>Administrators</h3>
        { admins.length !== 0 ? (
          <div className='members-container'>
            {admins}
          </div>
        ) : (
          <p className='watermark-text'>No Admins found</p>
        ) }
      </div>
      <div className='role-section'>
        <h3 className='role-title'>Members</h3>
        { users.length !== 0 ? (
          <div className='members-container'>
            {users}
          </div>
        ) : (
          <p className='watermark-text'>No Members found</p>
        ) }
      </div>
      <div id='add-member-div'>
        <button id='add-member-button' onClick={() => setShowAddForm(true)}><span className='mdi mdi-plus'></span></button>
      </div>
      { showAddForm && <AddMember closeModal={() => setShowAddForm(false)} /> }
    </div>
  )
}

export default MainSection