import React, { useState } from "react";
import ResourceList from "./ResourceList";
import UserList from "./UserList";

const App = () => {
  const [resource, setResource] = useState("posts");
  //const [currentvalue, setCurrentValue] = useState(initialValue)

  return (
    <div>
      <div>
        <UserList></UserList>
        <button onClick={() => setResource("posts")}>Posts</button>
        <button onClick={() => setResource("todos")}>Todo</button>
      </div>
      <ResourceList resource={resource}></ResourceList>
    </div>
  );
};

export default App;
