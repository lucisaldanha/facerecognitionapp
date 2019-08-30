import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import InputImageLinkForm from './components/InputImageLinkForm/InputImageLinkForm';

import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
    "particles": {
        "number": {
            "value": 100,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "size": {
            "value": 1
        }
    } 
}

class App extends Component {
    render() {
        return (
            <div className="App">
                <Particles 
                    className='particles'
                    params={particlesOptions}
                />
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
