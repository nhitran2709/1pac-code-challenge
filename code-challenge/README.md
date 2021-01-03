# 1PAC Code Challenge

## Dev

Tran Thi Yen Nhi

## Timeline

Jan 03, 2021

## Repo

- Repo: `https://github.com/nhitran2709/1pac-code-challenge.git`
- Clone app: `git clone https://github.com/nhitran2709/1pac-code-challenge.git`
- Run: cd `1pac-code-challenge`
- Pull code from master branch to local
- cd `code-challenge`

## Quick start

1.  **Install dependencies.**

    Install dependencies

    ```sh
    yarn install
    ```

2.  **Setup App** Create a `.env` file in root folder Copy and paste the whole content in .env.example.local file into `.env` which was created. Change the value after = symbol

3.  **Runs the practice in the development mode**

    ```sh
    yarn run start
    ```

    Runs the site in the development mode.<br> Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

    The page will reload if you make edits.<br>

## Directory structure

A quick look at the top-level files and directories you'll see in project.

    .
    ├── node_modules
    ├── src
    │   ├── actions
    │   ├── apis
    │   ├── components
    │   ├── constants
    │   ├── helpers
    │   ├── models
    │   ├── reducers
    │   ├── sagas
    │   ├── store
    ├── App.tsx
    ├── index.tsx
    ├── index.scss
    ├── .editorconfig
    ├── .env
    ├── .env.example
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierrc
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    └── yarn.lock

1.  **`/node_modules`**: The directory where all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/packages`**: This directory will contain all of the code related to what you will see on the front-end of your site.

3.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

4.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

5.  **`README.md`**: A text file containing useful reference information about your project.

6.  **`yarn.lock`**: [Yarn](https://yarnpkg.com/) is a package manager alternative to npm. You can use either yarn or npm, though all of the Gatsby docs reference npm. This file serves essentially the same purpose as `package-lock.json`, just for a different package management system.

## Versioning

This project using the following versioning:

- Node 12.0.0
- Yarn 1.22.4
