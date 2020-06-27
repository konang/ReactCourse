import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";
import _ from "lodash";
import history from "../../history";

class StreamEdit extends React.Component {
  componentDidMount = () => {
    this.props.fetchStream(this.props.match.params.id);
  };

  onSubit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues);
    //console.log(formValues);
  };

  render() {
    if (!this.props.stream) {
      return <div>Loading..</div>;
    } else if (this.props.stream.userId !== this.props.currentUserId) {
      console.log(this.props.stream);
      history.push("/react/stream/client/");
    }
    return (
      <div>
        <h3>Edit A Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, "title", "description")}
          onSubmit={this.onSubit}
        ></StreamForm>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    stream: state.streams[ownProps.match.params.id],
    currentUserId: state.auth.userId,
  };
};
export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
