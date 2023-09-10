# FE-registration-portal

### Project Setup

1. #### Installing Node
    An asynchronous event-driven JavaScript runtime having features like JSX support, JavaScript compiler and bundler. Node (>v14.0.0) comes with `npm` and `npx` and we will be using `npx create-react-app` command to generate basic structure of a react application. NPM is Node Package Manager which is helpful for managing different packages and their versions across different node projects.

    Confirm that Node is installed using command prompt, open command prompt and type -
    ```bash
    node -v
    ```
    and
    ```bash
    npm -v
    ```
    If you get some version printed on the console like `vxx.x.x` and `x.x.x`, then you have node installed on your machine. Then upgrade to latest version using
    command -
    ```bash
    nvm install latest
    ```
    Otherwise, you will need to install Node on your machine by going to [official Node.js download page](https://nodejs.org/en/download/) and then click on 'Current' tab and then download 'Windows Installer' (.msi file) or 'macOS Installer' (.pkg file) accordingly. Follow the instructions on the installation wizard without making any custom changes.

---

2. #### Cloning Git Repository (i.e. react app)
    Ensure that you have Git installed on your machine and configured with for your Git account.
    > Installing and setting up Git will be explain in other session.

    To clone (download) this repository, open the command prompt in the folder where you want to keep this project. Then enter the following command which will automatically download the repository -
    ```bash
    git clone https://github.com/PCSB-Web-Team/FE-registration-portal
    ```
---

3. #### Installing Dependency Packages
    Open command prompt in the project folder -
    To download `node_modules` (where all the packages will be downloaded to run and build the react app) run following command -
    ```bash
    npm ci
    ```
    > Notice that, many tutorials suggest using `npm install` to install dependencies, but here `npm ci` specifies that the dependencies are **C**lean **I**nstalled with the versions prescribed in the package-lock.json file. It never writes to `package.json` or `package-lock.json`.
    New folder named `node_modules` (big sized!!!) will be created in the project folder, don't worry it won't be pushed to remote GitHub repository.

---

4. #### Running the React App
	Now all the configuration and dependencies are set up, it's time to run the react app.
    To run the react app, open the folder in VS Code and open New Terminal, then run the following command -
    ```bash
    npm run dev
    ```
    This will compile, and start the local development server on [http://localhost:3000](http://localhost:3000).
    Now the website is running and will fetch any changes made in the code and will show the changes in real-time.

---

For any queries contact project admin.