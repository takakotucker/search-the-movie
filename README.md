# Movie Finder (by movie, TV or person)

* `flow` is used to check types -> [https://flow.org/en/docs/getting-started/]
* `antd` React UI library is used -> [https://ant.design/docs/react/introduce?utm_source=next.36kr.com]


## Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

To run tests

#### `brew install watchman` 

#### `npm test` 

NOTE: unit tests are incomoplete
Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

## Installing a Dependency

The generated project includes React and ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with `npm`:

```sh
npm install
```

###### Dependancies

* [TheMovieDB API](https://developers.themoviedb.org/3)

---

###### KNOWN BUG:

- Some css issues - eg, showing person icon on placeholder of TVs, movies, no margin on top etc


###### TODO:

- Add sass compiliation, currently only importing css...
- Unit tests to be completed
