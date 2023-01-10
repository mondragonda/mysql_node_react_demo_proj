# MySQL + NodeJS + React Density Labs
## Installation instructions

1. Run `npm install` command in  `/express_api` and  `/express_api` and `react_test_app` directories.
3. Add a local database server configuration params in `/express_api/env.js` file.
2. In `/express_api` run `node ./setup.js`. The script will create the MySQL database needed for the project.
3. In `/express_api`. Run `node ./index.js`. This will start the express server.
4. In `react_test_app`. Run `npm start`. This will start the react development server.
5. React app will be available on `http://localhost:3000` and it will consume the express API running on `http://localhost:3001`

![Leave comments](/image.png "Leave comments")
