import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetial";

const App = () => {
  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="ui column eight wide">
          <SongList></SongList>
        </div>
        <div className="ui column eight wide">
          <SongDetail></SongDetail>
        </div>
      </div>
    </div>
  );
};

export default App;
