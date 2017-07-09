import * as React from "react";

interface IFloorProps {
  number: number;
}

export default class Floor extends React.PureComponent<IFloorProps, any> {

  render() {
    return (
      <div className="el-floor">
        {this.props.number}
      </div>
    );
  }
}