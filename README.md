# Typescript template

## Description

This is a template for fullstack TypeScript projects. It is designed to be used with both client and server directories contained within a single repository. The client-side code is written in TypeScript and utilizes Node.js for server-side development.

Bundling of the project is handled using [Rollup](https://rollupjs.org/guide/en/), a module bundler for JavaScript which allows for efficient code splitting and optimization. Additionally, [BrowserSync](https://browsersync.io/) is integrated into the project to provide live reloading and synchronization across multiple devices during development.

## Quick Start

1. Install all npm packages required for both the client and server directories by running the following command:
   ```bash
   npm run install
   ```


2. Once the packages are installed, you can concurrently run the frontend and backend of the project using Browsersync with watch options. This command will start the development server and open your default browser:
   ```bash
   npm start
   ```

3. In the console log, you will see the port number on which the server is running. Copy this port number.
4. Navigate to the `client > src` directory and locate the `env-config.json` file. Open the file and find the port variable. Paste the previously copied port number as the value for the port variable.


### More Scripts:

In addition to the main script for installation and running the project (npm run install and npm start), the following scripts are available:

   1. `install:client` - This script can be used to install the client-directory dependencies individually.
   2. `install:server` - This script can be used to install the server-directory dependencies individually.

You can run these scripts when you specifically need to install dependencies for either the client or server directories separately.

