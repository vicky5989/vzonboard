import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../_actions";
import JobPost from "../_components/JobPost"

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
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
        <Link to="/login">Logout</Link>
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
  return { posts: state.posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
