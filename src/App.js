import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import InputImageLinkForm from './components/InputImageLinkForm/InputImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
 apiKey: '5d748bb94be74d378353acf8e66b8939'
});

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
    constructor(props){
        super();
        this.state = {
            imageInput: '',

        }
    };

    onChangeInputFunction = (event) => {
        console.log(event.target.value);
    };
    onButtonClickFunction = (event) => {
        console.log('Click!');
        app.models.predict(
            Clarifai.COLOR_MODEL, 
            "https://www.sagefruit.com/wp-content/uploads/2016/08/Ambrosia-350-x-350-300x300.png")
        .then(
            function(response) {
              // do something with response
              console.log(response);
            },
            function(err) {
              // there was an error
            }
        );
    };
    
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
                <InputImageLinkForm 
                    onInputChange={this.onChangeInputFunction} 
                    onButtonClick={this.onButtonClickFunction} 
                />
                <FaceRecognition /> 
           </div>
        );
    }
}

export default App;
