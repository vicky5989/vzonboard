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
      <li className="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
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
   debugger;
    return {
        authentication : state.authentication
    };
}

const connectedNavbar = connect(mapStateToProps)(Navbar);
export { connectedNavbar as Navbar }; 