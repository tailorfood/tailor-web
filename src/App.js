import React, { Component } from 'react'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="app">
                <img className="logo" src={require('./tailor.png')}/>
                <i className="text">coming soon.</i>
            </div>
        )
    }
}

export default App
