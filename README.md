
# paffe-example-project (Briq interview coding challenge)

This application displays random quotes fetched from https://api.quotable.io/ and allows the user to either rate the quote or simply fetch another random quote. If the user rates a quote 4 stars or above a similar quote is found from a list of quotes fetched from the above API using a javascript using sentiment analysis.

The application is built using a Node backend and Vue3 with the Quasar framework for the UI.

  
## Required global dependencies to run the project

Make sure that you have Node >=12.22.1 and NPM >=6.14.12 installed on your machine

Install quasar CLI globally using on of the following commands:

```bash
$ yarn global add @quasar/cli
# or
$ npm  install -g @quasar/cli
```

## Install project dependencies

```bash
$ yarn install
```

### Start the app in development mode

Navigate to the projects root directory in a terminal and enter one of the following commands

```bash
$ quasar dev
#or
$ npm run dev
```

### Build the app for production

Enter one of the following commands in a terminal after navigating to the projects root directory

```bash
$ quasar build
#or
$ npm run build
```