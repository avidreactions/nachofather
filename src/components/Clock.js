import React from "react";

export default class Clock extends React.Component {
    state = {
        time: new Date().toLocaleTimeString()
    }

    componentDidMount() {
        this.intervalID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        clearInterval(this.intervalID);
    }

    tick() {
        this.setState({
            time: new Date().toLocaleTimeString()
        })
    }

    render() {
        return (
            <div style={clockContainer}>
                <div style={clockStyle}>{this.state.time}</div>
            </div>

        )
    }
}

const clockStyle = {
    display: "inline-block",
    maxWidth: "100%",
    maxHeight: "100%",
    fontSize: "1.3em",
}

const clockContainer = {
    margin: "0.5em",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
}
