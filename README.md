# CREATE REACT APP
npx create-react-app projectName --template typescript
cd ./projectName


## INSTALL DEPENDENCIES
Here, I'm installing specific versions taught in the course:
npm install
  @typescript-eslint/eslint-plugin@^5.50.0
  @typescript-eslint/parser@^5.50.0
  slint@^8.33.0
  eslint-config-prettier@^8.6.0
  eslint-plugin-prettier@^4.2.1
  eslint-plugin-react@^7.32.2
  eslint-plugin-react-hooks@^4.6.0
  prettier@2.8.3


### .EDITORCONFIG EXPLANATION
Define this file as the root configuration, which prevents configurations from other directories from being applied.
Create a .editorconfig file
root = true
  [ * ]
  indent_style = space: Uses spaces (instead of tabs) to indent the code.
  indent_size = 2: Sets indentation to 2 spaces.
  end_of_line = lf: Uses "line feed" (LF) to indicate the end of a line, common in Unix and Linux systems.
  charset = utf-8: Sets the character encoding to UTF-8.
  trim_trailing_whitespace = true: Removes trailing whitespace at the end of each line.
  insert_final_newline = true: Automatically inserts a newline at the end of each file.


#### ESLINT CONFIG
Create ESLint configuration file
npm init @eslint/config@0.4.6
  "plugins": ["@typescript-eslint", "react", "react-hooks"],
  "rules": {
  "react-hooks/rules-of-hooks": "error",
  "react-hooks/exhaustive-deps": "warn",
  "react/prop-types": "off",
  "react/react-in-jsx-scope": "off",
  "@typescript-eslint/explicit-module-boundary-types": "off"
  },
  "settings": {
    "version": "detect"
  }


##### PRETTIER:
npm install --save-dev prettier
create a settings.json file and place it in the .vscode folder (format on save must be enabled in settings)

  {
    "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
  }

Automate and make all files run through Prettier:
npm prettier --write .\src
If Prettier throws an error, run npx eslint --fix src

PRETTIER CONFIG EXPLANATION
    "semi": true: Adds a semicolon at the end of every statement.
    "trailingComma": "none": Does not allow commas at the end of objects or arrays.
    "singleQuote": true: Uses single quotes instead of double quotes for strings.
    "bracketSpacing": true: Adds spaces between brackets and the content inside objects (e.g., { key: 'value' }).
    "arrowParens": "always": Always includes parentheses around arrow function parameters (e.g., (param) => {}).


###### FINISH REACT APP SETUP:
run npm start
this will open the React page viewer
download the React extension for Chrome


###### STYLED COMPONENTS:
npm i --save styled-components
VSCode doesn't recognize this format, and to use it, you need to install the pluggin eslint@typescript-eslint/no-unused-vars
You can do it via quick fix, or via npm

npm i --save-dev eslint@typescript-eslint/no-unused-vars
npm i --save-dev @types/styled-components

When importing a styled component into a component, you can use an alias instead of the original name given in the styles file.
We can use the styled component directly in the component file. It's not ideal, but if you choose to do this, it should be placed before the component code.


###### THEME CONFIGURING
If there is an error in the theme saying that this type does not exist in DefaultTheme, which is the default theme type of styled-components:
We need to config that the type we are using is from the theme we created.
In the theme file (e.g., dark.ts) - add the theme and add this at the end:

export type Theme = {
  corPrincipal: string;
  corSecundaria: string;
  corFundo: string;
  corFundoBotao: string;
  corBorda: string;
};




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
