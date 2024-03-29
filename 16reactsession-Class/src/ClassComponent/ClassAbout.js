import React from "react";

class ClassAbout extends React.Component{
    constructor(props){
            super(props);
            //Create State
            // in react older versions, we used to create state in this manner
            //this state is an object
            this.state={
                count:0,
                count2:0,
                userInfo:{
                    name:"Dummy Name",
                    login:"Login UserName",

                }
            }
            console.log("child Constructor Called" +this.props.name)

        }

        async componentDidMount(){
           
            //Best place to make an API call
            const data = await fetch(`https://api.github.com/users/PoonamChauhan229`)
            const json=await data.json()
            //let us push the data to state variable
            this.setState({
                userInfo:json
            })
            console.log(json)
            console.log("child-componentDidMount Called"+this.props.name)

            this.timer=setInterval(()=>{
                console.log("1000")
            },1000)
        }

        componentDidUpdate(){
            console.log("child -componentDidUpdate")
            //this will come after every props and state update
            // so you will use the if else statement to compare and then render . 
        }

        componentWillUnmount(){
            console.log("child-componentWillUnmount")
            //lot of things needs to be clear thats why this is there
            //suppose if you have a setInterval in Component DidMount
            // then we need to clear it bfeore moving to the other componnet
            clearInterval(this.timer)

        }
render(){
    console.log("child-Render Called" +this.props.name)
    return(
        // return JSX
        <div>
            <h1>GitHUb User details</h1>
            <h2><img src={this.state.userInfo.avatar_url} alt="" /></h2>
            <h2>{this.state.userInfo.name}</h2>
            <h2>{this.state.userInfo.login}</h2>
        </div>

    )
}
}
// we will export are function just like how we do in functional component
export default ClassAbout;
// Similarly we will import the same.
// Let us start and check