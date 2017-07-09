import * as React from "react";
import Floor from "../floor/floor.component";
import Elevator from "../elevator/elevator.component";

export default class Building extends React.PureComponent<any, any> {

  private _currentFloor: number;

  componentWillMount() {
    this._currentFloor = 2;

    setInterval(() => {
      this._currentFloor = Math.floor(Math.random() * 4) + 1;
      this.forceUpdate();
    }, 1000);
  }

  render() {
    return (
      <div className="el-building">
        <div className="floors">
          <Floor number={1} />
          <Floor number={2} />
          <Floor number={3} />
          <Floor number={4} />
        </div>

        <Elevator floor={this._currentFloor} floorHeight={30}/>
      </div>
    );
  }
}