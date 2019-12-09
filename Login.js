import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, ThemeProvider } from 'react-native-elements';



export default class LoginScreen extends React.Component {
    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
       <ThemeProvider>
            <Input
            placeholder='BASIC INPUT'
            />

            <Input
            placeholder='INPUT WITH ICON'
            leftIcon={{ type: 'font-awesome', name: 'chevron-left' }}
            />

            <Input
            placeholder='INPUT WITH CUSTOM ICON'
            leftIcon={
                <Icon
                name='user'
                size={24}
                color='black'
                />
            }
            />

            <Input
            placeholder='INPUT WITH ERROR MESSAGE'
            errorStyle={{ color: 'red' }}
            errorMessage='ENTER A VALID ERROR HERE'
            />
       </ThemeProvider>
      );
    }
  }