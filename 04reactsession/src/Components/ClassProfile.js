
//We have to inform React that this is not an normal JS class but this is a class based component how do you do that?
// extends React.Component

// class Profile extends React.Component{}
// This is how we write an normal class based Component
// Where does this React.Component comes from
// It will comes React.
// Somebody would have exported it somewhere and that how we are using it.


// The most important part of a class based component is your render method
// You cannot create a class based component without a render method
// this is the only mandatory method for class based components 

// What is a functional component , its is a function that returns some JSX right 
// In class based component this render method returns some JSX

import React from "react";

class ClassProfile extends React.Component{
render(){
    return(
        // return JSX
        <div>
            <h1>Class Based Component</h1>
            <h2>Name:{this.props.name}</h2>
        </div>

    )
}
}
// we will export are function just like how we do in functional component
export default ClassProfile;
// Similarly we will import the same.
// Let us start and check