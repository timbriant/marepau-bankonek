import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from './Home.js';
import RegisterScreen from './Register.js';
import ExistingCustomerScreen from './ExistingOB.js';
import ExistingCustomerOTPScreen from './OTPOB.js';
import ExistingCustomerDetailScreen from './DetailsOB.js';
import TermsAndCondtionsScreen from './TermsAndCondition.js';
import SuccessScreen from './Success.js';
import DashboardScreen from './Dashboard.js';
import InitialLendingScreen from './InitialLending.js';
import LendScanQRScreen from './LendScanQR.js';
import RequestScreen from './Request.js';
import LendSuccessScreen from './LendSuccess.js';
import EligibleScreen from './Eligible.js';

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Register: RegisterScreen,
    ExistingCustomer: ExistingCustomerScreen,
    ExistingCustomerOTP: ExistingCustomerOTPScreen,
    ExistingCustomerDetails: ExistingCustomerDetailScreen,
    TermsAndCondition: TermsAndCondtionsScreen,
    Success: SuccessScreen,
    Dashboard: DashboardScreen,
    InitialLending: InitialLendingScreen,
    LendScanQR: LendScanQRScreen,
    Request: RequestScreen,
    LendSuccess: LendSuccessScreen,
    Eligible:EligibleScreen
  },
  {    
    headerMode: 'none',
    initialRouteName: "Request"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}