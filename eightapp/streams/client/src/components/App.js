import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamCreate from "./streams/StreamCreate";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import Header from "./Header";

const App = () => {
  return (
    <div className="ui container">
      <BrowserRouter>
        <Header></Header>
        <div>
          <Route path="/" exact component={StreamList}></Route>
          <Route path="/streams/create" component={StreamCreate}></Route>
          <Route path="/streams/show" component={StreamShow}></Route>
          <Route path="/streams/edit" component={StreamEdit}></Route>
          <Route path="/streams/delete" component={StreamDelete}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
