This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Face Recognition app

In construction... 

### `Objective`

Create a responsive webpage that users can: 

- Sign In 
- Input an image 
- Check if the input image has a face, which will have a box over it
- Sign Out

### `State we are at`

So far: the API is working, able to recognize faces over an image in our website. 
However, our website gives a bounding box over the image, on top of one face. 

All buttons and links are working properly, directing the user to Sign In, Register, and Home.

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

- Check security of http POST request, we alread an issue to fix it.

- Implement Validation security on Front - End side.

- Change Logo styling (I changed my mind about the color).

- On Sign In, try to add a react-alert, on dark mode, create a new branch.

- Website could recognize more than one face in an image.

To be defined later.

