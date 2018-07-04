import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../_actions";
import JobPost from "../_components/JobPost";
//import Profile from "./profile"

class PostsIndex extends Component {
  componentDidMount() {
    console.log('postindex-------------------',this.props)
    const user= this.props.authentication ? (this.props.authentication.user ? this.props.authentication.user : null) : null;
    this.props.fetchPosts(user.username);
  }

  renderPosts() {
    return _.map(this.props.posts, post => {
      return (

        <div>
           <div className="panel panel-default" key={post.id}>
  <div className="panel-heading">{post.title}</div>
  <div className="panel-body"><JobPost jobpost={post} /></div>
</div>  
        </div>
       
      );
    });
  }

  render() {
    return (
      <div>
        <div className="col-md-2"> </div>
        <div className="col-md-8">
        
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
        </div>
        <div className="col-md-2"> </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.posts ,
    authentication : state.authentication};
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
