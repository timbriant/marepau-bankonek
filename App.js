import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './Home.js';
import LoginScreen from './Login.js';


const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Login: LoginScreen
  },
  {    
    headerMode: 'none',
    initialRouteName: "Home"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}