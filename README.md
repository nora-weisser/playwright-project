# Playwright TypeScript Project

## Overview
This project is Playwright framework built with TypeScript, utilizing Playwright's built-in runner with a page object model as the base design. 

## Getting Started

### Prerequisites
- Node.js: Download and install Node.js from [here](https://nodejs.org/en/download)
- Visual Studio Code: Download and install VS Code from [here](https://code.visualstudio.com/)

### Execution in Local
1. Clone the repository:

   ```sh
   git clone git@github.com:S-ipk/PlaywrightProject2.git
   ```
2. Navigate to the root project directory and install the following:
    * Install npm packages using
    ```
    npm install
    ```
    * If this is your first time with Node.js Playwright framework, you will need to download the required browsers
    ```
    npx playwright install
    ```
3. In the root project directory, execute the following command to run all UI and API tests:
    ```
    npx playwright test
    ```
    * To run on a specific Firefox or WebKit browser, use the following command. By default, the project will run on Chromium:
      - Firefox:
      ```
      BROWSER=firefox npm run test:ui
      ```
      - WebKit:
      ```
      BROWSER=webkit npm run test:ui
      ```
      
      **Note**: By default, tests will run in headless mode and in parallel. 
      If you would like to run UI tests in headed mode, use the `--headed` flag and/or if you would like to disable parallelism, use `--workers=1`
      eg:
      ```
      npm playwright test --headed --workers=1
      ```
        
**Optional:** If you would like to execute tests using an IDE and the Playwright runner, open VS Code and download the extension: **Playwright Test for VS Code**. 
You can also enable the NPM SCRIPTS in the VS Code explorer and run them from there.
