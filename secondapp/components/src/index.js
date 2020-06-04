import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <div>
          <h4>WARNING!</h4>Are you sure?
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo={[
            "Today at ",
            faker.date.recent().getUTCHours(),
            ":",
            faker.date.recent().getUTCMinutes(),
          ]}
          avatar={faker.image.avatar()}
          comment={faker.lorem.paragraph()}
        ></CommentDetail>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo={[
            "Today at ",
            faker.date.recent().getUTCHours(),
            ":",
            faker.date.recent().getUTCMinutes(),
          ]}
          avatar={faker.image.avatar()}
          comment={faker.lorem.paragraph()}
        ></CommentDetail>
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author={faker.name.firstName()}
          timeAgo={[
            "Today at ",
            faker.date.recent().getUTCHours(),
            ":",
            faker.date.recent().getUTCMinutes(),
          ]}
          avatar={faker.image.avatar()}
          comment={faker.lorem.paragraph()}
        ></CommentDetail>
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
