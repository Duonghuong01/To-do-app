import { render } from "@testing-library/react";
import React from "react";
import axios from "axios";
class ListUser extends React.Component {
  state = {
    listUser: [],
  };
  async componentDidMount() {
    // let {listUser}=this.state
    let res = await axios.get("https://reqres.in/api/users?page=1");
    console.log(">>> check res: ", res.data.data);

    this.setState({
      listUser: res && res.data && res.data.data ? res.data.data : [],
    });
    console.log(">>> check list user : ", this.state.listUser);

    // .then(res =>{
    //     console.log('>>> check res: ',res.data)
    // })
  }
  render() {
    let { listUser } = this.state;
    return (
      <div className="list-user-container">
        <div className="title">Fetch all User</div>
        <div>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((item, index) => {
              return (
                <div className="child" key={item.id}>
                  {/* {console.log("item:" , item)} */}
                  {index+1}- {item.first_name}-{item.last_name}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}
export default ListUser;
