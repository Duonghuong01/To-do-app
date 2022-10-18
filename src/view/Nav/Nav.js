import React from "react";
import "./Nav.scss";
import { NavLink, Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink to="/home" activeClassName="active"   >
        Home
</NavLink>
<NavLink to="/todo" activeClassName="active"  >
        Todo
</NavLink>
<NavLink to="/about" activeClassName="active"  >
        About
</NavLink>
<NavLink to="/user" activeClassName="active"  >
        User 
</NavLink>
<NavLink to="/user/:id" activeClassName="active"  >
        Detail User 
</NavLink>

        
        {/* <a className="active" href="/">Home</a>
                <a href="/todo">Todos</a>
                <a href="/about">About</a> */}
      </div>
    );
  }
}
export default Nav;
