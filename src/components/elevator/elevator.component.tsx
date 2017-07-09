import * as React from "react";

interface IElevatorProps {
  floor: number;
  floorHeight: number;
}

const TRANSITION_TIME: number = 0.5;

export default class Elevator extends React.PureComponent<IElevatorProps, any> {

  private _style: any;

  componentWillReceiveProps(nextProps: IElevatorProps) {
    const floorDiff = Math.abs(nextProps.floor - this.props.floor);
    this._style = {
      "marginTop": (nextProps.floorHeight * nextProps.floor) - nextProps.floorHeight + "px",
      "transition": "margin-top " + 0.5 * floorDiff + "s ease-in-out"
    }
  } 

  render() {
    return (
      <div className="el-elevator" style={this._style}>
        E
      </div>
    );
  }
}