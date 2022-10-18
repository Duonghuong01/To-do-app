import React from "react";
import { Navigate, withRouter } from "react-router";
class Home extends React.Component{ 
//     componentDidMount(){
//         setTimeout(()=>{
// this.props.history.push("/todo")
//         },3000)
//     }
    render(){
        const history = window.location;
        console.log("chekc props: ",history)
        return (
            <>
            <div>
    
Hello React with Ellie
            </div>
            </>
        )
    }
}

export default Home;