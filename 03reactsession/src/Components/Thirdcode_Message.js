import React from 'react'
import FourthCode_Counter from './FourthCode_Counter'
// Object Destructin used
const Thirdcode_Message = ({pic,nickName}) => {
    const name="Poonam"
  return (
   <>
    <div className='border'>
    <img className="profile-pic" src={pic} alt=""/>
    <h4>Hi {name}, How are you?</h4>
    <h5>{nickName} is My NickName</h5>
    <FourthCode_Counter/>
    </div>
    </>
  )
}

export default Thirdcode_Message


