import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../_actions";

import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


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
        console.log('postttttttttttttttttttt',post);
        
        function getStepContent(step) {
            switch (step) {
              case 0:
                return `applied on ${post.appliedDate}`;
              case 1:
                return `An ad group contains one or more ads which target a shared set of keywords.${post.interviewDate}`;
              case 2:
                return `documente veification in progress`;
              default:
                return 'Awaiting Feedback';
            }
          }

        if (!post) {
            return <div>Loading...</div>;
        }
        const steps = ['applied', 'interview', 'documents verification','onboard'];

        return (
            
            <div>
                <Link to="/posts">Back To Index</Link>

            <div className="row">

                <div className="col-md-12">
                    <div className="col-md-2"> </div>
                    <div className="col-md-8">
                <Stepper activeStep={1} orientation="vertical">
                     {steps.map((label, index) => {
                     return (
                        <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                        <StepContent>
                            <Typography>{getStepContent(index)}</Typography>
                         </StepContent>
                        </Step>
                    );
                })}

                </Stepper>

                    <div className="container-fluid"> 
                    
                            <div className="row"> 
                            
                                <div className="col-md-4"> 
                                
                                <div className="col-md-5">   <label> Job Code &nbsp;- </label>   </div>
                                <div className="col-md-7">  {post.jobCode}  </div>
                                
                                 </div>
                                 <div className="col-md-6"> 
                                
                                <div className="col-md-5">   <label> location &nbsp;- </label>   </div>
                                <div className="col-md-7">  {post.location}  </div>
                                
                                 </div>
                            </div>
                            <div className="row"> 
                            
                                <div className="col-md-4"> 
                                
                                <div className="col-md-5">   <label> Type &nbsp;- </label>   </div>
                                <div className="col-md-7">  {post.employeeType}  </div>
                                
                                 </div>
                                 <div className="col-md-6"> 
                                
                                <div className="col-md-5">   <label>HR &nbsp;- </label>   </div>
                                <div className="col-md-7">  {post.HR}  </div>
                                
                                 </div>
                            </div>
                            <div className="row"> 
                            
                                <div className="col-md-4"> 
                                
                                <div className="col-md-5">   <label> Designation &nbsp;- </label>   </div>
                                <div className="col-md-7">  {post.designation}  </div>
                                
                                 </div>
                                 <div className="col-md-6"> 
                                
                                <div className="col-md-5">   <label>Created AT &nbsp;- </label>   </div>
                                <div className="col-md-7">  {post.createdAt}  </div>
                                
                                 </div>
                            </div>
                            <div className="row"> 
                            
                                <div className="col-md-4"> 
                                
                                <div className="col-md-5">   <label> Interview &nbsp;- </label>   </div>
                                <div className="col-md-7">  {post.venue} , {post.interviewDate} </div>
                                
                                 </div>
                                 
                            </div>
                            <br />
						 <div className="row"> 
                    <div className="col-md-4"> <label> Skills &nbsp;- </label>  <br />
                       {post.skills}
					</div>
                     </div>
                     <br />
                     <div className="row"> 
                    <div className="col-md-4"> <label> Roles and Responsibilties &nbsp;- </label>  <br />
                    <p>{post.responsibilities}  </p>
                        

						</div>
                     </div>
						
                    </div>

                   
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
