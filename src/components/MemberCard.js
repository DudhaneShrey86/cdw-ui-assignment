import React from 'react'

const MemberCard = ({ memberInfo }) => {
  return (
    <div className='member-card'>
      <div className='image-div'>
        <img src={memberInfo.img} alt='Member profile' />
      </div>
      <div className='info-div'>
        <h4>{ memberInfo.first_name + ' ' + memberInfo.last_name }</h4>
        <p>{ memberInfo.email }</p>
      </div>
    </div>
  )
}

export default MemberCard