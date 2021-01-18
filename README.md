# Stock market application - CWA

## Libraries Used

-   Babel 7 - [What is Babel?](https://babeljs.io/docs/en/)
-   Webpack 4 - [Why webpack?](https://webpack.js.org/concepts/why-webpack/)
-   React 16 - [Getting Started with React](https://www.taniarascia.com/getting-started-with-react/) | [React For Beginners](https://reactjs.org/docs/getting-started.html#learn-react)
-   Jest - [Try Jest](https://jestjs.io/docs/en/getting-started.html)

## Installation

You can clone the repository from : (https://github.com/SridharanManoharan/stock-market-cwa)

Make sure you have node and npm (node package manager) installed. Then on your terminal, navigate to the root folder of the project and run.

```bash
npm install

```

## To Run the project with mock server

```bash
npm run dev:mock
```

It should automatically launch the dev url in the browser.

## For production build with back-end API

Clone the stock-market-backend repo [https://github.com/SridharanManoharan/stock-market-backend]

```bash
git clone https://github.com/SridharanManoharan/stock-market-backend.git
```
Follow the instructions mentioned the README file of stock-market-backend to start the application.


Run CWA with the below command and this will create a "prod" in the <root dir>

```bash
npm run build
```

prod folder will get created on the root dir with production optimised code. Open the index.html file from the prod folder to run application intergrated with backend API.