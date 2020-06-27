import React from "react";
import { connect } from "react-redux";
import { fetchStream, deleteStream } from "../../actions";
import Modal from "../Modal";
import history from "../../history";
import { Link } from "react-router-dom";

class StreamDelete extends React.Component {
  renderActions = () => {
    return (
      <React.Fragment>
        <button
          onClick={() => this.props.deleteStream(this.props.match.params.id)}
          className="ui button negative"
        >
          Delete
        </button>
        <Link to="/react/stream/client/" className="ui button">
          Cancel
        </Link>
      </React.Fragment>
    );
  };

  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id);
  };

  renderContent() {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream";
    }
    return `Are you sure you want to delete the stream with title: ${this.props.stream.title}`;
  }

  render() {
    if (!this.props.stream) {
      return <div>Loading..</div>;
    } else if (this.props.stream.userId !== this.props.currentUserId) {
      console.log(this.props.stream);
      history.push("/react/stream/client/");
    }
    return (
      <Modal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push("/react/stream/client/")}
      ></Modal>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    currentUserId: state.auth.userId,
  };
};
export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
