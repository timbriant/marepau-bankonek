import React from 'react';
import LottieView from 'lottie-react-native';

export default class SuccessAnimation extends React.Component {
  render() {
    return <LottieView source={require('./assets/1708-success.json')} autoPlay loop={false}/>;
  }
}