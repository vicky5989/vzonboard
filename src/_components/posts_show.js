import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../_actions";

class PostsShow extends Component {

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchPost(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;

        this.props.deletePost(id, () => {
            this.props.history.push("/");
        });
    }

    render() {
        const { post } = this.props;

        if (!post) {
            return <div>Loading...</div>;
        }

        return (
            <div>

                <Link to="/posts">Back To Index</Link>

                <h3>{post.title}</h3>
                <h6>HR:{post.HR}</h6>
                <p>{post.content}</p>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <span className="badge badge-default">Label1</span> <span className="badge badge-default">Label2</span> <span className="badge badge-default">Label3</span>
                                </div>
                                <div className="col-md-4">
                                    <span className="badge badge-default">Label4</span>
                                </div>
                                <div className="col-md-4">
                                    <span className="badge badge-default">Label5</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-8">
                            <h2>
                                Job Description
			</h2>
                            <p>
                                Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui.
			</p>
                            <p>
                                <a className="btn" href="#">View details »</a>
                            </p>
                        </div>
                        <div className="col-md-4">
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps({ posts }, ownProps) {
    return { post: posts[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);
