import React, { Component } from 'react';
import './App.css';
import '../../modules/generator.fn';

class App extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="container">
                <h2>Generator Functions, What Are they?</h2>
                <p>function* myGenerator ()</p>
            </div>
        );
    }
}

export default App;