import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
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
            imageUrl: '',
            box: {},
            route: 'signin',
            isSignedIn: false
        }
    };

    calculateFaceLocation = (data) => {
       const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
       const image = document.getElementById('inputimage');
       const width = Number(image.width);
       const height = Number(image.height);
       return {
        leftCol: clarifaiFace.left_col * width,
        topRow: clarifaiFace.top_row * height,
        rightCol: width - (clarifaiFace.right_col * width),
        bottomRow: height - (clarifaiFace.bottom_row * height)
       } 
    };

    faceBox = (box) => {
        console.log(box);
        this.setState({box : box} );
    };

    onChangeInputFunction = (event) => {
        // console.log(event.target.value);
        this.setState({
            imageInput: event.target.value
        });
    };
    onButtonClickFunction = (event) => {
        // console.log('Click!');
        this.setState({
            imageUrl: this.state.imageInput
        });
        app.models.predict(
            Clarifai.FACE_DETECT_MODEL, 
            this.state.imageInput)
        .then( response => {
              // do something with response
              // console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
              this.faceBox(this.calculateFaceLocation(response));
            })
        .catch( err => console.log(err))  // there was an error
    };
    routeChange = (route) => {
        if ( route === 'signin') {
            this.setState({isSignedIn: false});
        } else if (route === 'home') {
            this.setState({isSignedIn: true});
        } else {
            this.setState({isSignedIn: false});
        }
        this.setState( {route: route} );
    };
    
    render() {
        const {isSignedIn, route, box, imageUrl} = this.state; //instead of writing everywhere this.state
        return (
            <div className="App">
                <Particles 
                    className='particles'
                    params={particlesOptions}
                />
                <Navigation isSignedIn={isSignedIn}  routeChange={this.routeChange} />
                { route === 'home' 
                ?   <div>
                        <Logo />
                        <Rank />
                        <InputImageLinkForm 
                            onInputChange={this.onChangeInputFunction} 
                            onButtonClick={this.onButtonClickFunction} 
                        />
                        <FaceRecognition
                            box = {box}
                            ImageUrlDisplay = {imageUrl} 
                        /> 
                    </div> 
                : 
                    ( route === 'register' ?
                        <Register routeChange={this.routeChange} />
                    :
                        <SignIn routeChange={this.routeChange} />                     
                    )
                }
           </div>
        );
    }
}

export default App;
