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
import ClassAbout from "./ClassAbout";

class ClassProfile extends React.Component{
    constructor(props){
            super(props);
            //Create State
            // in react older versions, we used to create state in this manner
            //this state is an object
            this.state={
                count:0,
                count2:0
            }
            //console.log("parent-Constructor Called")

        }

        componentDidMount(){
           // console.log("parent-componentDidMount Called")
            //Best place to make an API call

        }

render(){
  //  console.log("parent-Render Called")
    return(
        // return JSX
        <div>
            <h1>Class Based Component</h1>

            {/* Here we get access to the amaazing thing this keyword
                this.props

            */}
            <h2>Name:{this.props.name}</h2>
            {/* how do we use this props */}
            <h2>Count:{this.state.count}</h2>
            <h2>Count:{this.state.count2}</h2>
            <button
            //We do not mutate state directly
            //Never do this=> this.state=soemthing
            onClick={()=>this.setState({
                count:(this.state.count+1),
                count2:(this.state.count+2)
            })}
            >Incre-Count</button>

            <ClassAbout name="First child"/>
            {/* <ClassAbout name="Second child"/> */}
        </div>

    )
}
}
// we will export are function just like how we do in functional component
export default ClassProfile;
// Similarly we will import the same.
// Let us start and check