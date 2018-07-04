import React from 'react';
import { Router, Route, BrowserRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import {Navbar} from '../Navbar';
import { history } from '../_helpers';
import { alertActions } from '../_actions';
import { PrivateRoute } from '../_components';
import { HomePage } from '../HomePage';
import { LoginPage } from '../LoginPage';
import PostsIndex from '../_components/PostsIndex';
import PostsShow from '../_components/posts_show';
import About from '../_components/About';

class App extends React.Component {
    constructor(props) {
        super(props);

        const { dispatch } = this.props;
        history.listen((location, action) => {
            // clear alert on location change
            dispatch(alertActions.clear());
        });
    }

    render() {
        console.log("rednering app")
        const { alert } = this.props;
        return (
            <div>
          
                    <div className="col-sm-12">
                        {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
                        }
                        <Router history={history}>
                       
                            <div>
                                <Navbar />
                                <PrivateRoute exact path="/" component={PostsIndex} />
                                <Route path="/login" component={LoginPage} />
                                <PrivateRoute exact path="/posts" component={PostsIndex} />
                                <PrivateRoute exact path="/about" component={About} />
                                <PrivateRoute path="/posts/:id" component={PostsShow} />
                            </div>
                        </Router>
                    </div>
                    </div>
                
        );
    }
}

function mapStateToProps(state) {
    const { alert } = state;
    return {
        alert
    };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App }; 