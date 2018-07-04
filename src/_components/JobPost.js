import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../_actions";

class JobPost extends Component {

    render() {
        let post = this.props.jobpost;
        let moredetails = `/posts/${post.id}`;
        let mailto = `mailto:${post.HRContact}?Subject=${post.jobCode}`
        return (
            <div>

                 <div className="row">

<label> &nbsp; JobCode  &nbsp; - &nbsp; </label>
    {post.jobCode}
    <br />

 <label>  &nbsp; Job Title  &nbsp;- &nbsp; </label>
 {post.jobTitle}
 <br />

  <label>  &nbsp; Skills  &nbsp;- &nbsp; </label>
  {post.skills}
  <br />

    <label>&nbsp;  Designation  &nbsp;- &nbsp; </label>
    {post.title}
    <br />

    <label>&nbsp; location  &nbsp;- &nbsp; </label>
    {post.location}
    <br />

     <label>&nbsp; Hiring Manager Info &nbsp;- &nbsp; </label>
     {post.Hiring_Manager} -  {post.HRContact}

</div> <br />
            <div className="row">
            <div className="col-md-2"> <a href={mailto}> <button className="btn-xs btn-primary" > Contact HR </button> </a></div>
            <div className="col-md-offset-10">
                <ul className="list-group">

                    <Link to={moredetails}>more details...</Link>
                </ul>
                </div>
                </div>
            </div>
        );
    }
}



export default JobPost;
