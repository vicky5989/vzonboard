import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { userActions } from '../_actions';


class Navbar extends React.Component {
    

    renderUsername(){
        const user= this.props.authentication ? (this.props.authentication.user ? this.props.authentication.user : null) : null;

        if(user){

            return ( <span key={user.id}>  
            
                &nbsp; Welcome {user.username}
            </span>);
        } else  {
            return (<span key="notLoggedIn">
            &nbsp;Signup </span>);
        }
    }

    renderLogout(){

        const user= this.props.authentication ? (this.props.authentication.user ? this.props.authentication.user : null) : null;

        if(user){

            return (  <Link to="/login">Logout</Link>);

        } 


    }

   

    render() {
       
        return (
            <div> 

                <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">VZ Onboard</a>
    </div>
    <ul className="nav navbar-nav">
    <li className="active"><Link to="/posts">Home </Link></li>
      <li><Link to="/about">About </Link> </li>
    </ul>
    <ul className="nav navbar-nav navbar-right">
     
      <li><a href="#"><span className="glyphicon glyphicon-log-in"></span> {this.renderUsername()}</a></li>
      <li>{this.renderLogout()}</li>
     
    </ul>
  </div>
</nav>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        authentication : state.authentication
    };
}

const connectedNavbar = connect(mapStateToProps)(Navbar);
export { connectedNavbar as Navbar }; 