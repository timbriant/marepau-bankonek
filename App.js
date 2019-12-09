import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './Home.js';
import RegisterScreen from './Register.js';
import ExistingCustomerScreen from './ExistingOB.js';
import ExistingCustomerOTPScreen from './OTPOB.js';



const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Register: RegisterScreen,
    ExistingCustomer: ExistingCustomerScreen,
    ExistingCustomerOTP: ExistingCustomerOTPScreen
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