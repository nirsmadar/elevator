import * as React from "react";

export default class App extends React.PureComponent<any, any> {

    render() {
        const f: number = 3;
        return (
            <div className="app">hi { f }</div>
        )
    }
}