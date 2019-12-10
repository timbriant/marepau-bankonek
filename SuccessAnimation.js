import React from 'react';
import LottieView from 'lottie-react-native';

export default class SuccessAnimation extends React.Component {
  
  render() {
    if (this.props.link === "success"){
      return <LottieView source={require('./assets/1708-success.json')} autoPlay loop={false}/>;
    }
    else if(this.props.link === "lend"){
      return <LottieView source={require('./assets/5673-referral.json')} autoPlay loop={true}/>;
    }
    else if(this.props.link === "eligible"){
      return <LottieView source={require('./assets/796-check-mark.json')} autoPlay loop={true}/>;
    }
    else{
      return <LottieView source={require('./assets/292-5-stars.json')} autoPlay loop={false}/>;
    }
  }
}