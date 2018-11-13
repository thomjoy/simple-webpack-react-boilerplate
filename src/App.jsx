import React from "react";
import Header from "./component/header";
require("./app.css");

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Header />
        <div>Hello World!</div>
      </div>
    );
  }
}

export default App;
