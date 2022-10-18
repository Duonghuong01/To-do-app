import React from "react";

import ChildComponents from "./ChildComponent";
import AddCompponent from "./AddComponent"

class MyComponent extends React.Component {
  state = {
   
    arrJobs:
    [
        {
            id:"1",Job:"front-end",salary:"1000"
        },
        {
            id:"2",Job:"back-end",salary:"8000"
        },
        {
            id:"3",Job:"tester",salary:"1500"
        }
    ]
  };
deleteItem=(job)=>{
  let currentArray = this.state.arrJobs
  currentArray= currentArray.filter(item=> item.id != job.id)
this.setState({
  arrJobs:currentArray
})
}
addNewJobs=(job)=>{
    console.log("set props  ",job)
    this.setState({
        arrJobs:[...this.state.arrJobs,job]
    })

}
componentDidUpdate=(prevProps,prevState)=>{
  console.log("goi componentDidUpdate:=>preProps  ",prevState,"preState: ",this.state)

}
componentDidMount =()=>{
  console.log("goi componentDidMount")
}
  render() {
    console.log(">>gọi render: ", this.state);
    // const {name} = this.state;

    return (
      <>
      <AddCompponent 
      addNew={this.addNewJobs}
      />
       
        <ChildComponents 
        name={this.state.firstName} 
        age={21} 
        jobs={this.state.arrJobs}
        arrayJob={this.deleteItem}
        />
      </>
    );
  }
}

export default MyComponent;
