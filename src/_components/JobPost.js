import _ from "lodash";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPosts } from "../_actions";

class JobPost extends Component {

    render() {
        let jobpost = this.props.jobpost;
        let moredetails = `/posts/${jobpost.id}`;
        return (
            <div>

                <h4>{jobpost.title}</h4>
                <ul className="list-group">

                    <Link to={moredetails}>more details...</Link>
                </ul>
            </div>
        );
    }
}



export default connect()(JobPost);
