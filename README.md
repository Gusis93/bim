# BIM (Best Item Manager)

## Developed with

- Node => `v15.14.0`.
## Available Scripts

In the project directory, you can run:
### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.

If you install `npm install -g serve` you can also run the production version locally with `serve -s build` and see it in [http://localhost:5000](http://localhost:5000)

## Techonologies used

- React, typescript, SASS

## App logic

Most of the App funcitons trough 1 context called `FinalDataContext`. It takes care of delivering to the main area and the favourites area the needed data.

The `FinalDataContext` reacts to `Configuration` changes, this changes can be:

- Sorting
- Searching

Configurations are stored in a `reducer`, when the select or the filters change, they dispatch actions `search | sort | reset`.

Everytime the configuration is changed, the context computes the next set of items to show and stores them in its own state which is then passed down to the content rerendering with the appropiate items, leaving the content to just be a display view and all the computing happening in the back thanks to React.