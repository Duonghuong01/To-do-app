import React from "react";
import {  toast } from 'react-toastify';

class AddTodo extends React.Component{
    state={
        title:''
    }
    handleOnchangeAdd=(event)=>{
        this.setState({
            title:event.target.value
        })
        console.log("title: ",this.state.title)
    }
    handleOnClickAdd=()=>{
        if(!this.state.title){
           toast.error(`Missing Todo Text`)
            return
        }
        let todo={
            id:Math.floor(Math.random()*1000000000),
            title:this.state.title
        }
        this.props.addnewtodo(todo)
        this.setState({
            title:''
        })
    }
    render(){
return (
    <>
      <div className="add-todo">
          <input type="text" value={this.state.title} onChange={(event)=>this.handleOnchangeAdd(event)} />
          <button type="text" className="add" onClick={()=> this.handleOnClickAdd()}>Add</button>
        </div>
    </>
)
    }
}
export default AddTodo