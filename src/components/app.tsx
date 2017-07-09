import * as React from "react";
import Building from "./building/building.component";

export default class App extends React.PureComponent<any, any> {

  render() {
    return (
      <div className="el-app">
        <Building />
      </div>
    )
  }
}