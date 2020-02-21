This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Face Recognition app

In construction... 

### `Objective`

Create a Responsive Webpage that users can: 

- Register 
- Sign In 
- Input an image on a input box
- Check if the input image has a face using an Machine Learning API, which output will be used to draw a box on top of image's face
- Record number of image entries a user has
- Sign Out

### `State we are at`

Website is deployed. Database and server are working properly. 

All buttons and links are working properly, directing the user to Sign In, Register, and Home.

Face image recognizes one(1) face over an image. If there is more faces on image, only recognizes one. 

### `Past steps`

- Connect to Database and Server.

- Fix image default, after uploading a image in the app and signing out, when signin back image still there.

- Check if Server and Database work properly with Front End:
    - Test 1 if: Sign in with new user does not let person sign in. Result: It works.
    - Test 2 if: Register a new user, check if adding/updating user properties on Database 'users' and 'login' tables. Check if new user can sign in with right and wrong password. Check if entries value update. Result: All works.
    - Clean up code and add more notes into code. 
- Test Heroku Postgres and Heroku Server is connected (Heroku).

- Deploying to Heroku.

- Test when deployed if Sign In(ok), Register(ok) and Image recognition(ok) works. Register with existing email (id increments? No. Fixed issue on Server side).

### `Next steps`

- Add information of Linkedin profile and github profile on web page.

- Add footer on website, implementing a cool model.

- Implement a mechanism of traffic information on web page (idea using MailChimp).

- Check security of http POST request, we alread an issue to fix it.

- Implement Validation security on Front - End side.

- Change Logo styling (I changed my mind about the color).

- On Sign In, try to add a react-alert, on dark mode, create a new branch.

- Website could recognize more than one face in an image.

To be defined later.

