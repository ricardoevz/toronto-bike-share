# Toronto's Bike Share

## Requirements:
- No more than 2 hours
- Single view app using Toronto's Bike Share API to list all bike stations with the name of the station and how many bikes are available from each station and sorted by station name.
- You will need to combine two endpoints
    - Station information (long lived data, station name): https://toronto-us.publicbikesystem.net/ube/gbfs/v1/en/station_information
    - Station status (short lived data, bike availability): https://toronto-us.publicbikesystem.net/ube/gbfs/v1/en/station_status

- Data polling/refreshing
    - Station information is only loaded once, or has long polling time.
    - Station status is polled 30 seconds after the previous fetch completes, bike availability reflected in the Ul.
    - Users can also manually refresh station status with a button press if fetch is not already in progress.


## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
