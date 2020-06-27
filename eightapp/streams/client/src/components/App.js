import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";
import history from "../history";
import { connect } from "react-redux";
import GoogleAuth from "./GoogleAuth";

class App extends React.Component {
  /*renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn === true) {
      return (
        
      );
    } else {
      return (

        <div className="ui container">Please Sign In</div>
        <GoogleAuth></GoogleAuth>
        
      );
    }
  }*/

  selectRoute(route) {
    return this.props.isSignedIn ? route : GoogleAuth;
  }

  render() {
    console.log(this.props);
    this.props.isSignedIn
      ? console.log("Estas Logueado")
      : console.log("No estas Logeado");

    return (
      <div className="ui container">
        <Router history={history}>
          <Header />
          <div>
            <Switch>
              <Route
                path="/react/stream/client/"
                exact
                component={this.selectRoute(StreamList)}
              ></Route>
              <Route
                path="/react/stream/client/streams/new"
                exact
                component={this.selectRoute(StreamCreate)}
              ></Route>
              <Route
                path="/react/stream/client/streams/:id"
                exact
                component={StreamShow}
              ></Route>
              <Route
                path="/react/stream/client/streams/edit/:id"
                exact
                component={this.selectRoute(StreamEdit)}
              ></Route>
              <Route
                path="/react/stream/client/streams/delete/:id"
                exact
                component={this.selectRoute(StreamDelete)}
              ></Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
    // } else {
    //   return <div className="ui container">Please Sign In</div>;
    // }
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps)(App);
