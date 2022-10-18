import React from "react";
import  './Demo.scss'
class ChildComponents extends React.Component {
    state={
        showJobs:false
    }
  handlechangefirstname = (event) => {
    //    console.log(event.target.value)
    this.setState({
      firstName: event.target.value,
    });
  };
  handlechangelastname = (event) => {
    //    console.log(event.target.value)
    this.setState({
      lastName: event.target.value,
    });
  };
  handlesubmit = (event) => {
    event.preventDefault();
    console.log("get state :", this.state);
  };
  handleOnlickStatus=()=>{
    this.setState(
        {
            showJobs: !this.state.showJobs
        }
    )
  }
  handleOnClickDelete =(job)=>{
// console.log("item chosed: ",job);
this.props.arrayJob(job);
  }
  render() {
    console.log(">>render: ", this.props);
    // const {name} = this.state;
    // let name=this.props.name;
    // let age=this.props.age;
    let { name, age, jobs } = this.props;
    let {showJobs}=this.state
    return (
      <>
      {showJobs ===false ?
      <div><button
      onClick={()=> this.handleOnlickStatus()}
      >Show
      </button></div>
      : 
      <>
       <div className="job-list">
          {jobs.map((item, index) => {
            if (item.salary >= 100) {
              return (
                <div key={item.id}>
                  {item.Job}-{item.salary} $ <></> 
                  <span onClick={()=>this.handleOnClickDelete(item)}>X</span>
                </div>
              );
            }
          })}
        </div>
        <div><button className="btn-hide"  onClick={()=> this.handleOnlickStatus()}>Hide</button></div>
       </> 
  }
      </>
    );
  }
}
// const ChildComponents=(props)=>{
//     console.log("check props", props)
//     let {jobs}=props
//     return(
//         <>
//               <div className="job-list">
//              {jobs.map((item, index) => {
//                 if(item.salary >= 1500){
//                     return (
//                         <div key={item.id}>
//                           {item.Job}-{item.salary} $
//                         </div>
//                       );
//                 }
//                   })}
//                 </div>
//               </>
//     )
// }

export default ChildComponents;
