import React, { Component } from "react";
import { render } from "react-dom";
import HomePage from "./HomePage";
import '../../static/css/index.css';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="page-container">
                <HomePage />
            </div>
        );
    }
}
const appDiv = document.getElementById("app");
render(<App />, appDiv);

