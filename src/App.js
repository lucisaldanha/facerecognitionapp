import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import Rank from './components/Rank/Rank';
import InputImageLinkForm from './components/InputImageLinkForm/InputImageLinkForm';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

import Particles from 'react-particles-js'; //Background effect.
import Clarifai from 'clarifai'; //Face recognition Api.
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
};

const initialState = { //To reset previous user info.
    imageInput: '',
    imageUrl: '',
    box: {},
    route: 'signin',
    isSignedIn: false,
    user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
    }
};

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            imageInput: '',
            imageUrl: '',
            box: {},
            route: 'signin',
            isSignedIn: false,
            user: {
               id: '',
               name: '',
               email: '',
               entries: 0,
               joined: ''
            }
        }
    };

    loadUser = (dataUser) => {
      this.setState({
         user: {
            id: dataUser.id,
            name: dataUser.name,
            email: dataUser.email,
            entries: dataUser.entries,
            joined: dataUser.joined
         }
      })
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

    faceBox = (box) => { //Box placed over face when submitting an image.
        // console.log(box);
        this.setState({box : box} );
    };

    onChangeInputFunction = (event) => {
        // console.log(event.target.value);
        this.setState({
            imageInput: event.target.value
        });
    };

    onImageSubmit = (event) => {
        // console.log('Click!');
        this.setState({
            imageUrl: this.state.imageInput
        });
        app.models
            .predict(Clarifai.FACE_DETECT_MODEL,this.state.imageInput)
            .then( response => {
                if(response){ 
                    fetch('http://localhost:3000/image', {
                        method: 'put',
                        headers: {'Content-Type': 'application/json'},
                        body: JSON.stringify({
                            id: this.state.user.id
                        })
                    })
                    .then(response => response.json())
                    .then(count => {
                        this.setState(Object.assign(this.state.user,{entries: count}))
                    })
                    .catch(err => console.log(err)) //Good practice to place a catch() after fetching method(improving error handling, if this fetch fails).
                }
                this.faceBox(this.calculateFaceLocation(response));
            })
            .catch(err => console.log(err)); //Catch statement for errors from the Clarifai api.
    };

    routeChange = (route) => {
        if ( route === 'signin') { // App is on Sign In form.
            this.setState(initialState); // When logging out, previous state will be clear to initialState.
        } else if (route === 'home') { 
            this.setState({isSignedIn: true});// User is logged in/signed in.
        } else {
            this.setState({isSignedIn: false});// App is on Register form.
        }
        this.setState({route: route});
    };
    
    render() {
        const {isSignedIn, route, box, imageUrl} = this.state; //To replace this.state everywhere else.
        return (
            <div className="App">
                <Particles 
                    className='particles'
                    params={particlesOptions}
                />
                <Navigation isSignedIn={isSignedIn} routeChange={this.routeChange} />
                { route === 'home' 
                ?   <div>
                        <Logo />
                        <Rank name = {this.state.user.name} entries = {this.state.user.entries} />
                        <InputImageLinkForm 
                            onInputChange={this.onChangeInputFunction} 
                            onButtonClick={this.onImageSubmit} 
                        />
                        <FaceRecognition
                            box = {box}
                            ImageUrlDisplay = {imageUrl} 
                        /> 
                    </div> 
                : 
                    ( route === 'register' ?
                        <Register 
                           routeChange={this.routeChange}
                           loadUser={this.loadUser}
                        />
                    :
                        <SignIn 
                            routeChange={this.routeChange} 
                            loadUser={this.loadUser}
                        />                     
                    )
                }
           </div>
        );
    }
}

export default App;
