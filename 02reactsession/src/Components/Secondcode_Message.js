import React from 'react'
const Secondcode_Message = (props) => {
    const name="Poonam"
  return (
   <>
    <div className='border'>
      {/* Task 01 */}
    {/* <img className="profile-pic" src="https://i.pinimg.com/736x/59/37/5f/59375f2046d3b594d59039e8ffbf485a.jpg" alt=""/> */}
    {/* Task 02 */}
    <img className="profile-pic" src={props.pic} alt=""/>
    <h2>Hi {name}, How are you?</h2>
    <h3>{props.nickName} is My NickName</h3>
    </div>
    </>
  )
}

export default Secondcode_Message

// Now we need to call this component
// how do we call a funtion 
// similar to that itself we will calling it
// {Secondcode_Message()}
//Its an normal JS function call which we can do it
// We can call mulitple times as well like we call in normal JS Function
// Build it once and call it multiple times
// One concept here is component composition
// What is component composition?
// if we have to use a component inside  a component .Then its called as an Composition component or composing components
//  3 ways we can write 
// {Secondcode_Message()}
//  <div className="App">
// <Secondcode_Message></Secondcode_Message>
// <Secondcode_Message/>


