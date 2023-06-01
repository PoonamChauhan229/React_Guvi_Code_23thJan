import React from 'react'
// Object Destructin used
const Thirdcode_Message = ({pic,nickName}) => {
    const name="Poonam"
  return (
   <>
    <div className='border'>
    <img className="profile-pic" src={pic} alt=""/>
    <h2>Hi {name}, How are you?</h2>
    <h3>{nickName} is My NickName</h3>
    </div>
    </>
  )
}

export default Thirdcode_Message


