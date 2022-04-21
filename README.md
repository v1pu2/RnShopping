# React Native App RnShopping

This App has been designed and developed based on the [Figma link](https://www.figma.com/file/bdyK3Qa580qLssr1BaT0l3/Test?node-id=0%3A1).

## Demo

<img src="/demo/demo.gif" width="355" height="710"/>

## Base dependencies

- [@react-navigation/native](https://github.com/react-navigation/react-navigation) navigation library.
- [@react-navigation/stack](https://github.com/react-navigation/react-navigation) navigation library.
- [react-redux](https://github.com/reduxjs/react-redux) [redux](https://github.com/reduxjs/redux) [redux-thunk](https://github.com/reduxjs/redux-thunk) [redux-persist](https://github.com/rt2zz/redux-persist) for the state management
- [react-native-svg](https://github.com/react-native-svg/react-native-svg) vector-based format that can scale infinitely without compromising quality.
- [react-native-safe-area-context](https://github.com/th3rdwave/react-native-safe-area-context) to render content within the safe area boundaries of a device like notches and iOS devices.

## Usage

### Folder structure

Follows a very simple project structure:

  - `src`: This folder is the main container of all the code inside the application.
  - `assets`: Asset folder to store custom fonts, SVGs and images, etc.
  - `component`: Folder to store any common component that is used throughout the app.
  - `containers`: Folder to store all the screens/features.
  - `App.js`: The main component that starts the whole app.
  - `index.js`: Entry point of the application as per React-Native standards.

### Splash screen customization

To customize the splash screen (logo, background colour and text) use a timer to set the visibility.

### Styleguide

For coding styling, use `StyleSheet` of React-native.

### Components

Components are the basic blocks of a react native application, but since we aim to minimize development complexity, all the components are at the same nesting level.


- In this folder, applied the main objects for the composition architecture. View of each screen by using component, and hooks.
- In the home screen, use cart reducer to manage the cart. 
- Set couint down timer on the checkout screen and navigate to the home screen.
- Logout on back click of Home screen.
- As send sms was not working, get otp from redux and navigate to Home.
