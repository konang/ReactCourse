import React from "react";
import { connect } from "react-redux";

class UserHeadder extends React.Component {
  render() {
    //const user = this.props.users.find((user) => user.id === this.props.userId);
    const { user } = this.props;
    if (!user) {
      return null;
    }
    return <div className="headdder">{user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  return { user: state.users.find((user) => user.id === ownProps.userId) };
};

export default connect(mapStateToProps)(UserHeadder);
