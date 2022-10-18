import React from "react";
class AddComponent extends React.Component {
    state={
        Job:'',
        salary:''
    }
    handlechangeJob = (event) => {
        //    console.log(event.target.value)
        this.setState({
          Job: event.target.value,
        });
      };
      handlechangesalary = (event) => {
        //    console.log(event.target.value)
        this.setState({
          salary: event.target.value,
        });
      };
      handlesubmit = (event) => {
        event.preventDefault();
        console.log("get state :", this.state);
        if(!this.state.Job || !this.state.salary){
            alert("Missing text")
            return;
        }
        this.props.addNew(
           {
            id:Math.random(),
            Job:this.state.Job,
            salary:this.state.salary
           }
        )
        this.setState({
            Job:"",
            salary:""
        })
      };
  
    render(){
        return(
            <>
            <form>
          <label htmlFor="Job">Job Jobs:</label>
          <br />
          <input
            type="text"
            onChange={(event) => this.handlechangeJob(event)}
            value={this.state.Job}
          />
          <br />
          <label htmlFor="Salary">Salary:</label>
          <br />
          <input
            type="text"
            onChange={(event) => this.handlechangesalary(event)}
            value={this.state.salary}
          />
          <br />
          <br />
          <input
            type="button"
            value="Submit"
            onClick={(event) => this.handlesubmit(event)}
          />
        </form>
            </>
        )
    }
}
export default AddComponent;