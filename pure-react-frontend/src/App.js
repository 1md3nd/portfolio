import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./components/HomePage";
import './styles/index.css';
import './styles/font.css';

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

// Ensure the ID matches the one in your index.html
const appDiv = document.getElementById("app");
if (appDiv) {
    const root = ReactDOM.createRoot(appDiv);
    root.render(<App />);
} else {
    console.error('Failed to find the root element');
}
