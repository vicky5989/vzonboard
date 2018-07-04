import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchPost, deletePost } from "../_actions";
import Test from '../_components/Test';
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

        function getStepContent(step) {
            switch (step) {
              case 0:
                return `For each ad campaign that you create, you can control how much
                        you're willing to spend on clicks and conversions, which networks
                        and geographical locations you want your ads to show on, and more.`;
              case 1:
                return 'An ad group contains one or more ads which target a shared set of keywords.';
              case 2:
                return `Try out different ad text to see what brings in the most customers,
                        and learn how to enhance your ads using features like ad extensions.
                        If you run into any problems with your ads, find out how to tell if
                        they're running and how to resolve approval issues.`;
              default:
                return 'Unknown step';
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
                <Stepper activeStep={2} orientation="vertical">
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
                                
                                <div className="col-md-4">   <label> Job Code &nbsp;- </label>   </div>
                                <div className="col-md-8">  testdsbsdbdebdb  </div>
                                
                                 </div>
                                 <div className="col-md-6"> 
                                
                                <div className="col-md-4">   <label> location &nbsp;- </label>   </div>
                                <div className="col-md-8">  testdsbsdbdebdb  </div>
                                
                                 </div>
                            </div>
                            <div className="row"> 
                            
                                <div className="col-md-4"> 
                                
                                <div className="col-md-4">   <label> Job Code &nbsp;- </label>   </div>
                                <div className="col-md-8">  testdsbsdbdebdb  </div>
                                
                                 </div>
                                 <div className="col-md-6"> 
                                
                                <div className="col-md-4">   <label> Job Code &nbsp;- </label>   </div>
                                <div className="col-md-8">  testdsbsdbdebdb  </div>
                                
                                 </div>
                            </div>
                            <br />
						 <div className="row"> 
                    <div className="col-md-4"> <label> Skills &nbsp;- </label>  <br />
                        gsdkfsjkghkjseghksehgkisegkskghkugwguegf,fz.gnzkn,gfsbngshgiwkgnwmbgfs,m
					</div>
                     </div>
                     <br />
                     <div className="row"> 
                    <div className="col-md-4"> <label> Roles and Responsibilties &nbsp;- </label>  <br />
                    <ul> 
                        <li><p> TEST </p> </li>
                        
                    </ul>
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
