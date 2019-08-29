import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import InputImageLinkForm from './components/InputImageLinkForm/InputImageLinkForm';


import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navigation />
                <Logo />
                <Rank />
                <InputImageLinkForm />
                {/*
                                
                                <FaceRecognition /> */ }
           </div>
        );
    }
}

export default App;
